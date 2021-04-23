import { PluginRelease, Release } from './constants';

export const releases: (Release | PluginRelease)[] = [{
  title: 'OpenStudio Release',
  type: 'sdk',
  version: '3.1.0',
  winUrl: 'https://openstudio-builds.s3.amazonaws.com/3.1.0/OpenStudio-3.1.0%2Be165090621-Windows.exe',
  macUrl: 'https://openstudio-builds.s3.amazonaws.com/3.1.0/OpenStudio-3.1.0%2Be165090621-Darwin.dmg',
  linuxUrl: 'https://openstudio-builds.s3.amazonaws.com/3.1.0/OpenStudio-3.1.0%2Be165090621-Linux.deb'
}, {
  title: 'OpenStudio Application Release',
  type: 'openstudio-application',
  version: '1.1.0',
  winUrl: 'https://github.com/openstudiocoalition/OpenStudioApplication/releases/download/v1.1.0/OpenStudioApplication-1.1.0+b2e7010aa0-Windows.exe',
  macUrl: 'https://github.com/openstudiocoalition/OpenStudioApplication/releases/download/v1.1.0/OpenStudioApplication-1.1.0+b2e7010aa0-Darwin.dmg',
  linuxUrl: 'https://github.com/openstudiocoalition/OpenStudioApplication/releases/download/v1.1.0/OpenStudioApplication-1.1.0+b2e7010aa0-Linux.deb'
}, {
  title: 'OpenStudio PAT Release',
  type: 'pat',
  version: '3.1.0',
  winUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.1.0/ParametricAnalysisTool-3.1.0-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.1.0/ParametricAnalysisTool-3.1.0-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.1.0/ParametricAnalysisTool-3.1.0-Linux.deb'
}, {
  title: 'SketchUp Plugin Release',
  type: 'plugin',
  version: '1.1.0',
  url: 'https://github.com/openstudiocoalition/openstudio-sketchup-plugin/releases/download/v1.1.0/openstudio-sketchup-plugin.rbz'
}];

export const developerRelease: Release = {
  title: 'Latest Development Package',
  type: 'developer-sdk',
  version: '3.1.0',
  winUrl: 'https://openstudio-builds.s3.amazonaws.com/3.1.0/OpenStudio-3.1.0%2Be165090621-Windows.exe',
  macUrl: 'https://openstudio-builds.s3.amazonaws.com/3.1.0/OpenStudio-3.1.0%2Be165090621-Darwin.dmg',
  linuxUrl: 'https://openstudio-builds.s3.amazonaws.com/3.1.0/OpenStudio-3.1.0%2Be165090621-Linux.deb'
};
