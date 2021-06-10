import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';


const App = () => {
  const [users, setUsers] = useState([]);

  const onAddUser = (newUser) => {
    setUsers((prevState) =>
      prevState.concat([newUser])
    )
  }

  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      {users.length && <UsersList users={users} />}
    </div>
  );
}

export default App;
