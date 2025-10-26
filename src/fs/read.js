import fs from 'fs/promises';

const read = async () => {
  try {
    const file = await fs.readFile('src/fs/files/fileToRead.txt', 'utf8');
    console.log(file);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
