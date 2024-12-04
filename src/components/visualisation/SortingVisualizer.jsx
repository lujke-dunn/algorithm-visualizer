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
        const newArray = Array.from({ length: 10 }, () => 
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
            speed: 500
        });
        setIsSorting(false);
        setComparing([]);
        setSwapping([]);
    };

    return (
        <div className="p-8 max-w-4xl mx-auto space-y-8 relative min-h-[600px]">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

            <ArrayBars array={array} comparing={comparing} swapping={swapping} />
            
            {isSorting && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-blue-600 font-medium"
                >
                    {swapping.length > 0 ? 
                        `Swapping elements at indices: ${swapping.join(' and ')}` :
                        `Comparing elements at indices: ${comparing.join(' and ')}`}
                </motion.div>
            )}

            <div className="absolute bottom-0 right-0 flex gap-4">
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
    );
};