import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const skillsDir = path.join(__dirname, 'src', 'assets', 'skills');

// Create skills directory if it doesn't exist
if (!fs.existsSync(skillsDir)) {
  fs.mkdirSync(skillsDir, { recursive: true });
}

const logos = {
  'react.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'typescript.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'javascript.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'java.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
  'spring.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg',
  'android.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg',
  'kotlin.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg',
  'mysql.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  'html.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  'bootstrap.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
  'aws.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'git.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
  'docker.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
  'firebase.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
  'mongodb.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  'nodejs.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  'express.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
  'nextjs.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  'tailwind.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
  'material-ui.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg',
  'redux.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  'jest.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg',
  'cypress.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/cypressio/cypressio-plain.svg',
  'postman.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
  'figma.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
  'jira.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg',
  'confluence.svg':
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/confluence/confluence-original.svg',
};

async function downloadLogo(filename, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download ${filename}: ${response.status} ${response.statusText}`);
    }
    const svg = await response.text();
    fs.writeFileSync(path.join(skillsDir, filename), svg);
    console.log(`✅ Downloaded ${filename}`);
  } catch (error) {
    console.error(`❌ Error downloading ${filename}:`, error.message);
  }
}

async function downloadAllLogos() {
  console.log('Starting logo downloads...');
  const promises = Object.entries(logos).map(([filename, url]) => downloadLogo(filename, url));
  await Promise.all(promises);
  console.log('Finished downloading logos.');
}

downloadAllLogos();
