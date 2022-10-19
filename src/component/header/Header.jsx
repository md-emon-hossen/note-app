import { GrDocumentNotes } from 'react-icons/gr';
import Search from '../search/Search';
import './header.css';


export default function Header() {
    return (
        <div className='header'>
            <h2>Keep  <span className='headtext'> <GrDocumentNotes className='noteIcon' />otes</span></h2>
            <Search />
        </div>
    )
}
