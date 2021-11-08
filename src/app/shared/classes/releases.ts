import { PluginRelease, Release } from './constants';

export const releases: (Release | PluginRelease)[] = [{
  title: 'OpenStudio Release',
  type: 'sdk',
  version: '3.3.0',
  sha: 'ad235ff36e',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Ubuntu-20.04.deb'
}, {
  title: 'OpenStudio Application Release',
  type: 'openstudio-application',
  version: '1.2.1',
  sha: '29888f9a87',
  winUrl: 'https://github.com/openstudiocoalition/OpenStudioApplication/releases/download/v1.2.1/OpenStudioApplication-1.2.1+29888f9a87-Windows.exe',
  macUrl: 'https://github.com/openstudiocoalition/OpenStudioApplication/releases/download/v1.2.1/OpenStudioApplication-1.2.1+29888f9a87-macOS10.14-x86_64.dmg',
  linuxUrl: 'https://github.com/openstudiocoalition/OpenStudioApplication/releases/download/v1.2.1/OpenStudioApplication-1.2.1+29888f9a87-Ubuntu20.04.deb'
}, {
  title: 'OpenStudio PAT Release',
  type: 'pat',
  version: '3.3.0',
  winUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.3.0/ParametricAnalysisTool-3.3.0-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.3.0/ParametricAnalysisTool-3.3.0-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio-PAT/releases/download/v3.3.0/ParametricAnalysisTool-3.3.0-Linux.deb'
}, {
  title: 'SketchUp Plugin Release',
  type: 'plugin',
  version: '1.2.1',
  url: 'https://github.com/openstudiocoalition/openstudio-sketchup-plugin/releases/download/v1.2.1/openstudio-sketchup-plugin.rbz'
}];

export const developerRelease: Release = {
  title: 'Latest Development Package',
  type: 'developer-sdk',
  version: '3.3.0',
  winUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Windows.exe',
  macUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Darwin.dmg',
  linuxUrl: 'https://github.com/NREL/OpenStudio/releases/download/v3.3.0/OpenStudio-3.3.0+ad235ff36e-Ubuntu-20.04.deb'
};
