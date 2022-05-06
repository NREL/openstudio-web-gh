import { PluginRelease, Release } from './constants';

export const releases: (Release | PluginRelease)[] = [{
  title: 'OpenStudio Release',
  type: 'sdk',
  version: '3.4.0',
  sha: '4bd816f785',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.4.0/OpenStudio-3.4.0+4bd816f785-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.4.0/OpenStudio-3.4.0+4bd816f785-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.4.0/OpenStudio-3.4.0+4bd816f785-Ubuntu-20.04.deb'
},{
  title: 'OpenStudio PAT Release',
  type: 'pat',
  version: '3.4.0',
  winUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.4.0/ParametricAnalysisTool-3.4.0-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.4.0/ParametricAnalysisTool-3.4.0-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.4.0/ParametricAnalysisTool-3.4.0-Linux.deb'
}];

export const developerRelease: Release = {
  title: 'Latest Development Package',
  type: 'developer-sdk',
  version: '3.4.0',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.4.0/OpenStudio-3.4.0+4bd816f785-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.4.0/OpenStudio-3.4.0+4bd816f785-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.4.0/OpenStudio-3.4.0+4bd816f785-Ubuntu-20.04.deb'
};
