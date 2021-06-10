import React from 'react';

const UserItem = ({ userName, age }) => {

    return (
        <li>
            {`${userName} (${age} years old)`}
        </li>
    );
}

export default UserItem;
