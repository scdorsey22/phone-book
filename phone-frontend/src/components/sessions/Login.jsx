import React, {useState} from 'react'
import fire from '../../fire'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`submitted email: ${email} password: ${password}`)
        fire.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.error('Incorrect username or password');
            });
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}> 
                <input 
                type="text" 
                onChange={({target}) => setEmail(target.value)}
                placeholder="Email"
                />
                <br/>
                <input 
                type="text" 
                onChange={({target}) => setPassword(target.value)}
                placeholder="Password"
                />
                 <br/>
                 <button type="submit">Sign In</button>
            </form>
        </div>
    )



}

export default Login;