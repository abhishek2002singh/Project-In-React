import { useEffect , useState } from "react";

const Useconverter=(currency)=>{

     const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    //     .then((res) => res.json())
    //     .then((res) => setData(res[currency]))
    //     console.log(data);
    // }, [currency])
    // console.log(data);
    // return data

    const fecthdata=async()=>{
        const dta=await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
        const json=await dta.json();
        setData(json[currency])

    }


    useEffect(()=>{
        fecthdata();
    } , [])

   return data;
 

 
}





export default Useconverter