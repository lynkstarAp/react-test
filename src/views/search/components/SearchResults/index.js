import "./style.css";
import SearchResultItemHospital from "./SearchResultItemHospital";
import SearchResultItemPeople from "./SearchResultItemPeople";

export default function SearchResults({results, isSearching, typeResult}) {
    return (
        <div style={{
            width: "100%",
            padding: "0rem 2rem 0rem 2rem"
        }}>
            {!results?.length && isSearching && <p>No existen resultados</p>}
            {results?.map((value) => {
                if (!typeResult) {
                    return (
                        <SearchResultItemPeople key={value.id} {...value}  />
                    );
                } else if (typeResult) {
                    return (
                        <SearchResultItemHospital key={value.cccjr} {...value}  />
                    );
                }
            })}
        </div>
    )
}
