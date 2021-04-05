const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        console.log('Listing all notes');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a note.');
    }
});

console.log(yargs.argv);

// console.log(getNotes());
// console.log(chalk.green("Success!"));
// console.log(chalk.bgRed.inverse.bold("Error!"));

// console.log(process.argv[2]);
// console.log(process.argv[3]);