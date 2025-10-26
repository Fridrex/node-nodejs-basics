const parseEnv = () => {
  const envVars = process.env;

  const rssVars = [];
  const prefix = 'RSS_';

  for (const key in envVars) {
    if (Object.hasOwn(envVars, key) && key.startsWith(prefix)) {
      rssVars.push(`${key}=${envVars[key]}`);
    }
  }

  if (rssVars.length > 0) {
    console.log(rssVars.join('; '));
  } else {
    console.log('No RSS_ environment variables found.');
  }
};

parseEnv();
