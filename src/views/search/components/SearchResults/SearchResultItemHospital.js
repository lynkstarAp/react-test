export default function SearchResultItemHospital({ ccjr, mpio }){
    return (
        <div style={ {backgroundColor: "#E8E7E7", marginTop: 5, marginButtom: 5, padding: 10, width:"100%"}}>
            <h5>Estado: {mpio}</h5>
            <h5>Nombre del hospital: {ccjr}</h5>
        </div>
    );
}
