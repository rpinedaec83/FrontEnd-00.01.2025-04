import {NavLink} from 'react-router-dom'

function Navbar(){

    return(
    // <nav>
    //    <NavLink to='/' className={({isActive}) => isActive ? "active": ""}>
    //      Home
    //    </NavLink>
    //    {" | "}
    //    <NavLink to="/about">About</NavLink>
    // </nav>

        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <NavLink className='navbar-brand' to='/'>Mi App</NavLink>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/'>Inicio</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about'>About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    )
}
export default Navbar