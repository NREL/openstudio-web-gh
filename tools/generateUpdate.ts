import * as fs from 'fs';
import * as path from 'path';
import { releases } from '../src/app/shared/classes/releases';

const release = releases.find(({type}) => type === 'sdk');
if (!release) {
  throw new Error('SDK release not found');
}
const {sha, version} = release;

const output = `<html>
<openstudio>
  <release version="${version}.${sha}" download="https://openstudio.net/downloads">
    <![CDATA[
    <p>OpenStudio ${version}.${sha}</p>
    <p><a href="https://openstudio.net/downloads">Download here</a></p>
    <p><a href="https://github.com/NatLabRockies/OpenStudio/releases/tag/v${version}">Release notes</a></p>
    ]]>
  </release>
</openstudio>
</html>`;

fs.mkdirSync(path.resolve(__dirname, '../dist'), {recursive: true});
const outputFile = path.resolve(__dirname, '../dist/update.html');
fs.writeFileSync(outputFile, output);
