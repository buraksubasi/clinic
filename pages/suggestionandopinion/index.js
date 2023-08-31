import React, { useState } from 'react'
import Layout from '../../components/Layout'
import  FormInput from "../../components/FormInput"
import CustomSnackbar from '../../components/CustomSnackbar'
import { Button } from '@mui/material'
const SuggestionandOpinion = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [text, setText]= useState("")
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <Layout>
        <div>
          <CustomSnackbar handleClose={handleClose} open={open} severity={severity} text={text}/>
          <FormInput  handleClose={handleClose} handleOpen={handleOpen} setSeverity={setSeverity} setText={setText} />
          <Button onClick={handleOpen} >aç</Button>
        </div>
    </Layout>
  )
}

export default SuggestionandOpinion