import React from 'react';
import axios from './commons/axios';
import { toast } from 'react-toastify';
import '../css/common/PageTemplate.scss';
import '../css/common/SellerPageTemplate.scss';

const ProductList = (props) => {

  const productID = props.productDetail['productID']
  const name = props.productDetail['productName']
  const img = props.productDetail['productImage']
  const price= props.productDetail['productPrice']
  const quantity = props.productDetail['productQuantity']
  const user = global.auth.getUser();
  const shopID = user['shopID'];

  const deleteProduct = () => {
    axios.delete(`/shops/${shopID}/${productID}`).then((res) => {console.log(res)});
    window.location.reload();
  }

  const editProduct = () => {
    window.location.href=`/addProduct?productID=${productID}`
  }

  return (
    <div className ="product-list-container">
      <img className='attribute' src={img}></img>
      <label className='attribute' >Product Name {name}</label>
      <label className='attribute' >Price {price}</label>
      <label className='attribute' >Quantity {quantity}</label>
      <button className='attribute' onClick={editProduct}>Edit</button>
      <button className='attribute' onClick={deleteProduct}>Delete</button>
    </div>
  );
};

export default ProductList;