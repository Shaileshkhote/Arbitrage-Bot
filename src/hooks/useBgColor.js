import {useState, useEffect} from 'react'

export default function useBgColor(priceArb){

    const [bgColor, setbgColor] = useState('bg-gradient-to-b from-sky-400 to-sky-200')

    useEffect(()=>{
        countColor()    
    },[priceArb])
  const countColor = () => {
    if (priceArb == 0)  { setbgColor('bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r');}
    else if (priceArb < 0)  { setbgColor('bg-gradient-to-r from-red-200 to-red-600');}
    else if (priceArb < -50)  {  setbgColor('bg-gradient-to-r from-red-300 to-red-700');}
    else if (priceArb < -100)  {  setbgColor('bg-gradient-to-r from-red-400 to-red-800');}

    else if (priceArb > 0) { setbgColor('bg-gradient-to-r from-green-200 via-green-400 to-green-500');}
    else if (priceArb > 50) {  setbgColor('bg-gradient-to-r from-green-300 via-green-600 to-green-700');}

    else if (priceArb === 0) setbgColor('bg-gradient-to-r from-red-200 to-red-600'); 
};

return [bgColor,setbgColor]

}