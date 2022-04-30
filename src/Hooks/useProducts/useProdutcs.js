import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useProdutcs = (email) => {
    if(email){
        email="?email=" +email;
    }
    else {
        email="";
    }
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`http://localhost:5000/products${email}`)
        .then(res=>{
          setItems(res.data);
          setLoading(false);
        })
        .catch(err=>{console.log("error: ",err);setLoading(false);})
    },
    [])
    return [items,loading,setItems];

}

export default useProdutcs