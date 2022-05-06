import { NewsItem } from './constants';

export const developerNews: NewsItem[] = [{
  title: 'OpenStudio 3.4.0 SDK Release',
  time: '2022-05-05 11:00:00 -0600',
  html: 'OpenStudio 3.4.0 SDK has been released. 3.4.0 is a major release, this update includes several new features, performance improvements, and bug fixes. View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v3.4.0">Release Notes</a> for more information.'
},{
  title: 'OpenStudio 3.3.0 SDK Release',
  time: '2021-11-05 11:00:00 -0600',
  html: 'OpenStudio 3.3.0 SDK has been released. 3.3.0 is a major release, this update includes several new features, performance improvements, and bug fixes. View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v3.3.0">Release Notes</a> for more information.'
}, {
  title: 'BCL 2.0 implementation ready for public testing',
  time: '2021-08-11 12:33:40 -0600',
  html: `<p>NREL has completed development of Building Component Library 2.0 and it is now available for public testing at <a href="https://bcl2.nrel.gov/">https://bcl2.nrel.gov/</a>. The main BCL website is deprecated and will be replaced by this new implementation.</p>
<p>BCL 2.0 uses a set of GitHub repositories as the back-end for robustness, transparency, and flexibility: version-controlled Measures, Components, Weather Files, and more. Instructions are available on the new site for organizations and groups with BCL content to migrate their components and measures to GitHub repositories.</p>`
}, {
  title: 'OpenStudio 3.2.1 SDK Release',
  time: '2021-06-28 11:00:35 -0600',
  html: 'OpenStudio 3.2.1 SDK has been released. 3.2.1 is a minor release, this update includes performance improvements and bug fixes. View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v3.2.1">Release Notes</a> for more information.'
}, {
  title: 'OpenStudio 3.2.0 SDK Release',
  time: '2021-05-05 02:01:23 -0600',
  html: 'OpenStudio 3.2.0 SDK has been released. 3.2.0 is a major release, this update includes several new features, performance improvements, and bug fixes. View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v3.2.0">Release Notes</a> for more information.'
},{
  title: 'OpenStudio 2.8.1 Released',
  time: '2019-06-18 15:00:55 -0600',
  html: `OpenStudio 2.8.1 has been released.`
}, {
  title: 'OpenStudio 2.8.0 Released',
  time: '2019-04-15 10:45:12 -0600',
  html: `OpenStudio 2.8.0 has been released. <br/>
        In OpenStudio 2.8.0, the SDK, standards, and server have all received improvements.  View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.8.0">Release Notes</a>.`
}, {
  title: 'OpenStudio 2.7.0 Released',
  time: '2018-10-16 11:39:27 -0600',
  html: `OpenStudio 2.7.0 has been released. <br/>
        In OpenStudio 2.7.0, the SDK, standards, and server have all received improvements.  View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.7.0">Release Notes</a>.`
}, {
  title: 'OpenStudio 2.6.0 Released',
  time: '2018-07-13 13:25:21 -0600',
  html: `OpenStudio 2.6.0 has been released. <br/>
        In OpenStudio 2.6.0, the SDK, standards, and server have all received improvements.  This release includes new features to help write better measures.  View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.6.0">Release Notes</a>.`
}, {
  title: 'OpenStudio 2.3.0 Released',
  time: '2017-10-04 12:51:43 -0600',
  html: `OpenStudio 2.3.0 has been released. <br/>
        The biggest new feature in OpenStudio 2.3.0 is the integration of the OpenStudio Geometry Editor in the OpenStudio Application.
        The OpenStudio Geometry Editor is a new, open source software module that developers can leverage to produce building energy modeling UIs that include geometry creation.
        The OpenStudio Geometry Editor is implemented in JavaScript with minimal dependencies, allowing it to be integrated into a wide range of applications. View the complete Release Notes.`
}, {
  title: 'OpenStudio 2.0.0 Released',
  time: '2016-12-22 12:04:19 -0700',
  html: `OpenStudio 2.0.0 has been released.  This release brings the new <a href="http://nrel.github.io/OpenStudio-user-documentation/reference/command_line_interface/">OpenStudio Command Line Interface</a>
        (CLI) for applying OpenStudio Measures and running simulations easily.  This release also includes a new implementation of the Parametric Analysis Tool implemented as a web application.
        Complete release notes are available <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.0.0">here</a>.`
}, {
  title: 'Supports EnergyPlus 8.2 Update 1',
  time: '2014-12-11 12:51:55 -0700',
  html: `OpenStudio 1.5.4 has just been released with support for <a href="https://github.com/NREL/EnergyPlus/releases/tag/v8.2.0-Update-1.2">EnergyPlus 8.2 update 1</a>`
}, {
  title: 'OpenStudio now using Ruby v. 2.0',
  time: '2017-07-24 11:58:40 -0600',
  html: `<p class="p1">Starting with v. 1.4.1 and higher, OpenStudio uses Ruby v. 2.0. &nbsp;The SketchUp Plug-in is compatible with SketchUp 2014 only.</p>
`
}, {
  title: 'New OpenStudio Developer Mailing List',
  time: '2014-01-09 15:56:50 -0700',
  html: `<p class="p1">Join the OpenStudio Developer Mailing List for important announcements about changes to the OpenStudio APIs or build configurations. Visit the <a href="/developers">Developers</a> page to join the mailing list.</p>`
}, {
  title: 'OpenStudio is moving to GitHub',
  time: '2013-07-12 10:52:53 -0600',
  html: `<p>The OpenStudio source code repository is moving from SVN to GitHub. We are currently in the process of making this change. The SVN repository is still available as read-only.
        If you would like access to the GitHub source code please setup an account at https://github.com/ and email OpenStudio@NREL.gov with your GitHub username, and the email used to register.</p>
        <p>Thanks for your patience through this process.</p><p>The OpenStudio Team.</p>`
}];
