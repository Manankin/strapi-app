import { useState } from 'react';
import { Navigate } from "react-router-dom";

export default function Expenses() {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');
  const [auth, setAuth] = useState('');
  const [Email, setEmail] = useState('test@gmail.com');
  const [Password, setPassword] = useState('pass123');
  const [submit, setSubmit] = useState();

  const update = async () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({identifier: Email, password: Password})
    };

    fetch('http://localhost:1337/api/auth/local', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setAuth(data)
        });
  }

  if(typeof(auth.jwt) !== "undefined") {
      const url = "/dashboard";
      console.log(url);
      return <Navigate to={url}/>;
  }

  return (
    <div className="container">
      <center>
        <div style={{ width: '270px', marginLeft: '0px', marginTop: '200px' }}>
          <h2>Login</h2>
          <p>login as{id} agent</p>
          <form role="form">
            <div className="form-group">
                <label htmlFor="usr">Email:</label>
                <input type="text" className="form-control" id="usr" onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="form-groug">
              <br />
              <button
                type='button'
                className="form-control"
                value="login"
                onClick={() => update()}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
}