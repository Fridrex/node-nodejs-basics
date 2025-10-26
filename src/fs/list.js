import fs from 'fs/promises';

const list = async () => {
  try {
    const files = await fs.readdir('src/fs/files', { recursive: true });
    console.log(files);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();
