import { Release } from './constants';

export const releases: Release[] = [{
  title: 'OpenStudio Release',
  type: 'sdk',
  version: '3.7.0',
  sha: 'd5269793f1',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.7.0/OpenStudio-3.7.0+d5269793f1-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.7.0/OpenStudio-3.7.0+d5269793f1-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.7.0/OpenStudio-3.7.0+d5269793f1-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.7.0/OpenStudio-3.7.0+d5269793f1-Ubuntu-20.04-x86_64.deb'
}, {
  title: 'OpenStudio PAT Release',
  type: 'pat',
  version: '3.7.0',
  winUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.7.0/ParametricAnalysisTool-3.7.0-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.7.0/ParametricAnalysisTool-3.7.0-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.7.0/ParametricAnalysisTool-3.7.0-Linux.deb'
}];

export const developerRelease: Release = {
  title: 'Latest Development Package',
  type: 'developer-sdk',
  version: '3.7.0',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.7.0/OpenStudio-3.7.0+d5269793f1-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.7.0/OpenStudio-3.7.0+d5269793f1-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.7.0/OpenStudio-3.7.0+d5269793f1-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.7.0/OpenStudio-3.7.0+d5269793f1-Ubuntu-20.04-x86_64.deb'
};
