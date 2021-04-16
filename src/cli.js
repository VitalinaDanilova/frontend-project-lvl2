import { Command } from 'commander/esm.mjs';
import genDiff from './index.js';

export default () => {
  const program = new Command();

  program
    .description('Compares two configuration files and shows a difference.')
    .option('V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format')
    .arguments('<filepath1> <filepath2>')
    .action((filepath1, filepath2) => {
      console.log(genDiff(filepath1, filepath2));
    });
  program.parse(process.argv);
};
