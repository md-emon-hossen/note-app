import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useData } from '../../context/dataContext';
import { useModul } from '../../context/ModulContex';
import "./addModul.css";

export default function AddModul() {
    //context data variable
    const { data, setdata } = useModul();
    const { mainData, setmainData } = useData();


    //local variale
    const [title, setTitle] = useState('');
    const [remainning, setremainning] = useState(200);
    const [dis, setDis] = useState('');
    const [success, setsuccess] = useState(false);
    var remai = remainning - dis.length;

    function handleClick() {
        if (title === '' && dis === '') {
            toast.warn("Enter Notes");
        } else if (title === '') {
            toast.warn("Enter a Note Title");

        } else if (dis === '') {
            toast.warn("Enter a Note Discriptions");
        } else if (remai < 0) {
            console.log("sgdkf");
        } else {

            setTitle('');
            setDis('');
            setdata(!data);
            setsuccess(!success);





            //workign herec
            const date = new Date();
            const localdate = date.toLocaleDateString('en-GB');


            const updatedata = {
                title: title,
                dis: dis,
                time: localdate

            }

            setmainData((oldData) => {
                return [...oldData, updatedata]
            });













        }




    }

    return (
        <div className="addModulWrp">
            <ToastContainer />
            <div onClick={() => setdata(!data)} className="cancle"><BsPlus className='bsPlus' /></div>

            < input className='input' value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Note Title' />
            < textarea className='textarea' value={dis} onChange={(e) => setDis(e.target.value)} type="text" placeholder='Note Discriptions' />
            <p className='remaining'>{remai + " Remaining"}</p>

            <button onClick={handleClick} className='addnote'>Add</button>
        </div>
    )
}
