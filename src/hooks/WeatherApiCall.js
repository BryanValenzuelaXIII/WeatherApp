import { useState } from "react";


function useFetch ({url}){

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    async function fetchInfo(){
        try{
            const response = await fetch(url);
            const json = response.json();
                if(!response.ok){
                    setError(true);
                }
            setData(json);
        } catch(e){
            setError(true)
        }
    }

    return {data, error};
}