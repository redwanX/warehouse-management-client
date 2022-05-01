import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import TableData from '../TableData/TableData';

const MyItems = () => {
    const [user,loading] = useAuthState(auth);
    const [items ,setItems] = useState([]);
    const [itemsLoading,setItemsloading] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
      const authToken =localStorage.getItem('authToken');
      if(user && authToken){
            setItemsloading(true);
              axios.get(`http://localhost:5000/products?email=${user?.email}`,{
              headers:{authorization: `Bearer ${authToken}`}
            })
            .then(res=>{
                setItems(res.data);
                setItemsloading(false);
            })
            .catch(err=>{
              if(err.response.status ===401 || err.response.status ===403){
                signOut(auth)
                navigate('/login')
              }
            })
           }
           
        },
    [user])

    const deleteItem = (id)=>{
        const confirm = window.confirm("Confirm Delete This Item?");
        if(confirm){
          console.log("confirmed");
        axios.delete(`http://localhost:5000/deteteItem/${id}`)
        .then(res=>{
          toast("Item Deleted Succesfully!")
          setItems(items.filter((item)=>item._id !==id));
        })
        }
    }
    
    if(loading || itemsLoading){
        return <Loading></Loading>
    }

  return (
    <div  style={{minHeight: 'calc(100vh - 116px - 74px)'}} className='container mb-3'>
    <div className='d-flex justify-content-end'>
    </div>
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
        {items.map(item=><TableData key={item._id} deleteItem={deleteItem} item={item}></TableData>)}
        </tbody>
        </Table>

        </div>
)
}

export default MyItems