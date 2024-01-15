import {Link} from 'react-router-dom'
import Post from '../Components/COPost'
import './Styles/SiteStyle.css'
import './Styles/DEPost.css'
const DE =()=>{
    return(
        <>
        <section id='header'>
        <h1>Kunst Pantheon</h1>
        <Link id='Ll' to='/PL'>Polski</Link>
        </section>
        <section id='wampe'>
            <Post name='Erster' title='Willkommen' text='Wir sind ein frisches Unternehmen, gegründet von einen ambitionierten Paar mit einer passion für Games, Kunst und Literatur'></Post>

        </section>
        <section id='footer'>
        <p>&copy; copyrigth by Lars Poppen and Faustyna Szymanska</p>
        </section>
        </>
    )
}

export default DE