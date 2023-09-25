import { Release } from './constants';

export const releases: Release[] = [{
  title: 'OpenStudio Release',
  type: 'sdk',
  version: '3.6.0',
  sha: '860f5de185',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.0/OpenStudio-3.6.0+860f5de185-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.0/OpenStudio-3.6.0+860f5de185-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.0/OpenStudio-3.6.0+860f5de185-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.0/OpenStudio-3.6.0+860f5de185-Ubuntu-20.04-x86_64.deb'
}, {
  title: 'OpenStudio PAT Release',
  type: 'pat',
  version: '3.6.1',
  winUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.6.1-1/ParametricAnalysisTool-3.6.1-1-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.6.1-1/ParametricAnalysisTool-3.6.1-1-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.6.1-1/ParametricAnalysisTool-3.6.1-1-Ubuntu-2004.deb'
}];

export const developerRelease: Release = {
  title: 'Latest Development Package',
  type: 'developer-sdk',
  version: '3.6.0',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.0/OpenStudio-3.6.0+860f5de185-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.0/OpenStudio-3.6.0+860f5de185-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.0/OpenStudio-3.6.0+860f5de185-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.0/OpenStudio-3.6.0+860f5de185-Ubuntu-20.04-x86_64.deb'
};
