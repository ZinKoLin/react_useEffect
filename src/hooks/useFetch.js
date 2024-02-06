import React, {  useEffect, useState } from 'react'

function useFetch(url){

    let [data,setData]=useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);

    useEffect(()=>{
        let abortController = new AbortController();
        let signal = abortController.signal;
        setLoading(true);
        fetch(url,{
            signal
        })
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
            //clean up function
          return ()=>{
            abortController.abort();

          }
        
      },[url]);//dependcy arrary

      return{ data: data, loading, error}

}

export default useFetch;