import {useEffect,useState} from "react";

function useQuery(url){
   const [loading,setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [data,setData] = useState([]);

    useEffect(() => {
        fetch("url")
        .then((d)=>d.json())
        .then((x)=>{
            console.log(x.total_count)
            setLoading(false)
            setData(x.items);
        })
        .catch((e)=>{
            setError(true);
            return e.message;
        })
            
    
    }, [])

    return {loading,error,data}
}

export const Github=()=>{

    const query = useQuery("https://api.github.com/search/users?q=masai&per_page=3");

    // useEffect(() => {
    //     fetch("")
    //     .then(()=>d.json())
    //     .then((x)=>{
    //         console.log(x.total_count)
    //     })
    //     .catch(console.log("error"))
            
    
    // }, [])

    return (
        <div>{query}</div>
    )
}