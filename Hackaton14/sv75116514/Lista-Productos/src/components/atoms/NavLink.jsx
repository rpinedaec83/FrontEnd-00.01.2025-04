export default function NavLink({label, href="#"}){
    return(
        <li className="nav-item">
            <a className="nav-link text-dark fw-medium list-unstyled" href={href}>
                {label}</a>
        </li>
    );
};