import {Link} from 'react-router-dom'
import './Styles/StStart.css'
const Start = ()=>{
    return(
    <>
        <div id='langCon'>
            <Link id='L' to="/DE">Deutsch</Link>
            <Link id='L'to="/PL">Polski</Link>
        </div>
    </>)
}
export default Start