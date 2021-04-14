import {useState, useEffect} from "react";
import SearchBox from "./components/SearchBox";
import "./style.css";
import img from "../../images/estrellade.png"

import data from "../../data/mun.json";
import SearchResults from "./components/SearchResults";

export default function Search() {
    const [isAtTop, setIsAtTop] = useState(false);
    const [userData, setuserData] = useState([]);
    const [hospitalData, setHospitalData] = useState(data)
    const [searchData, setSearchData] = useState(data)
    const [results, setResults] = useState([]);
    const [typeData , setTypeData] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch("http://jsonplaceholder.typicode.com/users")
            const data = await response.json();
            setuserData(data);
        };
        getUser();
    }, []);

    const handleCloseOpenSearch = () => setIsAtTop(!isAtTop);
    const handleSearchClick = (searchText) => {
        const searchTextMinu = searchText.toLowerCase();
        if ( !typeData && userData?.length) {
            setIsAtTop(true);
            const filteredDatauserData = userData.filter((value) => {
                return (
                    value.username.toLowerCase().includes(searchTextMinu) ||
                    value.name.toLowerCase().includes(searchTextMinu) ||
                    value.email.toLowerCase().includes(searchTextMinu) ||
                    value.phone.toLowerCase().includes(searchTextMinu)
                );
            });
            setResults(filteredDatauserData);
        } else if( typeData && hospitalData?.length){
            setIsAtTop(true);
            const filteredDatauserData = hospitalData.filter((value) => {
                return (
                    value.ccc.toLowerCase().includes(searchTextMinu) ||
                    value.cccjr.toLowerCase().includes(searchTextMinu) ||
                    value.ccjr.toLowerCase().includes(searchTextMinu) ||
                    value.mpio.toLowerCase().includes(searchTextMinu)
                );
            });
            setResults(filteredDatauserData);
            console.log(filteredDatauserData);
        }
    };

    const handleCloseClick = () => {
        setIsAtTop(false);
        setResults([]);
    }

    const hadleClicSearchChange = () => {
        setTypeData(!typeData);

        if(typeData){
            setSearchData(userData);
        } else {
            setSearchData(hospitalData);
        }
        handleCloseClick();
    };

    return (
        <div>
            <div className="search-menu">
                <div style={{marginRight: "1%", marginBottom: "1%"}}>
                    { typeData && <button className="btn btn-outline-info" onClick={ hadleClicSearchChange } >Buscar gente</button>  }
                    { !typeData && <button className="btn btn-outline-info" onClick={ hadleClicSearchChange } >Buscar hospitales</button> }
                </div>
                <img src={img} className="search-logout"/>
            </div>
            <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
                <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} isSearching={isAtTop}/>
                <SearchResults results={results} isSearching={isAtTop} typeResult={typeData}/>
            </div>
        </div>
    );
}
