import { useModul } from '../../context/ModulContex';
import AddModul from '../addModul/AddModul';
import Note from '../Note/Note';
import "./notes.css";

export default function Notes() {
    const { data } = useModul();

    return (
        <div className="notes">
            {!data && <Note />}
            {data && <AddModul />}
        </div >
    )
}
