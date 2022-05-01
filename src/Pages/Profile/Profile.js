import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useProdutcs from '../../Hooks/useProducts/useProdutcs';
import Loading from '../Shared/Loading/Loading';
import TableDataActivity from '../TableData/TableDataActivity';
import profilePic from '../../Images/Profile/profile.png'
import CounterCard from '../Home/Counter/CounterCard';
import processNUmber from '../../utils/processnumber';
const Profile = () => {
    const [user,loading] = useAuthState(auth);
    const [items ,setItems] = useState([]);
    const [allItems,loadingAllItems,setAllItems] = useProdutcs();
    const [itemsLoading,setItemsloading] = useState(false);
    const [myItems,setMyItem] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        const authToken =localStorage.getItem('authToken');
        if(user && authToken){
              setItemsloading(true);
                const email = user?.user?.email || user?.email;
                axios.get(`https://mysterious-wildwood-99766.herokuapp.com/getactivity?email=${email}`,{
                headers:{authorization: `Bearer ${authToken}`}
              })
              .then(res=>{
                  setItems(res.data.reverse());
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

    useEffect(()=>{
        const currentEmail = user?.user?.email || user?.email;
        let totalItem=0,sells=0,revenew=0;
        const selectedItems = allItems.forEach(item =>{
            if(item.email ===currentEmail){
                totalItem++;
                revenew+= parseInt(item.sold) * parseInt(item.price);
                sells +=parseInt(item.sold);
            }
        });
        setMyItem({totalItem,sells,revenew});
    },[allItems]);
    
    if(loading || itemsLoading||loadingAllItems){
        return <Loading></Loading>
      }
  return (
    <div style={{minHeight: 'calc(100vh - 116px - 74px)'}} className='container'>
        <div className='py-3 d-flex flex-column align-items-center'>
        <img className='rounded-circle' style={{height:"100px",width:"100px"}} src={user.photoURL?user.photoURL:profilePic} alt="" />
        <h1 className='primary-text'>{user.displayName?user.displayName:"UNKNOWN"}</h1>
        <div>
        </div>
        </div>
        <div className=' row row-cols-1 g-4 row-cols-lg-3'>
          <CounterCard color="dark" title="CURRENT TOTAL PRODUCTS" data={myItems?.totalItem?myItems.totalItem:0}></CounterCard>
          <CounterCard color="primary" title="SELLS FORM AVAILABLE PRODUCTS" data={myItems?.sells?myItems.sells:0}></CounterCard>
          <CounterCard color="dark" title="REVENEWS FORM AVAILABLE PRODUCTS" data={myItems?.revenew?processNUmber(myItems?.revenew)+'$':'0$'}></CounterCard>
      </div> 
        <h3 className=' mt-5 secondery-text fw-bold text-center'>PRODUCT ADD/DELETE ACTIVITIES</h3>
        <hr></hr>
    {
        items.length?
        <Table bordered hover className='table mt-3'>
        <thead className='text-center'>
            <tr>
            <th>Product Name</th>
            <th>Date</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {items&&items.map(item=><TableDataActivity key={item._id} item={item}></TableDataActivity>)}
        </tbody>
        </Table>:
        <small className='secondery-text fw-bold d-block text-center'>You Dont Have Any Activities</small>
    }

    </div>
  )
}

export default Profile