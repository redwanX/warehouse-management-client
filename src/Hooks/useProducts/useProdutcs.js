import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useProdutcs = () => {
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://mysterious-wildwood-99766.herokuapp.com/allproducts`)
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