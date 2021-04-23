import { NewsItem } from './constants';

export const news: NewsItem[] = [{
  title: 'OpenStudio Application v1.1.0',
  time: '2021-01-28 11:44:01 -0700',
  html: `OpenStudio Application v1.1.0 has been released. This release is the first update of the separated OpenStudio SDK from the Application. View the complete <a href="https://github.com/openstudiocoalition/OpenStudioApplication/releases/tag/v1.1.0">Release Notes</a>.`
}, {
  title: 'New BCL implementation coming soon',
  time: '2020-11-11 13:02:04 -0700',
  html: `NREL is working on a new BCL implementation.  The current BCL website will be deprecated. The new BCL replacement will use a set of GitHub repositories as the back-end for robustness, transparency and flexibility: version-controlled Measures, Components, and Weather Files.  NREL will migrate its current BCL content to a set of GitHub repositories and will provide instructions for organizations and groups with BCL content to do the same. The new BCL aims to preserve its API functionality (and syntax) and interface to existing DOE/NREL tools and to the OpenStudio Coalition’s OpenStudio Application. A minimal web interface will be provided.  Stay tuned for more information, launch date, and content migration instructions.`
}, {
  title: 'OpenStudio 3.1.0 SDK Release',
  time: '2020-10-16 19:53:13 -0600',
  html: `OpenStudio 3.1.0 SDK has been released. In OpenStudio 3.1.0, the SDK, EnergyPlus, standards, and server have all received improvements. Development and distribution of the OpenStudioApplication and the SketchUp plugin have transitioned to the independent OpenStudio Coalition. View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v3.1.0">Release Notes</a> for more information.`
}, {
  title: 'OpenStudio Application v1.0.0',
  time: '2020-04-27 17:22:34 -0600',
  html: `OpenStudio Application v1.0.0 has been released.  This release marks the first installment of the separated OpenStudio SDK from the Application.  View the complete <a href="https://github.com/NREL/OpenStudioApplication/releases/tag/v1.0.0">Release Notes</a>.`
}];
