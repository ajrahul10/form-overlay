import React from 'react';
import NewProfileForm from './NewProfileForm';

const NewProfile = props => {

    const onFormSubmission = (newProfile) => {
        props.onNewProfileAddition(newProfile);
    }

    return (
        <NewProfileForm onNewProfileFormSubmit={onFormSubmission} />
    )
}

export default NewProfile;