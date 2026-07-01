import React from 'react';
import { motion } from 'framer-motion';
const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-cyan-400 font-mono">
      <div className="relative w-24 h-24 mb-6">
	  {/* Outer Hexagon Ring */}
        <motion.div
          className="absolute inset-0 border-2 border-dashed border-cyan-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
	 {/* Inner Solid Scanning Ring */}
        <motion.div
          className="absolute inset-2 border-t-2 border-r-2 border-red-500 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
	{/* Pulse Dot in Center */}
        <motion.div
          className="absolute inset-8 bg-cyan-400 rounded-full"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="text-center">
        <motion.h3
          className="text-sm uppercase tracking-[0.25em] text-cyan-300 font-bold mb-1"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Connecting to Seismic Feed...
        </motion.h3>
        <span className="text-xs text-slate-500">SYS_CHECK: OK // DEPTH_INDEXING: SYNCED</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
