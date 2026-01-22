import { Release } from './constants';

export const releases: Release[] = [{
  title: 'OpenStudio SDK Release',
  type: 'sdk',
  version: '3.10.0',
  sha: '86d7e215a1',
  winUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.10.0/OpenStudio-3.10.0+86d7e215a1-Windows.exe',
  macUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.10.0/OpenStudio-3.10.0+86d7e215a1-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.10.0/OpenStudio-3.10.0+ce46db07de-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.10.0/OpenStudio-3.10.0+86d7e215a1-Ubuntu-24.04-x86_64.deb'
}, {
  title: 'OpenStudio PAT Release',
  type: 'pat',
  version: '3.9.1',
  winUrl: 'https://github.com/NatLabRockies/OpenStudio-PAT/releases/download/v3.9.1/ParametricAnalysisTool-3.9.1-Windows.exe',
  macUrl: 'https://github.com/NatLabRockies/OpenStudio-PAT/releases/download/v3.9.1/ParametricAnalysisTool-3.9.1-Darwin.dmg',
  linuxUrl: 'https://github.com/NatLabRockies/OpenStudio-PAT/releases/download/v3.9.1/ParametricAnalysisTool-3.9.1-Linux.deb'
}];

export const developerRelease: Release = {
  title: 'Latest Development Package',
  type: 'developer-sdk',
  version: '3.10.0',
  winUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.10.0/OpenStudio-3.10.0+86d7e215a1-Windows.exe',
  macUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.10.0/OpenStudio-3.10.0+86d7e215a1-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.10.0/OpenStudio-3.10.0+ce46db07de-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.10.0/OpenStudio-3.10.0+86d7e215a1-Ubuntu-24.04-x86_64.deb'
};
