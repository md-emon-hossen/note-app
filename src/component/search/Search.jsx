import { AiOutlineSearch } from 'react-icons/ai';
import { useData } from '../../context/dataContext';
import "./search.css";


export default function Search() {
    const { setsearch } = useData();




    return (
        <div className='search'>
            <AiOutlineSearch className='icons' />
            <input onChange={e => setsearch(e.target.value)} type="text" placeholder="Search your Note" />
        </div>
    )
}
