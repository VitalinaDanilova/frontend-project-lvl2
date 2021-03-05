import { Command } from 'commander/esm.mjs';


const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .option('V, --version', 'output the version number')
  .action((options) => {
    console.log(options.version);
    console.log(options.help);
});

program.parse(process.argv);

export default program;
