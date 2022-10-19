import AddNote from '../addnote/AddNote';
import Header from '../header/Header';
import Notes from '../Notes/Notes';
import './notesWrper.css';

export default function NotesWrper() {
    return (
        <div className='conteiner'>
            <Header />
            <Notes />
            <AddNote />
        </div>
    )
}
