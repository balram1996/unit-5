import {useEffect,useState} from "react";

function useQuery(url){
   const [loading,setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [data,setData] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then((d)=>d.json())
        .then((x)=>{
            console.log(x.total_count)
            setLoading(false)
            setData(x.items);
        })
        .catch((e)=>{
            setError(e);
            setLoading(false)
        })
            
    
    }, [])

    return {loading,error,data}
}

export const Github=()=>{

    const {loading,error,data} = useQuery("https://api.github.com/search/users?q=masai&per_page=3");

    // useEffect(() => {
    //     fetch("")
    //     .then(()=>d.json())
    //     .then((x)=>{
    //         console.log(x.total_count)
    //     })
    //     .catch(console.log("error"))
            
    
    // }, [])

    return  loading ?(
       "...loading"
    ): error ? (
        "something went wrong"
    ):(
        <div>
            {data.map((e,i)=>(
                <div key={i}>{e.login}</div>
            ))}
        </div>
    );
}