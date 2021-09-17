import { DateTime } from 'luxon';
import { developerNews } from './developer-news';
import { news } from './news';

type Version = `${number}.${number}.${number}`;

export type NewsItem = {
  title: string,
  time: string,
  html: string,
};

export type NewsType = 'developer-news' | 'news';

export type Release = {
  title: string
  type: 'sdk' | 'openstudio-application' | 'pat' | 'developer-sdk',
  version: Version,
  sha?: string,
  winUrl: `${string}.exe`,
  macUrl: `${string}.dmg`,
  linuxUrl: `${string}.deb`,
};

export type PluginRelease = {
  title: string
  type: 'plugin',
  version: Version,
  url: `${string}.rbz`,
};

export type Publication = { html: string };

export const getTitle = (route: string) => {
  let title = '';
  switch (route) {
    case '/developer-news':
      title = 'Developer News - ';
      break;
    case '/developers':
      title = 'Developers - ';
      break;
    case '/downloads':
      title = 'Downloads - ';
      break;
    case '/forum':
      title = 'Forum - ';
      break;
    case '/news':
      title = 'News - ';
      break;
    case '/openstudio-contribution-policy':
      title = 'OpenStudio Contribution Policy - ';
      break;
    case '/publications':
      title = 'Major Recent Publications - ';
      break;
  }

  const newsMatch = route.match(/^\/((?:developer-)?news)\/(\d+)$/);
  if (newsMatch) {
    const timestamp = Number(newsMatch[2]);
    const newsItem = findNewsItem(timestamp, newsMatch[1] as NewsType);
    title = `${newsItem.title} - `;
  }

  return `${title}OpenStudio`;
};

export const findNewsItem = (timestamp: number, newsType: NewsType): NewsItem | undefined => {
  const timestampStr = DateTime.fromSeconds(timestamp).setZone('America/Denver').toFormat('yyyy-MM-dd HH:mm:ss ZZZ');
  if (newsType === 'news') {
    return news.find(newsItem => newsItem.time === timestampStr);
  } else {
    return developerNews.find(newsItem => newsItem.time === timestampStr);
  }
};
