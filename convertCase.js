const yargs = require('yargs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert the string to uppercase
function toUpperCase(input) {
  return input.toUpperCase();
}

// Function to convert the string to lowercase
function toLowerCase(input) {
  return input.toLowerCase();
}

// Main function to process the command-line arguments and get user input
function main() {
  const argv = yargs
    .option('case', {
      alias: 'c',
      describe: 'Convert to uppercase (U) or lowercase (L)',
      choices: ['U', 'L'],
      demandOption: true,
    })
    .argv;

  const caseOption = argv.case;
  const promptMessage = caseOption === 'U' ? 'Enter a string to convert to UPPERCASE: ' : 'Enter a string to convert to lowercase: ';

  readline.question(promptMessage, (input) => {
    const convertedString = caseOption === 'U' ? toUpperCase(input) : toLowerCase(input);
    console.log('Converted string:', convertedString);
    readline.close();
  });
}

main();
