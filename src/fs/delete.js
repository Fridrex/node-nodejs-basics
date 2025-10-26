import fs from 'fs/promises';

const remove = async () => {
  try {
    await fs.rm('src/fs/files/fileToRemove.txt', { recursive: true, force: true });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
