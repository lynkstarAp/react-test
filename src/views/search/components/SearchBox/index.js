import {useState} from "react";

import "./style.css";

export default function SearchBox({ onSearch, onClose, isSearching }) {
    const [searchText, setSearchText] = useState("");

    const handleShearchClick =() => {
        setSearchText("");
        onClose();
        // alert("ok")
    }

    return (
        <div className="search-box">
            <h2 className="search-box-title " style={ { marginBottom: "2%" } }>Buscador de Hospitales</h2>
            <div className="search-box-buttons">
                <label>
                    <input className="search-box-input form-control form-control-lg" style={{ alignItems: "center", marginTop: "4px" }} value={searchText}
                           onChange={({target: {value}}) => setSearchText(value)}/>
                </label>
                <button className="btn btn-info btn-lg btn button-option" onClick={ () => onSearch(searchText) } disabled={!searchText.length} >Buscar</button>
                {isSearching && <button className="btn btn-warning btn-lg button-option" onClick={ handleShearchClick } disabled={!searchText.length}>Cerrar</button> }
            </div>
        </div>
    );
}
