import { Modal, Box, Button, Typography} from "@mui/material"
import TextField from '@mui/material/TextField';

import * as React from 'react';



const AddCategories = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height:300,
        bgcolor: 'background.paper',
        boxShadow: 4,
        py:7,
        px:4,
        borderRadius:1
      };

    return(


        <div className="modal">
             <button onClick={handleOpen} className="main-button" style={{ padding:" 13px 17px", fontSize:"15px", color:"#FFF", border:"0px", 
        borderRadius:"8px", cursor:"pointer"
    }} >Create Product Category</button>
          <Modal
        open={open}
        onClose={handleClose}
    
      >
        <Box sx={style}>
        <TextField
          id="categorie-name"
          label="Categorie Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{mb:4, width:'100%'}}
        />

 <TextField
          id="categorie-name"
          label="Categorie IMG URL"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{mb:4, width:'100%'}}
        />

        <Button  variant="outlined" size="medium" sx={{'&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color:'#fff'
  },}}>SAVE</Button>
        <Button onClick={handleClose} sx={{backgroundColor:"gray", color:"#fff", ml:2, '&:hover': {
            color:"#000"
  },}} variant="outlined" size="medium">CANCEL</Button>


        </Box>
      </Modal>
        </div>
    )
}

export default AddCategories