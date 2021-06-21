import React from 'react';

const Profile = (props) => {
    return (
        <div>
            <div>{props.profile.name} ({props.profile.age} years old)</div>
        </div>
    )
}

export default Profile;