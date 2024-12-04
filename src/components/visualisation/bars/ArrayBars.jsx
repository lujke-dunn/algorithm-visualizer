import { Bar } from './Bar';

export const ArrayBars = ({ array, comparing, swapping }) => {
  return (
    <div className="flex justify-center items-end h-80 mt-16">
      {array.map((height, index) => (
        <Bar 
          key={index} 
          height={height} 
          isComparing={comparing.includes(index)}
          isSwapping={swapping.includes(index)}
        />
      ))}
    </div>
  );
};