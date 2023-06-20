import { Release } from './constants';

export const releases: Release[] = [{
  title: 'OpenStudio Release',
  type: 'sdk',
  version: '3.6.1',
  sha: 'bb9481519e',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.1/OpenStudio-3.6.1+bb9481519e-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.1/OpenStudio-3.6.1+bb9481519e-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.1/OpenStudio-3.6.1+bb9481519e-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.1/OpenStudio-3.6.1+bb9481519e-Ubuntu-20.04-x86_64.deb'
}, {
  title: 'OpenStudio PAT Release',
  type: 'pat',
  version: '3.6.1',
  winUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.6.1/ParametricAnalysisTool-3.6.1-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.6.1/ParametricAnalysisTool-3.6.1-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.6.1/ParametricAnalysisTool-3.6.1-Ubuntu-2004.deb'
}];

export const developerRelease: Release = {
  title: 'Latest Development Package',
  type: 'developer-sdk',
  version: '3.6.1',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.1/OpenStudio-3.6.1+bb9481519e-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.1/OpenStudio-3.6.1+bb9481519e-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.1/OpenStudio-3.6.1+bb9481519e-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.6.1/OpenStudio-3.6.1+bb9481519e-Ubuntu-20.04-x86_64.deb'
};
