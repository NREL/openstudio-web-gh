import { PluginRelease, Release } from './constants';

export const releases: (Release | PluginRelease)[] = [{
  title: 'OpenStudio Release',
  type: 'sdk',
  version: '3.2.1',
  sha: 'bdbdbc9da6',
  winUrl: 'https://openstudio-builds.s3.us-east-1.amazonaws.com/3.2.1/OpenStudio-3.2.1+bdbdbc9da6-Windows.exe',
  macUrl: 'https://openstudio-builds.s3.us-east-1.amazonaws.com/3.2.1/OpenStudio-3.2.1+bdbdbc9da6-Darwin.dmg',
  linuxUrl: 'https://openstudio-builds.s3.us-east-1.amazonaws.com/3.2.1/OpenStudio-3.2.1+bdbdbc9da6-Ubuntu-20.04.deb'
}, {
  title: 'OpenStudio Application Release',
  type: 'openstudio-application',
  version: '1.2.0',
  sha: '72d719fabe',
  winUrl: 'https://github.com/openstudiocoalition/OpenStudioApplication/releases/download/v1.2.0/OpenStudioApplication-1.2.0+72d719fabe-Windows.exe',
  macUrl: 'https://github.com/openstudiocoalition/OpenStudioApplication/releases/download/v1.2.0/OpenStudioApplication-1.2.0+72d719fabe-macOS10.14-x86_64.dmg',
  linuxUrl: 'https://github.com/openstudiocoalition/OpenStudioApplication/releases/download/v1.2.0/OpenStudioApplication-1.2.0+72d719fabe-Ubuntu20.04.deb'
}, {
  title: 'OpenStudio PAT Release',
  type: 'pat',
  version: '3.2.1',
  winUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.2.1/ParametricAnalysisTool-3.2.1-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.2.1/ParametricAnalysisTool-3.2.1-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.2.1/ParametricAnalysisTool-3.2.1-Linux.deb'
}, {
  title: 'SketchUp Plugin Release',
  type: 'plugin',
  version: '1.2.0',
  url: 'https://github.com/openstudiocoalition/openstudio-sketchup-plugin/releases/download/v1.2.0/openstudio-sketchup-plugin.rbz'
}];

export const developerRelease: Release = {
  title: 'Latest Development Package',
  type: 'developer-sdk',
  version: '3.2.1',
  winUrl: 'https://openstudio-builds.s3.us-east-1.amazonaws.com/3.2.1/OpenStudio-3.2.1+bdbdbc9da6-Windows.exe',
  macUrl: 'https://openstudio-builds.s3.us-east-1.amazonaws.com/3.2.1/OpenStudio-3.2.1+bdbdbc9da6-Darwin.dmg',
  linuxUrl: 'https://openstudio-builds.s3.us-east-1.amazonaws.com/3.2.1/OpenStudio-3.2.1+bdbdbc9da6-Ubuntu-20.04.deb'
};
