const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen("New note added!"));
    } else {
        console.log(chalk.bgRed("Note title taken!"));
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesFiltered = notes.filter((note) => title !== note.title);
    if (notes.length === notesFiltered.length) {
        console.log(chalk.bgRed("No note found!"));
    } else {
        console.log(chalk.bgGreen("Note removed!"));
    }

    saveNotes(notesFiltered);
}

const listNotes = () => {
    console.log(chalk.blue("Your notes: "))
    loadNotes().forEach(note => console.log(note.title));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}