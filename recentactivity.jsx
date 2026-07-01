import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert } from 'lucide-react';
import '../styles/cards.css';
const RecentActivity = ({ earthquakes = [] }) => {
  return (
    <div className="glass-panel p-4 rounded-xl border border-slate-800/80 h-full flex flex-col min-h-[500px]">
        {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <h3 className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-2 tracking-widest uppercase">
          <Terminal size={14} className="text-cyan-500 animate-pulse" />
          REALTIME SEISMIC FEED (LOGS)
        </h3>
        <span className="font-mono text-[8px] px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 rounded">
          STREAM: LIVE
        </span>
      </div>

       {/* Terminal log panel */}
      <div className="flex-1 overflow-y-auto space-y-2 activity-feed-scroll pr-1 font-mono text-[10px]">
        <AnimatePresence initial={false}>
          {earthquakes.map((eq, idx) => {
            const timeStr = new Date(eq.time).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            });
            return (
              <motion.div
                key={eq.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="p-2.5 bg-slate-950/40 rounded border border-slate-900/60 hover:border-slate-800/80 flex items-start justify-between gap-3 group transition-colors"
              >
                <div className="flex items-start gap-2.5 min-w-0">
		   {/* Alarm Light indicator */}
                  <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${
                    eq.severity === 'critical' ? 'bg-red-500 animate-ping' :
                    eq.severity === 'major' ? 'bg-orange-500 animate-pulse' :
                    eq.severity === 'moderate' ? 'bg-yellow-500' :
                    'bg-cyan-500'
                  }`} />

                  <div className="min-w-0">
                    <div className="text-slate-300 font-bold group-hover:text-cyan-400 transition-colors truncate">
                      {eq.location}
                    </div>
                    <div className="text-slate-500 text-[9px] mt-0.5 space-x-2">
                      <span>MAG: <strong className="text-slate-300">{eq.magnitude.toFixed(1)} Mw</strong></span>
                      <span>DEPTH: <strong className="text-slate-300">{eq.depth} km</strong></span>
                    </div>
                  </div>
                </div>
                <span className="text-slate-500 text-[9px] shrink-0 font-bold">
                  {timeStr}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {earthquakes.length === 0 && (
          <div className="h-48 flex flex-col items-center justify-center text-slate-600 gap-2 border border-dashed border-slate-900 rounded-lg">
            <ShieldAlert size={20} className="text-slate-700" />
            <span className="text-[9px] tracking-widest uppercase">
              NO CORRELATION ALERTS IN BUFFER
            </span>
          </div>
        )}
      </div>

       {/* Terminal Footer */}
      <div className="mt-3 pt-2 border-t border-slate-900/80 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>LOGS_CAP: 100/100</span>
        <span className="animate-pulse">SYS_MONITOR: SECURE</span>
      </div>
    </div>
  );
};
export default RecentActivity;
