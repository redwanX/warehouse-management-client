import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const AddItem = () => {
    const [validated, setValidated] = useState(false);
    const [user, loading, error] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }
    const saveItem=(e,body)=>{   
        if(user){
            const email =user.email?user.email:"redwan@gmail.com";
            body = {email,...body};
            axios.post('http://localhost:5000/addproduct',body)
            .then(res=>{
                toast("Added Item Succesfully");
                e.target.reset();
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }
        setValidated(true);
        if(form.checkValidity()===true){
        
            const name =event.target.name.value;
            const price =parseFloat(event.target.price.value);
            const quantity =parseInt(event.target.quantity.value);
            const sold = 0;
            const desc =event.target.desc.value;
            const supplier =event.target.supplier.value;
            const image =event.target.img.value;
            const body ={name,image,desc,quantity,sold,supplier,price};
            saveItem(event,body);
          setValidated(false);
        }
      };

  return (
    <div  style={{minHeight: 'calc(100vh - 116px - 74px)'}} className='container mb-3'>
        <h3 className=' mt-5 secondery-text fw-bold text-center'>ADD INVENTORY ITEM</h3>
        <hr></hr>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        
        <Form.Group  className='mb-3' controlId="validationCustom00">
            <Form.Control className='secondery-bg' name="name"  type="text" placeholder="Product Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group  className='mb-3' controlId="validationCustom00">
            <Form.Control className='secondery-bg' name="price" type="number" min="0" step="0.01" placeholder="Product Price" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Price.
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group  className='mb-3' controlId="validationCustom02">
            <Form.Control className='secondery-bg' name="quantity" type="number" min="0" placeholder="Product Quantity" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Quantity.
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group  className='mb-3' controlId="validationCustom04">
            <Form.Control className='secondery-bg' name="desc" type="text" placeholder="Product Description" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Description.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group  className='mb-3' controlId="validationCustom05">
            <Form.Control className='secondery-bg' name="img" type="text" placeholder="Product Image Link" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Image Link.
            </Form.Control.Feedback>
            </Form.Group>
        
            <Form.Group  className='mb-3' controlId="validationCustom05">
            <Form.Control className='secondery-bg' name="supplier" type="text" placeholder="Supplier's Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Supplier Name.
            </Form.Control.Feedback>
          </Form.Group>
        <Button className='rounded-pill px-4 btn-dark' type="submit">Add Product</Button>
      </Form>
    </div>
  )
}

export default AddItem