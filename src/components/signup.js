export const Signup = (setUserName, setEmail, setPass, submitHandler) =>{
    return (
        <form onSubmit={submitHandler}>
            <input placeholder="username" 
            onchange={(e) => setUserName(e.target.value)}/>
            <input placeholder="email" 
            onchange={(e) => setEmal(e.target.value)}/>
            <button onClick/>
        </form>
    )
}