import React, { useState } from 'react'
import Box from '@mui/material/Box';
import styles from "../../styles/Home.module.scss"
import { Button, TextField } from '@mui/material'
import { addFireStore } from '../../utils/firebase';
const FormInput = ({handleClose, handleOpen, setText, setSeverity}) => {

    const [inputState, setInputState] = useState({
        firstname:"",
        lastname:"",
        phone:"",
        email:"",
        text:""

    })

    const handleChange = (name,value) => {
        setInputState((prev)=> {
            return {...prev,[name]:value}
        })
    }

    const handleSubmit = () => {
        addFireStore({
            firstname: inputState.firstname,
            lastname: inputState.lastname,
            email: inputState.email,
            text:inputState.text ,
            phone: inputState.phone,
          })
        handleOpen();
        setSeverity("success");
        setText("Mesajınız Başarılı bir şekilde iletilmiştir.")
        setInputState({
            firstname:"",
            lastname:"",
            phone:"",
            email:"",
            text:""})
    }
    return (
        <Box>
            <form onSubmit={(e)=>{
                e.preventDefault();
                handleSubmit();
                }} >
                <div className={styles.formDiv} >
                    <TextField
                        name="firstname"
                        id="outlined-textarea"
                        label="Adınız"
                        placeholder="Adınızı giriniz"
                        multiline
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={inputState.firstname}
                    />
                    <TextField
                        name="lastname"
                        id="outlined-textarea"
                        label="Soyadınız"
                        placeholder="Soyadınızı giriniz"
                        multiline
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={inputState.lastname}
                    />
                </div>
                <div className={styles.formDiv}>
                    <TextField
                        name="phone"
                        id="outlined-textarea"
                        label="Telefon"
                        placeholder="Telefon Giriniz"
                        multiline
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={inputState.phone}

                    />
                    <TextField
                        name="email"
                        id="outlined-textarea"
                        label="Email"
                        placeholder="Email giriniz"
                        multiline
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={inputState.email}

                    />

                </div>
                <div className={styles.formDiv}>
                    <TextField
                        name="text"
                        id="outlined-multiline-static"
                        label="Mesajınız"
                        placeholder="Mesaj giriniz"
                        multiline
                        rows={4}
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={inputState.text}
                        
                    />
                </div>
                <Button type='submit' >Ekle</Button>


            </form>
        </Box>
    )
}

export default FormInput