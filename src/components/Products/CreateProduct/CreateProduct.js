
import { InputLabel, Modal, Box, Button, Typography, Select, MenuItem, FormControl} from "@mui/material"
import TextField from '@mui/material/TextField';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../store/actions/productActions";
import TableActions from "../../Global/TableActions/TableActions";

const CreateProduct = () => {

    const {categoryList} = useSelector(state => state.productCategory)
    const [productName, setProductName] = useState('')
    const [productCode, setProductCode] = useState('')
    const [productIMG, setProductIMG] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
  
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const notify = () => toast.success("Success");

    return(
       <Box sx={{py:6, px:2}}>
        <TextField id="productName" onChange={(e) => {
          setProductName(e.target.value)
        }} label="Product Name" type="text" required sx={{mb:4, mr:1, width:'74%'}}></TextField>
        <TextField id="productCode" onChange={(e) => {
          setProductCode(e.target.value)
        }} label="Product Code" type="text" required sx={{mb:4, mr:0, width:'24%'}}></TextField>
        <TextField id="productIMG" onChange={(e) =>{
          setProductIMG(e.target.value)
        }} label="Product İmage URL" type="text" required sx={{mb:4, mr:0, width:'99%'}}></TextField>
      
        <FormControl sx={{mb: 4, mr:1, minWidth:'49%' }}>
        <InputLabel id="demo-controlled-open-select-label">Product Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}

          label="Product Category"
          onChange={(e) => {
            setProductCategory(e.target.value)
          }}
        >
          
          {categoryList.map((item) => {

          return(
            <MenuItem value={item.productCategoryName}>{item.productCategoryName}</MenuItem>

          )
          
          })}
       

        </Select>
      </FormControl>

      <TextField id="productPrice" onChange={(e) => {
        setProductPrice(e.target.value)
      }} label="Product Price" type="text" required sx={{mb:4, mr:1, width:'49%'}}></TextField>

    <NavLink to="/products">   <Button onClick={() => {
      notify()
      dispatch(addProduct({id:productCode,product:<img className='data-img' src={productIMG}></img>, productName: productName, productCode:<span className='product-code'> {productCode} </span>, productPrice:productPrice,productCategory: productCategory, action:<TableActions productId={productCode}></TableActions>}))

    }}  variant="outlined" size="large" sx={{'&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color:'#fff',
  },}}>SAVE</Button>
</NavLink>
       </Box>
    )
}

export default CreateProduct