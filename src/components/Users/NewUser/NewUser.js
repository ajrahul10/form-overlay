import React from 'react';
import NewUserForm from './NewUserForm';

const NewUser = props => {

    const onFormSubmission = (newUser) => {
        props.onNewUserAddition(newUser);
    }

    return (
        <NewUserForm onNewUserFormSubmit={onFormSubmission} />
    )
}

export default NewUser