import { useState, useEffect } from "react";


let UsersFunc = () => {
    const [users, setUsers] = useState([
        { name: "hamza", age: 20, isAdmin: true },
        { name: "omar", age: 23, isAdmin: true },
        { name: "ziad", age: 25, isAdmin: false },
    ],)

    const [isAuth, setIsAuth] = useState(false);
    const handleToggleUsers = () => {
        setIsAuth(!isAuth);
    }

    useEffect(()=>{
        console.log("From didMount");
        
    }, [])
    
    useEffect(()=>{
        console.log("From didUpdate");

    }, [isAuth])

    return (
        <>
            <ul>
                {isAuth ? users.map((user, index) => {
                    if (user.isAdmin) {
                        return <li key={index}>{user.name}</li>
                    }
                }) : (
                    <h3>Pleas login first</h3>
                )}
            </ul>
            <button className="btn btn-success" onClick={() => { handleToggleUsers() }}>Toggle</button>

        </>
    )
}

export default UsersFunc;