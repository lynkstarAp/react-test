import {useState} from "react";
import "./style.css";
import data from "../../data/login.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
    const [userLogin, setUsetLogin] = useState(data);

    return (
        <div>
            <form style={ {marginTop: "15%" }}>
                <div className="login-container" >
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="col-sm-12">
                                    <label className="control-label"> Nombre de usuario;</label>
                                    <input type="text" name="nombre" className="form-control" />
                                </div>
                                <div className="col-sm-12">
                                    <label className="control-label">Contraseña;</label>
                                    <input type="password"  name="password"  className="form-control"/>
                                </div>

                                <div className="col-sm-12">
                                    &nbsp;
                                </div>

                            </div>

                            <div className="col-sm-12">
                                <button className="btn btn-block btn-lg btn-info">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
}
