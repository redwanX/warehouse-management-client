import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import feedbackImage from '../../../Images/feedBack/feedback_img.jpg'
const Feedback = () => {
  const [user] = useAuthState(auth);
  const [email,setEmail] = useState('');
  const emailRef = useRef('');
  useEffect(()=>{
    if(user){
      if(user?.user?.email){
        setEmail(user?.user?.email)
      }
      else if(user?.email){
        setEmail(user?.email)
      }
      else{
        setEmail('');
      }
    }
    else{
      setEmail('');
    }
  },[user])

  const submitFeedback = (e)=>{
    e.preventDefault();
    const email = e?.target?.email?.value;
    const feedback = e?.target?.feedback?.value;
    if(email && feedback){
      axios.post('https://mysterious-wildwood-99766.herokuapp.com/feedback',{email,feedback})
      .then(res=>{
        toast("FeedBack Received! Thank You!");
        e.target.reset();
      })
      .catch(err=>{
        toast("Something Went Wrong");
      })
    }
  }

  const updateEmail = ()=>{
    if(!user){
      setEmail(emailRef.current.value);
    }
  }
  return (
    <div className='py-5 secondery-bg'>
        
        <div className='container'>
        <h1 className=' my-3 secondery-text fw-bolder text-center'>FEED BACK</h1>
        <hr></hr>
            <div className='row g-4 row-cols-1 row-cols-lg-2'>
             <div className='col'>
                 <img className='w-100'  src={feedbackImage} alt="" />
                
             </div>
             <div className='col d-flex flex-column justify-content-center'>
              <div>
              <h3 className='secondery-text'>WE DO CARE ABOUT YOUR <span className='primary-text'>FEEDBACK</span>!</h3>
             <Form onSubmit={submitFeedback}> 
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bold primary-text' >Email address</Form.Label>
                <Form.Control name="email" type="email" ref={emailRef} required placeholder="Enter email" disabled = {user?true:false} value={email} onChange={updateEmail} />
                <Form.Text className="text-muted">
                  {user?"Email Already Taken From your Profile":""}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bold primary-text'>Feed Back</Form.Label>
                <Form.Control name="feedback" placeholder='FeedBack Or Suggestion' as="textarea" rows={5} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
               
              </Form.Group>
              <Button className='btn-dark rounded-pill px-5 fw-bold' type="submit">
                Submit
              </Button>
            </Form>
             </div>
              </div>
              
            </div>
            
        </div>
    </div>
  )
}

export default Feedback