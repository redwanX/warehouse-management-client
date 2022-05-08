import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import TableData from '../TableData/TableData';

const MyItems = () => {
    const [user,loading] = useAuthState(auth);
    const [items ,setItems] = useState([]);
    const [itemsLoading,setItemsloading] = useState(false);
    const location = useLocation();
    useEffect(()=>{
      const authToken =localStorage.getItem('authToken');
      if(user){
            setItemsloading(true);
            const email = user?.user?.email || user?.email;
              axios.get(`https://mysterious-wildwood-99766.herokuapp.com/products?email=${email}`,{
              headers:{authorization: `Bearer ${authToken}`}
            })
            .then(res=>{
                setItems(res.data);
                setItemsloading(false);
            })
            .catch(err=>{
              if(err.response.status ===401 || err.response.status ===403){
                toast("YOU ARE NOT AUTHORIZED!");
                signOut(auth)
                return <Navigate to="/login" state={{ from: location }} replace />
              }
            })
           }
        
           
        },
    [user])
    if(loading || itemsLoading){
      return <Loading></Loading>
  }
    const deleteItem = (id)=>{
        const confirm = window.confirm("Confirm Delete This Item?");
        if(confirm){
          const email = user?.user?.email || user?.email;
          const currnt_product =items.find(item=>item._id===id);
          axios.delete(`https://mysterious-wildwood-99766.herokuapp.com/deleteItem/${id}?email=${email}&name=${currnt_product.name}&action=delete`)
        .then(res=>{
          toast("Item Deleted Succesfully!")
          setItems(items.filter((item)=>item._id !==id));
        })
        }
    }
    


  return (
    <div  style={{minHeight: 'calc(100vh - 116px - 74px)'}} className='container mb-3'>
    <div className='d-flex justify-content-end'>
    </div>
        {
          items.length?
          <Table bordered hover className='table mt-3'>
          <thead className='text-center'>
          <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Sold</th>
          <th>Price</th>
          <th>Supplier</th>
          <th>Description</th>
          <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {items.map(item=><TableData key={item._id} myItems={true} deleteItem={deleteItem} item={item}></TableData>)}
          </tbody>
          </Table>
          :
          <small className='secondery-text mt-5 fw-bold d-block text-center'>You Dont Have Any Item</small>
        }

        </div>
)
}

export default MyItems