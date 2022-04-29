import React, { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../Images/Icons/google.png'
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
const SocialAuth = () => {
  //Hooks
  const navigate = useNavigate();
  const location =useLocation();
  const [signInwithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let from = location.state?.from?.pathname || "/";
    
  //Error Handling
  useEffect(()=>{
      if(error){
        toast(error?.message)
      }
    },[error]);

  //If user wasnt login then take back to place form where it came (checkout)
  useEffect(()=>{
      if(user){
        navigate(from,{replace:true});
      }
    },[user]);

  //Loding
  if(loading){
      <Loading></Loading>
    }
 
  return (
    

    <div>
        <div className='d-flex align-items-center'>
          <div style={{ height: '1px' }} className='bg-secondary w-100'></div>
          <p className='p-0 pt-1 mx-3 fw-bold fs-3 text-secondary'>or</p>
          <div style={{ height: '1px' }} className='bg-secondary w-100'></div>
        </div>
        <button  className='w-100 btn btn-dark shadow rounded-lg mb-5' onClick={()=>signInwithGoogle()}>
          <div className='d-flex align-items-center justify-content-center'>
          <img  style={{ width: '30px' }}src={google} alt="" />
          <span>Sign In/Up With Google</span>
          </div>
        </button>


    </div>
  )
}

export default SocialAuth