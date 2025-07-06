import Navbar from "./atoms/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout(){
    return(
        <>
            <Navbar/>
            <div className="container mt-4">
                <Outlet/>
            </div>
        </>
    )
}