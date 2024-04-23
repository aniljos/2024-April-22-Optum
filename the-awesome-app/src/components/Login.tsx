import React, { useRef, useState, ChangeEvent } from "react";

const Login: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const nameFieldRef = useRef<HTMLInputElement>(null);

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }
    function handlePwdChange(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }
    function handleSubmit(e: React.FormEvent) {

       e.preventDefault();

        if(!name || !password){
            setError("Please enter username and password");
            return;
        }

        //API call to authenticate user

    }

    return (
        <div>
            <h2>Login</h2>

            {error? <div className="alert alert-danger">{error}</div>: null}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="form-control" onChange={handleNameChange} />
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