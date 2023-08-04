import axios from "axios"
import { useEffect, useState } from "react"

function UseFetch(url){
    
    const [list, setlist] = useState('')
    
    FetchData = async () =>{

        const response = await axios.get(url)
        setlist(response.data)
    }

    useEffect(() => {
        FetchData();
      return () => {
      
      }
    }, [])
    
    return(list)

}

export default UseFetch;