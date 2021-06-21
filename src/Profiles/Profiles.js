import React from 'react';
import Profile from './Profile/Profile';

const Profiles = (props) => {
    return (
        <div>
            {props.profiles.map(profile => {
                return <Profile key={profile.id} profile={profile} />
            })}
        </div>
    )
}

export default Profiles;