import {useState, useEffect} from "react";
import "./style.css";
import data from "../../data/login.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
    const [userLogin, setUsetLogin] = useState(data);
    const [results, setResults] = useState([]);
    const [userUser, setUserUser] = useState("");
    const [userPass, setUserPass] = useState("");

    useEffect(() => {

    }, []);

    const handleLoginClick = (searchUser, searchPass) => {
        const searchUserMin = searchUser.toLowerCase();
        const searchPassMin = searchPass.toLowerCase();

        if (userLogin?.length) {
            console.log(searchUserMin + " " + searchPassMin);
            const filteredDatauserData = userLogin.filter((value) => {
                return (
                    value.user.toLowerCase().includes(searchUserMin) &&
                    value.password.toLowerCase().includes(searchPass)
                );
            });
            setResults(filteredDatauserData);
            if(results?.length){
                console.log(filteredDatauserData)
                // alert("Inicio exitoso")
            }
        }
    };


    return (
        <div>
            <div style={ {marginTop: "15%" }}>
                <div className="login-container" >
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="col-sm-12">
                                    <label className="control-label"> Nombre de usuario;</label>
                                    <input type="text" name="nombre" className="form-control" value={userUser}
                                           onChange={({target: {value}}) => setUserUser(value)}/>
                                </div>
                                <div className="col-sm-12">
                                    <label className="control-label">Contraseña;</label>
                                    <input type="password"  name="password"  className="form-control" value={userPass}
                                           onChange={({target: {value}}) => setUserPass(value)} />
                                </div>
                                <div className="col-sm-12">
                                    &nbsp;
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <button className="btn btn-block btn-lg btn-info" onClick={ () => { handleLoginClick(userUser, userPass) } }>Iniciar sesion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
