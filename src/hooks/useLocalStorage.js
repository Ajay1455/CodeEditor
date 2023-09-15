import React, {useEffect, useState} from 'react'

const prefix='codepen-clone'
function useLocalStorage(k, initial) {
    const prefixKey= prefix+k;

    const [value, setValue]=useState(()=>{
        const jsonVal=localStorage.getItem(prefixKey)
        if(jsonVal!=null)return JSON.parse(jsonVal)

        if(typeof initial==='function'){
            return initial();
        }else{
            return initial
        }
    })

    useEffect(()=>{
        localStorage.setItem(prefixKey, JSON.stringify(value))
    },[prefixKey,value])
  return [value, setValue]
}

export default useLocalStorage