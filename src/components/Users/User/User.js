import React from 'react';

const User = (props) => {
    return (
        <div>
            <div>{props.user.name} ({props.user.age} years old)</div>
        </div>
    )
}

export default User;