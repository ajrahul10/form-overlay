import React, { useState } from 'react';

const NewProfileForm = (props) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const onNameChangeHandler = e => {
        setName(e.target.value);
    }
    const onAgeChangeHandler = e => {
        setAge(Number(e.target.value));
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        if(name.length === 0 || age.length === 0) {
            console.log("error");
            return;
        }
        if(age < 0) {
            console.log("error1");
            return;
        }
        let newProfile = {
            id: Math.random(),
            name: name,
            age: age
        }
        props.onNewProfileFormSubmit(newProfile);
        setName("");
        setAge("");
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <div>
                        <label>Username</label>
                        <input value={name} onChange={onNameChangeHandler} type="text" />
                    </div>
                    <div>
                        <label>Age(Years)</label>
                        <input value={age} onChange={onAgeChangeHandler} type="number" />
                    </div>
                </div>
                <div>
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    )
}

export default NewProfileForm;