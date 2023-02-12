import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from '@mui/material';
const Whatsapp = () => {
  return (
    <div>
        <IconButton aria-label="whatsappicon" >
            <WhatsAppIcon fontSize='large' sx={{color:"#4FCE5D"}} />
        </IconButton>
    </div>
  )
}

export default Whatsapp