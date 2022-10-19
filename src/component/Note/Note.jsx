import { MdDelete } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useData } from '../../context/dataContext';
import "./note.css";

export default function Note() {
    const { mainData, setmainData, search } = useData();


    function hanldeClick(index) {
        mainData.splice(index, 1);
        setmainData((oldData) => {
            return [...oldData]
        });
        toast.success("Note Delect Successfully");
    }

    return <>
        <ToastContainer />
        {mainData.map((item, index) => {
            return (
                < div key={index} className="note" >
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.dis} </p>
                    </div>
                    <div className="timeStamp">
                        <span>{item.time}</span>
                        <MdDelete onClick={() => hanldeClick(index)} className="icon" />
                    </div>
                </div >
            )
        })}

    </>













    // return (
    //     < div className="note" >
    //         <div>
    //             <h3>hello this is heading</h3>
    //             <p>ngksdnfgkjsdfgjkdsfkgj msdgsdgnks sodighksjdfngksjdgjsd </p>
    //         </div>
    //         <div className="timeStamp">
    //             <span>10/10/2020</span>
    //             <MdDelete className="icon" />
    //         </div>
    //     </div >
    // )
}
