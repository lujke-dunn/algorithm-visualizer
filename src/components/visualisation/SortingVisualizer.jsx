import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrayBars } from './bars/ArrayBars';

export const SortingVisualizer = ({ 
  title, 
  sortingFunction,
  sortingSpeed,
  setSpeed
}) => {
    const [array, setArray] = useState([]);
    const [comparing, setComparing] = useState([]);
    const [swapping, setSwapping] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
   

    const generateArray = () => {
        const newArray = Array.from({ length: 40 }, () => 
            Math.floor(Math.random() * 50) + 1
        );
        setArray(newArray);
        setComparing([]);
        setSwapping([]);
    };

    useEffect(() => {
        generateArray();
    }, []);

    const handleSort = async () => {
        setIsSorting(true);
        await sortingFunction(array, {
            setArray,
            setComparing,
            setSwapping,
            speed: sortingSpeed
        });
        setIsSorting(false);
        setComparing([]);
        setSwapping([]);
    };

    return (
        <div className="w-full h-full ">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

            <div className="w-full h-full flex flex-col items-center justify-center">
                <ArrayBars array={array} comparing={comparing} swapping={swapping} />
        
                <div className="flex gap-4 mt-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={generateArray}
                        disabled={isSorting}
                    >
                        New Array
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSort}
                        disabled={isSorting}
                    >
                        Sort
                    </motion.button>
                    <input 
                        type="range" 
                        min="1" 
                        max="100" 
                        value={sortingSpeed} 
                        onChange={(e) => setSpeed(parseInt(e.target.value))}
                    />
                    <p className="text-gray-900">{sortingSpeed}x</p>
                </div>
            </div>
        </div>
    );
};