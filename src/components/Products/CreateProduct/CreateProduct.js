import * as React from 'react';

import { InputLabel, Modal, Box, Button, Typography, Select, MenuItem, FormControl} from "@mui/material"
import TextField from '@mui/material/TextField';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProduct = () => {

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const notify = () => toast.success("Product Added!");

    return(
       <Box sx={{py:6, px:2}}>
        <TextField id="productName" label="Product Name" type="text" required sx={{mb:4, mr:1, width:'74%'}}></TextField>
        <TextField id="productCode" label="Product Code" type="text" required sx={{mb:4, mr:0, width:'24%'}}></TextField>
        <TextField id="productIMG" label="Product İmage URL" type="text" required sx={{mb:4, mr:0, width:'99%'}}></TextField>
      
        <FormControl sx={{mb: 4, mr:1, minWidth:'49%' }}>
        <InputLabel id="demo-controlled-open-select-label">Product Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}

          label="Product Category"
          onChange={handleChange}
        >
        
          <MenuItem value="Category1">Category1</MenuItem>
          <MenuItem value="Category1">Category1</MenuItem>
          <MenuItem value="Category1">Category1</MenuItem>

        </Select>
      </FormControl>

      <TextField id="productPrice" label="Product Price" type="text" required sx={{mb:4, mr:1, width:'49%'}}></TextField>

      <Button onClick={notify}  variant="outlined" size="large" sx={{'&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color:'#fff',
  },}}>SAVE</Button>
    <ToastContainer />
       </Box>
    )
}

export default CreateProduct