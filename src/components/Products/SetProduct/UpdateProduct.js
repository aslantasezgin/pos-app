
import { NavLink, useParams } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateProduct = () => {

    const {id} = useParams()
    const {productList} = useSelector(state => state.product)
    const data = productList.find(item => item.id === id)


}