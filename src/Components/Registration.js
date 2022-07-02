import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";
import "./loginregist.css";
import './bootstrap.min.css';

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);



    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("sanskarEmail", JSON.stringify(email));
            localStorage.setItem(
                "sanskarPassword",
                JSON.stringify(password)
            );
            console.log("Saved in Local Storage");

            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }




    return (
        <>

            <div class="container">
                {" "}
                {login ? (
                    <form onSubmit={handleFormSubmit}>
                        <center><h3>Register</h3></center>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Full Name"
                                name="name"
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone No.</label>
                            <input
                                type="Phone"
                                className="form-control"
                                placeholder="Enter contact no"
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>

                        <center>
                            <button type="submit" className="btn btn-dark btn-lg btn-center">
                                Register
                            </button>
                        </center>
                        <p onClick={handleClick} className="forgot-password text-center">
                            Apa kamu sudah{" "}log in?

                        </p>
                        {flag && (
                            <Alert color="primary" variant="danger">
                                Harap semua field di isi!
                            </Alert>
                        )}
                    </form>
                ) : (
                    <Login />
                )}
            </div>

        </>
    );
}

export default Registration;
