import { Link } from "react-router-dom";
import "./Header.css";
function Header(){
   

    return(
         
        <header className="header__container">
            <h1>ABC<span>company</span></h1>
            <nav >
                <ul className="menu">
                <li>
                        <Link className="list-item" to='/'>Home</Link>
                        </li>
                    <li>
                        <Link className="list-item" to='/students'>Students</Link>
                        </li>
                    <li>
                        <Link className="list-item" to='/programme'>Programme</Link>
                        </li>
                </ul>             
            </nav>
            <button type="button" className="btn"><Link className="list-btn" to='/register'>Register</Link></button>
        </header>
    )
}
export default Header;