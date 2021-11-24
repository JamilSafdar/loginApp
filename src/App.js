import React, {useState, useEffect} from 'react';
import "./App.css";
import { Signup } from "./components/signup";
import { fetchRequest, getUser } from './utils';

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

useEffect(() => {
    const jsonUser = localStorage.getItem('user');
    const saveUser = JSON.parse(jsonUser);
    if(saveUser) {
setUser(saveUser);
    }
}, [])

  const submitHandler = async (e) => {
    e.preventDefault();
    const userObj = { username: username, email: email, password: password };
    setUser(userObj);
    const jsonObj = JSON.stringify(userObj);
    localStorage.setItem("user", jsonObj)
  };

  return (
    <div className="App">
      {user ? <h1>Welcome{user.username}</h1> : <h1>Please Log In</h1>}
      {!user && (
        <Signup
          setUsername={setUsername}
          setEmail={setEmail}
          setPass={setPass}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
};

export default App;
