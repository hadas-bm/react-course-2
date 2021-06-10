import React, { useState } from 'react';

import styles from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';


const AddUser = ({ onAddUser }) => {
    const [nameEntered, setNameEntered] = useState('');
    const [ageEntered, setAgeEntered] = useState('');
    const [error, setError] = useState(null);


    const changeNameHandler = (event) => {
        setNameEntered(event.target.value);
    }

    const changeAgeHandler = (event) => {
        setAgeEntered(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        if (nameEntered.trim().length === 0 || ageEntered.trim().length === 0) {
            setError({
                title: 'An error occured!',
                content: 'You must fill all fileds'
            })
            return;
        }

        if (ageEntered < 1) {
            setError({
                title: 'An error occured!',
                content: 'Age need to be bigger than 0'
            })
            return;
        }

        const data = {
            id: Math.random().toString(),
            userName: nameEntered,
            age: +ageEntered,
        }
        onAddUser(data);

        setNameEntered('');
        setAgeEntered('');
    }

    return (
        <div>
            {error && <ErrorModal
                {...error}
                onCloseModal={() => setError(null)}
            />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label>Username</label>
                    <input type="text" value={nameEntered} onChange={changeNameHandler} />
                    <label>Age (Years)</label>
                    <input type="text" value={ageEntered} onChange={changeAgeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;