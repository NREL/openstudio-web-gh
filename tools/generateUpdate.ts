import * as fs from 'fs';
import * as path from 'path';
import { Release } from '../src/app/shared/classes/constants';
import { releases } from '../src/app/shared/classes/releases';

const release = releases.find(({type}) => type === 'sdk');
if (!release) {
  throw new Error('SDK release not found');
}
const sdkRelease = release as Release;

const version = sdkRelease.version;
const sha = sdkRelease.sha;

const output = `<html>
<openstudio>
  <release version="${version}.${sha}" download="https://openstudio.net/downloads">
    <![CDATA[
    <p>OpenStudio ${version}.${sha}</p>
    <p><a href="https://openstudio.net/downloads">Download here</a></p>
    <p><a href="https://github.com/NREL/OpenStudio/releases/tag/v${version}">Release notes</a></p>
    ]]>
  </release>
</openstudio>
</html>`;
const outputFile = path.resolve(__dirname, '../dist/update.html');
fs.writeFileSync(outputFile, output);
