import { Modal, Box, Button, Typography} from "@mui/material"
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import {addCategory} from "../../../store/actions/productCategoryActions"
import CategoryTableActions from "../../Global/TableActions/CategoryTableActions";




const AddCategories = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const notify = () => toast.success("Success");

    const dispatch = useDispatch()

    const [categoryName, setCategoryName] = useState('')

    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height:220,
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
          id="category-name"
          label="Category Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{mb:4, width:'100%'}}
          onChange={(e) => {
            setCategoryName(e.target.value)
          }}
        />



    <Button  variant="outlined" size="medium" sx={{'&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color:'#fff'
  },}}  
    onClick={() => {
      handleClose()
      notify()
      dispatch(addCategory({id:categoryName, productCategoryName:categoryName, action:<CategoryTableActions categoryId={categoryName}></CategoryTableActions>}))
    }}
  
  >SAVE</Button>
        <Button onClick={handleClose} sx={{backgroundColor:"gray", color:"#fff", ml:2, '&:hover': {
            color:"#000"
  },}} variant="outlined" size="medium">CANCEL</Button>


        </Box>
      </Modal>
        </div>
    )
}

export default AddCategories