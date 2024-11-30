import Sidebar from './components/sidebar/sidebar';
import { useState } from 'react';

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  const handleAlgorithmSelect = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar onAlgorithmSelect={handleAlgorithmSelect} />
      <main className="flex-1 p-8 ml-[300px]">
        {selectedAlgorithm ? (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedAlgorithm}</h1>
            <p className="text-gray-900">Visualization for {selectedAlgorithm} will be implemented here.</p>
          </div>
        ) : (
          <div className="text-center text-gray-900  mt-20">
            <h2 className="text-xl">Select an algorithm from the sidebar to begin</h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;