import { useState, useRef, useEffect } from "react";

export default function HeaderCard({ title, icon, isOpen, algorithms, onAlgorithmSelect }) {
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
      setIsHovered(true)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false)
      }, 500); 
    };

    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    })

    return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        <span className="text-blue-400">{icon}</span>
        <span className="font-medium text-gray-500">{title}</span>
      </div>
      
      {isHovered && isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg p-2 min-w-48 z-50">
          <ul className="space-y-2">
            {algorithms.map((algo) => (
              <li
                key={algo}
                onClick={() => onAlgorithmSelect(algo)}
                className="text-gray-600 hover:text-gray-900 cursor-pointer p-2 rounded hover:bg-gray-50"
              >
                {algo}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    )
}