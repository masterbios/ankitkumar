const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = {
  'react.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg',
  'typescript.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/typescript.svg',
  'javascript.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/javascript.svg',
  'java.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/java.svg',
  'spring.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/spring.svg',
  'android.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/android.svg',
  'kotlin.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kotlin.svg',
  'mysql.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mysql.svg',
  'html.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/html5.svg',
  'css.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/css3.svg',
  'bootstrap.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/bootstrap.svg',
  'aws.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazonaws.svg',
  'git.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/git.svg',
  'docker.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg',
  'firebase.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/firebase.svg',
  'mongodb.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mongodb.svg',
  'nodejs.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nodedotjs.svg',
  'express.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/express.svg',
  'nextjs.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nextdotjs.svg',
  'tailwind.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg',
  'material-ui.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/materialui.svg',
  'redux.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/redux.svg',
  'jest.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jest.svg',
  'cypress.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cypress.svg',
  'postman.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postman.svg',
  'figma.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg',
  'jira.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jira.svg',
  'confluence.svg':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/confluence.svg',
};

const downloadLogo = (filename, url) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, 'src', 'assets', 'skills', filename);
    const file = fs.createWriteStream(filepath);

    https
      .get(url, response => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      })
      .on('error', err => {
        fs.unlink(filepath, () => {});
        console.error(`Error downloading ${filename}:`, err.message);
        reject(err);
      });
  });
};

const downloadAllLogos = async () => {
  try {
    for (const [filename, url] of Object.entries(logos)) {
      await downloadLogo(filename, url);
    }
    console.log('All logos downloaded successfully!');
  } catch (error) {
    console.error('Error downloading logos:', error);
  }
};

downloadAllLogos();
