import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Flame, Eye, Globe } from 'lucide-react';

const StatsPanel = ({ earthquakes = [] }) => {
// Calculations
  const totalCount = earthquakes.length;
  
  const highestMag = totalCount > 0 
    ? Math.max(...earthquakes.map(eq => eq.magnitude)).toFixed(1)
    : '0.0';
  const avgDepth = totalCount > 0
    ? Math.round(earthquakes.reduce((sum, eq) => sum + eq.depth, 0) / totalCount)
    : 0;
  const activeRegions = new Set(earthquakes.map(eq => eq.region)).size;
  const statItems = [
    {
      id: 'total',
      label: 'TOTAL EVENTS',
      value: totalCount,
      icon: ShieldAlert,
      glowColor: 'shadow-glow-cyan border-cyan-500/30 text-cyan-400',
      description: 'Active seismic tracking'
     },
    {
      id: 'max-mag',
      label: 'MAX MAGNITUDE',
      value: `${highestMag} Mw`,
      icon: Flame,
      glowColor: 'shadow-glow-red border-red-500/30 text-red-400',
      description: 'Peak tectonic energy release'
    },
    {
      id: 'avg-depth',
      label: 'AVERAGE DEPTH',
      value: `${avgDepth} km`,
      icon: Eye,
      glowColor: 'shadow-glow-blue border-blue-500/30 text-blue-400',
      description: 'Crustal hypocenter mean'
    },
    {
      id: 'regions',
      label: 'ACTIVE REGIONS',
      value: activeRegions,
      icon: Globe,
      glowColor: 'shadow-glow-cyan border-cyan-500/30 text-cyan-400',
      description: 'Geographic zones monitored'
    }
  ];
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {statItems.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className={`glass-panel p-4 rounded-xl border flex flex-col justify-between h-32 hover:scale-[1.02] transition-transform duration-200 ${item.glowColor}`}
          >
	    {/* Header */}
            <div className="flex justify-between items-start">
              <span className="font-mono text-xs text-slate-400 tracking-widest">{item.label}</span>
              <Icon size={18} />
            </div>
	   
	     {/* Content */}
            <div className="mt-2">
              <span className="text-3xl font-mono font-bold tracking-tight block">
                {item.value}
              </span>
              <span className="text-[10px] font-mono text-slate-500 block uppercase mt-1">
                {item.description}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
export default StatsPanel;
