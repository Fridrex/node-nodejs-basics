import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  return new Promise((resolvePromise, rejectPromise) => {
    try {
      const hash = createHash('sha256');
      hash.setEncoding('hex');

      const fileStream = createReadStream(filePath);

      fileStream.on('error', (err) => {
        console.error('Error reading file:', err);
        rejectPromise(err);
      });

      hash.on('error', (err) => {
        console.error('Error calculating hash:', err);
        rejectPromise(err);
      });

      hash.on('finish', () => {
        const calculatedHash = hash.read();
        console.log(calculatedHash);
        resolvePromise(calculatedHash);
      });

      fileStream.pipe(hash);

    } catch (error) {
      console.error('An unexpected error occurred:', error);
      rejectPromise(error);
    }
  });
};

await calculateHash();
