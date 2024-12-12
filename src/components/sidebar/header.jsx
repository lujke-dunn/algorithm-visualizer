import { useState } from "react"
import { motion } from "framer-motion";
import { ArrowUpNarrowWide, Search, Workflow, X, Sun, Menu } from 'lucide-react';
import HeaderCard from "./headerCard";

export default function Header({ onAlgorithmSelect, onStateChange }) {
    const [isOpen, setIsOpen] = useState(true);
  
    const handleClose = () => {
      setIsOpen(false);
      onStateChange?.(false);
    };
  
    const handleOpen = () => {
      setIsOpen(true);
      onStateChange?.(true);
    };
  
    const algorithms = {
      logarithmicSorts: ['Merge Sort', 'Quick Sort', 'Heap Sort'],
      quadraticSorts: ['Bubble Sort', 'Selection Sort', 'Insertion Sort'],
      esotericSorts: ['Bogo Sort']
    };
  
    return (
      <>
        {!isOpen && (
          <button
            onClick={handleOpen}
            className="fixed top-4 left-4 p-2 bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
        )}
  
        <motion.header
          className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50"
          animate={{ 
            height: isOpen ? 'auto' : '0px',
            opacity: isOpen ? 1 : 0
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            damping: 20,
            stiffness: 100
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Algorithm Visualizer</h2>
              
              <div className="flex items-center space-x-6">
                <HeaderCard
                  title="Logarithmic Sorts"
                  icon={<ArrowUpNarrowWide className="w-5 h-5" />}
                  isOpen={isOpen}
                  algorithms={algorithms.logarithmicSorts}
                  onAlgorithmSelect={onAlgorithmSelect}
                />
                
                <HeaderCard
                  title="Quadratic Sorts"
                  icon={<Search className="w-5 h-5" />}
                  isOpen={isOpen}
                  algorithms={algorithms.quadraticSorts}
                  onAlgorithmSelect={onAlgorithmSelect}
                />
                
                <HeaderCard
                  title="Esoteric Sorts"
                  icon={<Workflow className="w-5 h-5" />}
                  isOpen={isOpen}
                  algorithms={algorithms.esotericSorts}
                  onAlgorithmSelect={onAlgorithmSelect}
                />
                
                <Sun className="w-5 h-5 text-gray-600" />
                <X
                  className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer"
                  onClick={handleClose}
                />
              </div>
            </div>
          </div>
        </motion.header>
      </>
    );
  }