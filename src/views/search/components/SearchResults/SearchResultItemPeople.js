export default function SearchResultItemPeople({ name, email }){
    return (
        <div style={ {backgroundColor: "#E8E7E7", marginTop: 5, marginButtom: 5, padding: 10, width:"100%"}}>
            <h5>Nombre: {name}</h5>
            <h5>Email: {email}</h5>
        </div>
    );
}
