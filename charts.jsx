import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Legend
} from 'recharts';
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-950/90 border border-cyan-500/50 backdrop-blur-md p-3 rounded-lg font-mono text-xs shadow-glow-cyan text-slate-100">
        {label && <p className="font-bold text-cyan-400 mb-1">{label}</p>}
        {payload.map((pld, index) => (
          <p key={index} style={{ color: pld.color }}>
            {pld.name}: <span className="font-bold">{pld.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};
const Charts = ({ earthquakes = [] }) => {
  // 1. Data for Magnitude Bar Chart (top 7 latest earthquakes for display)
  const barData = earthquakes
    .slice(0, 7)
    .map(eq => ({
      name: eq.location.split(',')[0],
      Magnitude: eq.magnitude,
      Depth: eq.depth
    }));

  // 2. Data for Region Distribution Pie Chart
  const regionCounts = earthquakes.reduce((acc, eq) => {
    acc[eq.region] = (acc[eq.region] || 0) + 1;
    return acc;
  }, {});
  const pieData = Object.keys(regionCounts).map(region => ({
    name: region,
    value: regionCounts[region]
  }));
  const COLORS = ['#06b6d4', '#3b82f6', '#ef4444', '#f59e0b', '#10b981'];

  // 3. Data for Line Chart (chronological activity)
  const lineData = [...earthquakes]
    .sort((a, b) => new Date(a.time) - new Date(b.time))
    .map(eq => ({
      time: new Date(eq.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      Magnitude: eq.magnitude,
      Depth: eq.depth,
      Location: eq.location
    }));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
       {/* Line Chart - Tectonic Activity Trend */}
      <div className="glass-panel p-4 rounded-xl border border-slate-800/80 md:col-span-2">
        <h3 className="font-mono text-sm text-cyan-400 font-bold mb-4 tracking-wider uppercase">
          TECTONIC FREQUENCY &amp; FLUX (LINE)
        </h3>
        <div className="h-64 w-full">
          {lineData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(51, 65, 85, 0.2)" />
                <XAxis dataKey="time" stroke="#64748b" tick={{ fill: '#64748b', fontSize: 10, fontFamily: 'monospace' }} />
                <YAxis domain={[0, 9]} stroke="#64748b" tick={{ fill: '#64748b', fontSize: 10, fontFamily: 'monospace' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: 10 }} />
                <Line
                  type="monotone"
                  dataKey="Magnitude"
                  stroke="#ef4444"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                  name="Magnitude (Mw)"
		  dot={{ r: 3, fill: '#ef4444' }}
                />
                <Line
                  type="monotone"
                  dataKey="Depth"
                  stroke="#06b6d4"
                  strokeWidth={1.5}
                  name="Depth (km)"
                  dot={{ r: 2, fill: '#06b6d4' }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-500 font-mono text-sm">NO DATA IN MONITORING RANGE</div>
          )}
        </div>
      </div>

      {/* Bar Chart - Magnitude Comparisons */}
      <div className="glass-panel p-4 rounded-xl border border-slate-800/80">
        <h3 className="font-mono text-sm text-cyan-400 font-bold mb-4 tracking-wider uppercase">
          SEISMIC INTENSITY COMPARATOR (BAR)
        </h3>
        <div className="h-64 w-full">
          {barData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(51, 65, 85, 0.2)" />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#64748b', fontSize: 9, fontFamily: 'monospace' }} />
                <YAxis domain={[0, 9]} stroke="#64748b" tick={{ fill: '#64748b', fontSize: 10, fontFamily: 'monospace' }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="Magnitude" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Magnitude (Mw)">
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.Magnitude > 6.0 ? '#ef4444' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-500 font-mono text-sm">NO DATA IN MONITORING RANGE</div>
          )}
        </div>
      </div>

      {/* Pie Chart - Regional Distribution */}
      <div className="glass-panel p-4 rounded-xl border border-slate-800/80">
        <h3 className="font-mono text-sm text-cyan-400 font-bold mb-4 tracking-wider uppercase">
          ZONE DISTRIBUTOR (PIE)
        </h3>
        <div className="h-64 w-full flex items-center justify-center">
          {pieData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: 9 }} layout="vertical" align="right" verticalAlign="middle" />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-500 font-mono text-sm">NO DATA IN MONITORING RANGE</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Charts;	
