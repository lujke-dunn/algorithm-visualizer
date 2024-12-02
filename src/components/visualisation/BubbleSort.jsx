import { useState } from "react"; 

export default function BubbleSort() { 
    const [array, setArray] = useState([]); 

    const generateArray = () => {
        const newArray = []; 

        for (let i = 0; i < 10; i++) {
            newArray.push(Math.trunc(Math.random() * 20))
        } 

        return setArray(newArray);
    } 

    return (
       <div className="h-screen flex flex-col">
        
            <h2 className="text-3xl font-bold text-gray-900 ml-10 mt-0">Bubble Sort</h2>
           
            <div className="flex flex-1 justify-center items-center mx-auto">
                <ul className="flex justify-center"> 
                    {array.map((number, index) => (
                        <li className="text-gray-800 inline-block mr-2" key={index}>{number}</li>
                    ))}
                </ul>
            </div> 
            
            <div className="flex justify-end absolute bottom-5 right-5">
                <button className="mr-4" onClick={generateArray}>Generate Array</button>
                <button className="">Sort Array</button>
            </div>
       </div>
    )
}