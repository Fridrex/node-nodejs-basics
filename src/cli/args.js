const parseArgs = () => {
  const args = process.argv.slice(2);

  const formattedStrings = [];

  for (let i = 0; i < args.length; i += 2) {
    const propNameArg = args[i];
    const value = args[i + 1];

    const propName = propNameArg.replace('--', '');

    formattedStrings.push(`${propName} is ${value}`);
  }

  if (formattedStrings.length > 0) {
    console.log(formattedStrings.join(', '));
  } else {
    console.log('No arguments provided.');
  }
};

parseArgs();
