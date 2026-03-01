import React from "react";


class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            isAuth: true,
            users: [
                { name: "hamza", age: 20, isAdmin: true },
                { name: "omar", age: 23, isAdmin: true },
                { name: "ziad", age: 25, isAdmin: false },
            ],
        };
    }

    render() {
        return (
            <>
                <h2 className="text-primary text-decoration-underline mb-5">Users component</h2>
                <ul>
                    {(this.state.isAuth) ? this.state.users.map((user, index) => {
                        if (user.isAdmin) {
                            return <li key={index}>{user.name}</li>
                        }
                    }) : <h3>Please login first</h3>}
                </ul>
            </>
        )
    }
}

export default Users;