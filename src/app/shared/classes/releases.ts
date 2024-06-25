import { Release } from './constants';

export const releases: Release[] = [{
  title: 'OpenStudio SDK Release',
  type: 'sdk',
  version: '3.8.0',
  sha: 'f953b6fcaf',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.8.0/OpenStudio-3.8.0+f953b6fcaf-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.8.0/OpenStudio-3.8.0+f953b6fcaf-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.8.0/OpenStudio-3.8.0+f953b6fcaf-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.8.0/OpenStudio-3.8.0+f953b6fcaf-Ubuntu-20.04-x86_64.deb'
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
  version: '3.8.0',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.8.0/OpenStudio-3.8.0+f953b6fcaf-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.8.0/OpenStudio-3.8.0+f953b6fcaf-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.8.0/OpenStudio-3.8.0+f953b6fcaf-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.8.0/OpenStudio-3.8.0+f953b6fcaf-Ubuntu-20.04-x86_64.deb'
};
