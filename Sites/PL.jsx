import {Link} from 'react-router-dom'
import './Styles/SiteStyle.css'
import'./Styles/PLPost.css'

import Post from '../Components/COPost'
const PL =()=>{
    return(
        <>
         <section id='header'>
        <h1>Panteon Sztuki</h1>
        <Link to='/DE'>Deutsch</Link>
        </section>
        <section id='wampe'>
        <Post name='Pierwszy' title='Witajcie' text='Witajcie na naszym blogu'></Post>
        </section>
        <section id='footer'>
        <p>&copy; copyrigth by Faustyna Szymanska and Lars Poppen</p>
        </section>
        </>
    )
}

export default PL