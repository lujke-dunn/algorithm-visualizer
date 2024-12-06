import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrayBars } from './bars/ArrayBars';

export const SortingVisualizer = ({ 
  title, 
  sortingFunction,
  description 
}) => {
    const [array, setArray] = useState([]);
    const [comparing, setComparing] = useState([]);
    const [swapping, setSwapping] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    const generateArray = () => {
        const newArray = Array.from({ length: 20 }, () => 
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
            speed: 1
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
                </div>
            </div>
        </div>
    );
};