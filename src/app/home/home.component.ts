import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

type Cue = {
  id: number;
  startTime: number;
  endTime: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnDestroy, OnInit {
  captions = '';
  showCaptions = false;

  private captionsLoaded = false;
  private cues: Cue[] = [];
  private interval: number;
  private lastCue = -1;
  private lastTime = -1;
  private player: YT.Player;
  private readonly pollingInterval = 100;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  async ngOnInit(): Promise<void> {
    // Wait for YouTube API to initialize
    while (!(window as any).youTubeAPIReady) {
      await new Promise(res => setTimeout(res, this.pollingInterval));
    }

    this.player = new YT.Player('player', {
      events: {
        onReady: this.onReady,
        onStateChange: this.onStateChange
      }
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private loadCaptions = () => {
    const videoElement = document.createElement('video');
    const trackElement = document.createElement('track');
    trackElement.src = '/assets/subtitles/captions.en.vtt';
    trackElement.default = true;
    trackElement.onload = () => {
      const cues = Array.from(trackElement.track.cues) as unknown as VTTCue[];
      this.cues = cues.map(({startTime, endTime, text}, i) => {
        return {
          id: i,
          startTime,
          endTime,
          text
        };
      });
    };
    videoElement.append(trackElement);
  };

  private onReady = () => {
    this.interval = setInterval(() => {
      const time = this.player.getCurrentTime();
      if (time !== this.lastTime) {
        this.lastTime = time;
        this.updateCaptions(time);
      }
    }, this.pollingInterval);
  };

  private onStateChange = ({data}: YT.OnStateChangeEvent) => {
    const {BUFFERING, PLAYING, PAUSED} = YT.PlayerState;
    this.showCaptions = [BUFFERING, PLAYING, PAUSED].includes(data);

    if (!this.captionsLoaded) {
      this.captionsLoaded = true;
      this.loadCaptions();
    }
  };

  private updateCaptions(time: number) {
    const cue = this.cues.find(({endTime, startTime}) => time >= startTime && time <= endTime);

    if (cue) {
      const {id, text} = cue;
      if (this.lastCue !== id) {
        this.lastCue = id;
        this.captions = text
          .replaceAll('\n', '<br>')
          .replaceAll('OpenStudio', '<strong>OpenStudio</strong>');
        this.cdRef.detectChanges();
      }
    } else if (this.lastCue !== -1) {
      this.lastCue = -1;
      this.captions = '';
      this.cdRef.detectChanges();
    }
  }
}
