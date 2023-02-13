import React, { useState } from 'react'
import Login from '../../components/Login';
import Dashboard from '../../components/Dashboard';

const Admin = () => {
    const [login, setLogin] = useState (false);
    console.log("login=>",login)
  return (
    <div>
        {login && <Dashboard setLogin={setLogin} />}
        {!login && <Login setLogin={setLogin} />}
    </div>
  )
}

export default Admin