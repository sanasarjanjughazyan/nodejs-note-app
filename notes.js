const fs = require("fs")
const logger = require("./logger")

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({title: title, body: body})
        saveNotes(notes)
        logger.logSuccess("New note with title: " + title + " added!")
    } else {
        logger.logError("Note with title: " + title + " already exists!")
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const unique = notes.filter(note => note.title !== title)
    if (notes.length !== unique.length) {
        logger.logSuccess("Note with title: " + title + " removed!")
        saveNotes(unique)
    } else {
        logger.logError("No Note found with title: " + title + " to delete!")
    }
}

const listNotes = () => {
    const notes = loadNotes()
    logger.logInfo("Your notes:")
    notes.forEach(note => logger.logTitle(note.title));
}

const readNote = (title) => {
    const notes = loadNotes()
    note = notes.find(note => note.title === title)

    if (note) {
        logger.logTitle(note.title)
        console.log(note.body)
    } else {
        logger.logError("No note found with title: " + title)
    }
}

const loadNotes = () => {
    try {
        const buff = fs.readFileSync("notes.json")
        return JSON.parse(buff.toString())
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes))
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}