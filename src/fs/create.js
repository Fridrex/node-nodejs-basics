import fs from 'fs/promises';

const create = async () => {
  try {
    await fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', 'utf8');
  } catch (error) {
    throw new Error('FS operation failed', error);
  }
};

await create();
