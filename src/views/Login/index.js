import {useState, useEffect} from "react";
import "./style.css";
import data from "../../data/login.json";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from '../../images/avatar.jpg'
import {useHistory} from "react-router-dom"

export default function Login() {
    const [userLogin, setUsetLogin] = useState(data);
    const [results, setResults] = useState([]);
    const [userUser, setUserUser] = useState("");
    const [userPass, setUserPass] = useState("");

    const history = useHistory();

    useEffect(() => {

    }, []);

    const handleLoginClick = (searchUser, searchPass) => {
        const searchUserMin = searchUser.toLowerCase();
        const searchPassMin = searchPass.toLowerCase();

        if (userLogin?.length) {
            const filteredDatauserData = userLogin.filter((value) => {
                return (
                    value.user.toLowerCase().includes(searchUserMin) &&
                    value.password.toLowerCase().includes(searchPassMin)
                );
            });
            setResults(filteredDatauserData);
            if(results?.length){
                alert("Inicio de sesion exitoso")

                history.push("/search");

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
                                <img className="login-avatar" src={avatar}/>
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
