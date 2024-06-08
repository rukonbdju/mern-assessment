import { useEffect } from "react"
import { useState } from "react"

const useCars=()=>{
    const [cars,setCars]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState([])

    const getCars= async()=>{
        try{
            setLoading(true)
            const response= await fetch("https://exam-server-7c41747804bf.herokuapp.com/carsList")
            const data=await response.json()
            setCars(data)
        }
        catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }

    }

    useEffect(()=>{
        getCars()
    },[])


    return {cars,loading,error}


}

export default useCars