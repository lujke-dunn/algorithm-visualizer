import { ArrowUpNarrowWide, Search, Workflow, Network, X, Sun, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import SidebarCard from './sidebarCard';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function Sidebar({ onAlgorithmSelect }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleOpen = () => {
        setIsOpen(true);
    }

    const algorithms = {
        sorting: ['Bubble Sort', 'Merge Sort', 'Quick Sort'],
       
    };

    return (
        <>
            {!isOpen && (
                <button 
                    onClick={handleOpen}
                    className="fixed left-4 top-4 p-2 hover:bg-gray-100 rounded-lg"
                >
                    <Menu className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                </button>
            )}

            <motion.div 
                className='fixed left-0 top-0 h-full overflow-hidden'
                animate={{ width: isOpen ? '300px' : '0px' }}
                transition={{ 
                    duration: 0.7,
                    type: "spring",
                    damping: 20,
                    stiffness: 100
                }}
            >
                <div className="w-[300px] h-full text-gray-900 p-4 border-r border-gray-100 bg-white shadow-lg">
                    <div className='flex justify-between items-center'>
                        <div className='bg-gray-50 p-2 rounded-lg flex'>
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </div>
                        <h2 className='text-l font-bold text-gray-900'> Algorithm Visualizer </h2>
                        <X className='w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer' onClick={handleClose} />
                    </div>
                    <div className='border-b border-gray-100 my-4'></div>
                    
                    <div className="space-y-4">
                        <SidebarCard title="Sorting Algorithms" icon={<ArrowUpNarrowWide />} />
                        <ul className='ml-8 space-y-2'>
                            {algorithms.sorting.map((algo) => (
                                <li 
                                    key={algo}
                                    onClick={() => onAlgorithmSelect(algo)}
                                    className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
                                >
                                    {algo}
                                </li>
                            ))}
                        </ul>
                        <SidebarCard title="Searching Algorithms" icon={<Search />} />
                        <SidebarCard title="Graph Algorithms" icon={<Workflow />} />
                        <SidebarCard title="Tree Algorithms" icon={<Network />} />
                        <SidebarCard title="Pathfinding Algorithms" icon={<Workflow />} />
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4"> 
                        <Sun className="w-5 h-5 text-gray-600" /> 
                    </div>
                </div>
            </motion.div>
        </>
    );
}

Sidebar.propTypes = {
    onAlgorithmSelect: PropTypes.func.isRequired,
};