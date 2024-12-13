import { useState, useEffect } from 'react';
import { Bar } from './Bar';

export const ArrayBars = ({ array, comparing, swapping }) => {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const maxValue = Math.max(...array);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth ); 
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
      <div className="flex justify-center items-end h-80 w-full">
        {array.map((height, index) => (
          <Bar 
            key={index} 
            height={(height / maxValue) * 320}
            totalBars={array.length}
            screenWidth={screenWidth}
            isComparing={comparing.includes(index)}
            isSwapping={swapping.includes(index)}
        />       
      ))}
      </div>
      <div className="flex justify-center items-end w-full text-gray-600  hidden sm:flex">
        [
        {array.map((height, index) => (
          <h2 className='pt-5 ' >{height}{index < array.length - 1 ? ", " : ''}</h2>
        )
      )}
        ]
      </div>
    </>
  );
};