export const getUser = (setUser) => {
    try {
        const jsonUser =localStorage.getItem('user');
        const savedUser = JSON.parse(jsonUser);
        if (savedUser) {
            setUser(savedUser);
        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchRequest = async (`${REACT_APP_REST_API}/user`) => {
    try {
        const response = await fetch("someUrlHere", { 
            method: "POST", headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ 
                username: username,
                email: email,
                password: password
            }),
        });
        const data = await response.json();
        setUser(data.user)
        return data
    } catch (error) {
        console.log(error);
    }
}