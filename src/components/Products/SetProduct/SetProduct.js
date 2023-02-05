
import { InputLabel, Modal, Box, Button, Typography, Select, MenuItem, FormControl} from "@mui/material"
import TextField from '@mui/material/TextField';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useParams } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../../../store/actions/productActions";
import TableActions from "../../Global/TableActions/TableActions";

const SetProduct = () => {

    const {categoryList} = useSelector(state => state.productCategory)
    const {id} = useParams()
    const {productList} = useSelector(state => state.product)
    const data = productList.find(item => item.id === id)
    console.log(data)

    const [productName, setProductName] = useState(data.productName)
    const [productCode, setProductCode] = useState(data.id)
    const [productIMG, setProductIMG] = useState(data.product.props.src)
    const [productCategory, setProductCategory] = useState(data.productCategory)
    const [productPrice, setProductPrice] = useState(data.productPrice)
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
        }} label={"Product Name"} type="text" defaultValue={data.productName} required sx={{mb:4, mr:1, width:'74%'}}></TextField>


        <TextField id="productCode" onChange={(e) => {
          setProductCode(e.target.value)
        }} label={"Product Code"} defaultValue={data.id}  type="text" required sx={{mb:4, mr:0, width:'24%'}}></TextField>

        <TextField id="productIMG" onChange={(e) =>{
          setProductIMG(e.target.value)
        }} label={"Product Image URL"}  defaultValue={data.product.props.src}  type="text" required sx={{mb:4, mr:0, width:'99%'}}></TextField>
      
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

          defaultValue={productCategory}
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
      }} label="Product Price" defaultValue={data.productPrice}  type="text" required sx={{mb:4, mr:1, width:'49%'}}></TextField>

    <NavLink to="/products">   <Button onClick={() => {
      notify()
      dispatch(updateProduct(id,{id:productCode,product:<img className='data-img' src={productIMG}></img>, productName: productName, productCode:<span className='product-code'> {productCode} </span>, productPrice:productPrice,productCategory: productCategory, action:<TableActions productId={productCode}></TableActions>}))

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

export default SetProduct