import { PluginRelease, Release } from './constants';

export const releases: (Release | PluginRelease)[] = [{
  title: 'OpenStudio Release',
  type: 'sdk',
  version: '3.3.0',
  sha: 'ad235ff36e',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Ubuntu-20.04.deb'
},{
  title: 'OpenStudio PAT Release',
  type: 'pat',
  version: '3.3.0',
  winUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.3.0/ParametricAnalysisTool-3.3.0-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.3.0/ParametricAnalysisTool-3.3.0-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.3.0/ParametricAnalysisTool-3.3.0-Linux.deb'
}];

export const developerRelease: Release = {
  title: 'Latest Development Package',
  type: 'developer-sdk',
  version: '3.3.0',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Ubuntu-20.04.deb'
};
