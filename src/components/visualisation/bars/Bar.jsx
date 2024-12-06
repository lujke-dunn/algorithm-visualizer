import { motion } from "framer-motion";

export const Bar = ({ height, totalBars, isComparing, isSwapping }) => {
  // Calculate width percentage based on total bars
  const widthPercentage = `${100 / totalBars}%`;
  
  return (
    <div className="flex flex-col items-center" style={{ width: widthPercentage }}>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: `${height}px` }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ type: "spring" }}
        className={`w-[93%] ${
          isComparing ? 'bg-blue-500' : 
          isSwapping ? 'bg-green-500' : 
          'bg-black'
        }`}
      />
    
    </div>
  );
};