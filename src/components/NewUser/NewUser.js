import React, { useState } from 'react';
import './NewUser.css'

const NewUser = props => {

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
        if (name.trim().length === 0 || age.trim().length === 0) {
            console.log("error");
            return;
        }
        if (+age < 0) {
            console.log("error1");
            return;
        }
        let newUser = {
            id: Math.random(),
            name: name,
            age: age
        }
        props.onNewUserAddition(newUser);
        setName("");
        setAge("");
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            value={name}
                            onChange={onNameChangeHandler}
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age(Years)</label>
                        <input
                            id="age"
                            value={age}
                            onChange={onAgeChangeHandler}
                            type="number"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    );
}

export default NewUser;