/*
import BubbleSortVisualisation from "./components/visualisation/BubbleSortVisualisation"

function App() {
  return (
    <div className="w-screen h-screen">
      <BubbleSortVisualisation />
    </div>
  );
}

export default App;
*/

import Sidebar from './components/sidebar/sidebar';
import BubbleSortVisualisation from "./components/visualisation/BubbleSortVisualisation"

import { useState, useEffect } from 'react';



function App() {


  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleAlgorithmSelect = (algorithm) => {
    console.log('Algorithm selected:', algorithm);
    setSelectedAlgorithm(algorithm);
  };

  const handleSidebarStateChange = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  useEffect(() => {
    console.log('selectedAlgorithm updated:', selectedAlgorithm);
  }, [selectedAlgorithm]);

  const algorithmChooser = () => {
    console.log('Current algorithm:', selectedAlgorithm);
    switch (selectedAlgorithm) {
      case "Bubble Sort":
        return (
          <div className="w-screen h-screen">
            <BubbleSortVisualisation />
          </div>
        );
      case "Merge Sort":
        return (
          <div className="w-full">
            <h2 className="text-2xl font-bold text-gray-900">Merge Sort</h2>
            <p className="text-gray-600">Merge Sort coming soon</p>
          </div>
        );
      case "Quick Sort":
        return (
          <div className="w-full">
            <h2 className="text-2xl font-bold text-gray-900">Quick Sort</h2>
            <p className="text-gray-600">Quick Sort coming soon</p>
          </div>
        );
      default:
        return (
          <div className="w-full text-center mt-20">
            <h2 className="text-xl text-gray-600">Select an algorithm from the sidebar</h2>
          </div>
        );
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar onAlgorithmSelect={handleAlgorithmSelect} onStateChange={handleSidebarStateChange} />
      <div className='flex 1'>
        <main className={`transition-all duration-700`}>
          {algorithmChooser()}
        </main>
      </div>
    </div>
  );
}

export default App; 