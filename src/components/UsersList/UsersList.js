import React from 'react';

import styles from './UsersList.module.css';
import UserItem from './UserItem';
import Card from '../UI/Card'

const UsersList = ({ users }) => {
    return (
        <Card className={styles.users}>
            <ul>
                {users.map(user =>
                    <UserItem key={user.id} {...user} />
                )}
            </ul>
        </Card>
    );
}

export default UsersList;
