import React, {  useEffect, useState } from 'react'

function useFetch(url){

    let [data,setData]=useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch(url)
              .then(res=>{
                if(!res.ok){
                    throw Error('Bad Api Call');
                }
                return res.json()
              })
              .then(data=>{
                  setData(data)
                  setError(null)
                  setLoading(false)
             
          })
          .catch(e=>{
            setError(e.message);
          })
        
      },[url]);//dependcy arrary

      return{ data: data, loading, error}

}

export default useFetch;