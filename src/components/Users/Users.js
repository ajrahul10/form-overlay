import React from 'react';

const Users = (props) => {
    return (
        <div>
            {props.users.map(user =>
                <div key={user.id}>
                    {user.name} ({user.age} years old)
                </div>
            )}
        </div>
    )
}

export default Users;