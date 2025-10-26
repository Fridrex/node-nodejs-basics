import { spawn } from 'child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createInterface } from 'node:readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const scriptPath = resolve(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = spawn('node', [scriptPath, ...args], {
    stdio: 'pipe'
  });

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '[MASTER]: > '
  });

  rl.on('line', (line) => {
    child.stdin.write(`${line}\n`);
  });

  child.stdout.on('data', (data) => {
    process.stdout.write('\r' + data.toString());

    rl.prompt();
  });

  child.stderr.pipe(process.stderr);

  child.on('error', (err) => {
    console.error('Failed to start child process:', err);
  });

  child.on('close', (code) => {
    console.log(`\n[MASTER]: Child process exited with code ${code}`);
    rl.close();
  });

  rl.prompt();
};

const cliArgs = process.argv.slice(2);
console.log(`[MASTER]: Spawning child with args: [${cliArgs.join(', ')}]`);
spawnChildProcess(cliArgs);
