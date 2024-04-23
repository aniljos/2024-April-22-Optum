import axios from "axios";
import React, { useRef, useState, ChangeEvent, useEffect } from "react";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { AppDispatch } from "../redux/store";
import {setAuth} from '../redux/authReducer';

interface LoginResponse{
    accessToken: string;
    refreshToken: string;
}

const Login: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const nameFieldRef = useRef<HTMLInputElement>(null);
    const count = useRef(10); // not reset
    let acount = 10; // reset to 10 when the component rerenders

    useEffect(() => {
        nameFieldRef.current?.focus();
    }, [])

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }
    function handlePwdChange(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }
    async function handleSubmit(e: React.FormEvent) {

       e.preventDefault();

        if(!name || !password){
            setError("Please enter username and password");
            return;
        }

        //API call to authenticate user
        try {
            
            const response = await axios.post<LoginResponse>("http://localhost:9000/login", {name, password});
            const {accessToken, refreshToken} = response.data;
            // dispatch({type:"SET_AUTH", 
            //                 payload: {userName: name, isAuthenticated: true, accessToken, refreshToken}});

            dispatch(setAuth({userName: name, isAuthenticated: true, accessToken, refreshToken}));
            setError(null);
            navigate("/");

        } catch (error) {
            // dispatch({type:"SET_AUTH", 
            //                 payload: {userName: "", isAuthenticated:false, accessToken: "", refreshToken: ""}});

            dispatch(setAuth({userName: "", isAuthenticated:false, accessToken: "", refreshToken: ""}));
            setError("Invalid credentials");

        }

    }

    return (
        <div>
            <h2>Login</h2>

            {error? <div className="alert alert-danger">{error}</div>: null}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input ref={nameFieldRef} type="text" id="username" className="form-control" onChange={handleNameChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" onChange={handlePwdChange}/>
                </div>

                <div>
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;