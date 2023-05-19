import Model from './addmodel.js'
import {useState} from 'react';
const Addplayer = () => {
    const togglebutton=()=>{
        setShow(!show);
    }
    const [show, setShow] = useState(false);
    return (
        <Model show={show} togglebutton={togglebutton}/>
    )
}
export default Addplayer;