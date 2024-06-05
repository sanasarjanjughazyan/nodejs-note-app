const notes = require("./notes")
const yargs = require("yargs")

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note's title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note's body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
}).command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note's title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
}).command({
    command: "list",
    describe: "List all notes",
    handler() {
        notes.listNotes()
    }
}).command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note's title",
            demandCommand: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
}).parse()