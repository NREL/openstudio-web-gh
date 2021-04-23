import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateHTML'
})
export class TruncateHTMLPipe implements PipeTransform {

  transform(html: string, charLimit = 140): string {
    if (!html || html.length <= charLimit) {
      return html;
    }

    const withoutHtml = html.replace(/<(?:.|\n)*?>/gm, '');
    const shortened = withoutHtml.substring(0, charLimit);
    const periodIndex = shortened.lastIndexOf('.');
    if (periodIndex > 0) {
      return shortened.substr(0, periodIndex + 1);
    }

    return `${shortened}...`;
  }

}
