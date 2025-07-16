import Logo from "../atoms/Logo";
import NavLinks from "../molecules/NavLinks";

export default function NavBar(){
    return(
        <nav className="navbar bg-white px-4 py-3">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <Logo/>
                <NavLinks/>
            </div>
        </nav>
    )
}