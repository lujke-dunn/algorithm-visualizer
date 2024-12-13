import { useState } from "react"
import { motion } from "framer-motion";
import { ArrowUpNarrowWide, Search, Workflow, X, Sun, Menu } from 'lucide-react';
import HeaderCard from "./headerCard";

export default function Header({ onAlgorithmSelect, onStateChange }) {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const handleClose = () => {
      setIsOpen(false);
      onStateChange?.(false);
    };
  
    const handleOpen = () => {
      setIsOpen(true);
      onStateChange?.(true);
    };

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
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
            className="fixed top-4 left-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
          >
            <Menu className="w-6 h-6 text-blue-500" />
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
            <div className="flex flex-row items-center justify-between w-full">
              <h2 className="text-xl font-bold text-gray-900">Algorithm Visualizer</h2>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6">
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
                  className="w-6 h-6 text-gray-600  cursor-pointer"
                  onClick={handleClose}
                />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <Sun className="w-5 h-5 text-gray-600" />
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                >
                  <Menu className="w-6 h-6 text-blue-500" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4">
                <nav className="space-y-4">
                  <div className="border-t pt-4">
                    <div className="space-y-4">
                      <MobileMenuItem
                        title="Logarithmic Sorts"
                        icon={<ArrowUpNarrowWide className="w-5 h-5" />}
                        algorithms={algorithms.logarithmicSorts}
                        onAlgorithmSelect={(algo) => {
                          onAlgorithmSelect(algo);
                          setIsMobileMenuOpen(false);
                        }}
                      />
                      <MobileMenuItem
                        title="Quadratic Sorts"
                        icon={<Search className="w-5 h-5" />}
                        algorithms={algorithms.quadraticSorts}
                        onAlgorithmSelect={(algo) => {
                          onAlgorithmSelect(algo);
                          setIsMobileMenuOpen(false);
                        }}
                      />
                      <MobileMenuItem
                        title="Esoteric Sorts"
                        icon={<Workflow className="w-5 h-5" />}
                        algorithms={algorithms.esotericSorts}
                        onAlgorithmSelect={(algo) => {
                          onAlgorithmSelect(algo);
                          setIsMobileMenuOpen(false);
                        }}
                      />
                    </div>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </motion.header>
      </>
    );
}

// Mobile Menu Item Component
function MobileMenuItem({ title, icon, algorithms, onAlgorithmSelect }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center w-full p-2 text-left rounded-lg bg-gray-100 hover:bg-gray-200"
      >
        <span className="text-blue-500 mr-2">{icon}</span>
        <span className="font-medium text-gray-900">{title}</span>
      </button>
      
      {isExpanded && (
        <div className="pl-8 space-y-2">
          {algorithms.map((algo) => (
            <button
              key={algo}
              onClick={() => onAlgorithmSelect(algo)}
              className="block w-full p-2 text-left text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {algo}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}