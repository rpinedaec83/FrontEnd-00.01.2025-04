import { Link } from "react-router-dom"

export default function Logo(){
    return(
        <Link to="/"> 
        <img src="../logo.svg"  
        alt="Logo" 
        width={70} 
        height={50} 
        className="d-inline-block align-text-top"/>
        </Link>
    )
       
};