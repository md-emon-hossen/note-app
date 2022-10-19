import { useModul } from "../../context/ModulContex";
import "./addNote.css";



export default function AddNote() {
    const { data, setdata } = useModul();
    return (
        <div>
            {!data && <button onClick={() => setdata(!data)} className="addnote">Add</button>}
        </div >
    )
}
