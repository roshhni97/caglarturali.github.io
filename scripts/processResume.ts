import { writeFile } from 'fs/promises';
import { Resume } from 'src/types/Resume';
import resumeJson from 'data/resume.json';
import codesJson from './codes.json';

const resume = resumeJson as Resume;
const codes = codesJson as { [key: string]: string };

function getLangCode(countryCode: string) {
  const langs = codes[countryCode.toUpperCase()];
  return langs ? langs.split(',')[0] : 'en-us';
}

async function getTTS(outputPath: string) {
  const { basics } = resume;
  const name = encodeURIComponent(basics.name);
  const lang = getLangCode(basics.location.countryCode);
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${lang}&q=${name}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to download file: ${res.statusText}`);
    return;
  }
  const arrBuf = await res.arrayBuffer();
  const buffer = Buffer.from(arrBuf);
  await writeFile(outputPath, buffer);
}

await getTTS('public/tts.mp3');
