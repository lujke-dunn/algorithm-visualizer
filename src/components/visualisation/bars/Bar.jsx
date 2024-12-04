import { motion } from "framer-motion";




export const Bar = ({ height, isComparing, isSwapping }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: height * 5 }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ type: "spring" }}
        className={`w-8 mx-1 ${
          isComparing ? 'bg-blue-500' : 
          isSwapping ? 'bg-green-500' : 
          'bg-black'
        }`}
      />
      <div className="mt-2 text-center text-black">{height}</div>
    </div>
  );
};