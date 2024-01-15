import {Link} from 'react-router-dom'
import './Styles/StStart.css'
const Start = ()=>{
    return(
    <>
        <div id='langCon'>
            <Link id='L' to="/Blog/DE">Deutsch</Link>
            <Link id='L'to="/Blog/PL">Polski</Link>
        </div>
    </>)
}
export default Start