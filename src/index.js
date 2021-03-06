import { Command } from 'commander/esm.mjs';

const genDiff = () => {
  const program = new Command();

  program
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .option('V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format')
    .action((options) => {
      console.log(options.version);
      console.log(options.help);
    });

  program.parse(process.argv);
  return program;
};

export default genDiff;
