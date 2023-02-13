import React from 'react'
import { useStoreListener } from '../../utils/firebase'
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const Dashboard = ({setLogin}) => {
    
    const router = useRouter();
    const users = useStoreListener();
    const handleLogout = () => {
        router.push("/");
        setLogin(false);
    }
    return (
    <div>
        Dashboard
        {users.map((user)=>{
            return (
                <>
                    <h3>{JSON.stringify(user)}</h3>
                </>
            )
                
            
        })}
        <Button  onClick={handleLogout} >Logout</Button>
    </div>
  )
}

export default Dashboard