import https from 'https';
import fs from 'fs';
import path from 'path';

const imageUrls = [
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', // Web development
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80', // Mobile app
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80', // E-commerce
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, response => {
      if (response.statusCode === 200) {
        response
          .pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

const main = async () => {
  const dir = path.join(process.cwd(), 'public', 'projects');

  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (let i = 0; i < imageUrls.length; i++) {
    const filepath = path.join(dir, `project${i + 1}.jpg`);
    try {
      await downloadImage(imageUrls[i], filepath);
      console.log(`Downloaded: project${i + 1}.jpg`);
    } catch (error) {
      console.error(`Error downloading project${i + 1}.jpg:`, error.message);
    }
  }
};

main().catch(console.error);
