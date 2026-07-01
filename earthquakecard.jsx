import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, Clock, AlertTriangle } from 'lucide-react';
import { getSeverityColor } from '../data/mockData';
import '../styles/cards.css';


const EarthquakeCard = ({ earthquake }) => {
  const { location, magnitude, depth, time, severity, region } = earthquake;

  const borderAndBgClass = getSeverityColor(severity);

  // Parse time
  const formattedTime = new Date(time).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`glass-panel eq-card p-4 rounded-xl flex justify-between items-start gap-4 severity-${severity} ${borderAndBgClass}`}
    >
       {/* Event Details */}
      <div className="space-y-3 flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider ${
            severity === 'critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
            severity === 'major' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
            severity === 'moderate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
            'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
          }`}>
            {severity}
          </span>
          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">{region}</span>
        </div>

	 {/* Location Place */}
        <h3 className="font-mono font-bold text-slate-200 text-sm tracking-wide truncate flex items-center gap-1.5">
          <MapPin size={14} className="text-cyan-500 shrink-0" />
          {location}
        </h3>

	  {/* Telemetry Stats */}
        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-900/60 font-mono text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Compass size={12} className="text-blue-400" />
            <span>DEPTH: <strong className="text-slate-200">{depth} km</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-slate-500" />
            <span className="truncate" title={formattedTime}>{formattedTime.split(',')[1] || formattedTime}</span>
          </div>
        </div>
      </div>

       {/* Magnitude Tag (Large Badge) */}
      <div className="flex flex-col items-center justify-center self-stretch w-16 bg-slate-950/40 rounded-lg border border-slate-900/80 p-2 shrink-0">
        <span className={`text-2xl font-bold font-mono tracking-tighter ${
          severity === 'critical' ? 'text-red-500' :
          severity === 'major' ? 'text-orange-400' :
          severity === 'moderate' ? 'text-yellow-400' :
          'text-cyan-400'
        }`}>
          {magnitude.toFixed(1)}
        </span>
        <span className="text-[7px] font-mono text-slate-500 uppercase tracking-[0.2em] mt-0.5">
          MAGNITUDE
        </span>
      </div>
    </motion.div>
  );
};
export default EarthquakeCard;
