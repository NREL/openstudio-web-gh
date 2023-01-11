import { Release } from './constants';

export const releases: Release[] = [{
  title: 'OpenStudio Release',
  type: 'sdk',
  version: '3.5.1',
  sha: '22e1db7be5',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.5.1/OpenStudio-3.5.1+22e1db7be5-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.5.1/OpenStudio-3.5.1+22e1db7be5-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.5.1/OpenStudio-3.5.1+22e1db7be5-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.5.1/OpenStudio-3.5.1+22e1db7be5-Ubuntu-20.04.deb'
}, {
  title: 'OpenStudio PAT Release',
  type: 'pat',
  version: '3.5.1',
  winUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.5.1/ParametricAnalysisTool-3.5.1-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.5.1/ParametricAnalysisTool-3.5.1-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.5.1/ParametricAnalysisTool-3.5.1-Linux.deb'
}];

export const developerRelease: Release = {
  title: 'Latest Development Package',
  type: 'developer-sdk',
  version: '3.5.1',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.5.1/OpenStudio-3.5.1+22e1db7be5-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.5.1/OpenStudio-3.5.1+22e1db7be5-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.5.1/OpenStudio-3.5.1+22e1db7be5-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.5.1/OpenStudio-3.5.1+22e1db7be5-Ubuntu-20.04.deb'
};
