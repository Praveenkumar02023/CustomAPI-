import { useState,useEffect} from "react";

const getProfile = (userName) =>{

    const [profile,setProfile] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    useEffect(()=>{
        const fetchProfile = async ()=> {
            setLoading(true);
            try{
                const response = await fetch(`https://api.github.com/users/${userName}`)   
                
                if(!response.ok){
                    throw new Error("Error fetching profile :(");
                }
                const data = await response.json();
                setProfile(data);
                // console.log(data);
                setLoading(false);
            }catch(e){
                setError(e.message);
                setLoading(false);
            }
        }

        fetchProfile()
    },[userName]);

    return (
        {profile,error,loading}
    )
}

export default getProfile