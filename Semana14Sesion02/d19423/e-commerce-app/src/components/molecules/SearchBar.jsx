import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import SearchInput from "../atoms/SearchInput";

export default function SearchBar(){
    return(
        <div className="container-fluid">
    <form className="d-flex" role="search">
            <SearchInput label="Que vamos a buscar"/>
            <Button label="Buscar"/>
</form>
        </div>
    )
}