import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Checkout from "./Body/Cart/Checkout";
import "./loginregist.css";
import './bootstrap.min.css';

function Login() {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage
            .getItem("sanskarPassword")
            .replace(/"/g, "");
        let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");


        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

    return (
        <div class="container">
            {home ? (
                <form onSubmit={handleLogin}>
                    <center><h3>LogIn</h3></center>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(event) => setEmaillog(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(event) => setPasswordlog(event.target.value)}
                        />
                    </div>
                    <center>
                        <button type="submit" className="btn btn-dark btn-lg btn-block">
                            Login
                        </button>
                    </center>
                    {flag && (
                        <Alert color="primary" variant="warning">
                            Sepertinya ada yang salah.
                        </Alert>
                    )}
                </form>
            ) : (
                <Checkout />
            )}
        </div>
    );
}

export default Login;
