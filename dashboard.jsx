import React from 'react';
const Dashboard = ({
  navbar,
  sidebar,
  stats,
  charts,
  filters,
  searchBar,
  cards,
  activity,
  isLoading,
  activeTab
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 cyber-grid flex">
      {/* Scanline overlay for CRT look */}
      <div className="scanlines" />
     
      {/* Sidebar Panel */}
      {sidebar}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        {/* Navbar */}
        {navbar}

          {/* Dash Content Wrapper */}
        <main className="p-4 md:p-6 lg:p-8 space-y-6 overflow-y-auto max-w-[1600px] mx-auto w-full">
          {isLoading ? (
            <div className="flex items-center justify-center min-h-[50vh]">
	      {/* Spinner */}
              <div className="text-cyan-400 font-mono animate-pulse">SYSTEM CORRELATION IN PROGRESS...</div>
            </div>
          ) : (
            <>
              {activeTab === 'dashboard' && (
                <>
		  {/* Stats Summary Panel */}
                  {stats}

		    {/* Primary Data Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left & Middle Column: Filters, Search, Cards Grid */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <h2 className="text-lg font-mono font-bold tracking-wider text-cyan-400 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                            SEISMIC TELEMETRY STREAM
                          </h2>
                          {searchBar}
                        </div>
                        {filters}
                      </div>

		      {/* Earthquake cards container */}
                      {cards}
                    </div>

		    {/* Right Column: Live Feed / Activity */}
                    <div className="lg:col-span-1 space-y-6">
                      {activity}
                    </div>
                  </div>
                </>
              )}
              
	      {activeTab === 'analytics' && (
                <div className="space-y-6">
                   {/* Full size analytics views */}
                  <div className="glass-panel p-6 rounded-xl border border-slate-800">
                    <h2 className="text-xl font-mono font-bold text-cyan-400 mb-6 tracking-widest border-b border-cyan-920 pb-2">
                      ANALYTICAL TELEMETRY DECK
                    </h2>
                    {charts}
                  </div>
                </div>
              )}

	       {activeTab === 'filters' && (
                 <div className="max-w-2xl mx-auto glass-panel p-6 rounded-xl border border-slate-800">
                  <h2 className="text-xl font-mono font-bold text-cyan-400 mb-6 tracking-widest border-b border-slate-800 pb-2">
                    FILTER TUNING MATRIX
                  </h2>
                  <div className="space-y-6">
                    <p className="text-slate-400 font-mono text-sm leading-relaxed">
                      Calibrate the seismograph feeds to filter out noise, industrial tremors, and minor tectonic adjustments.
                    </p>
                    {filters}
                  </div>
                </div>
              )}

	       {activeTab === 'settings' && (
		 <div className="max-w-2xl mx-auto glass-panel p-6 rounded-xl border border-slate-800 font-mono">
                  <h2 className="text-xl font-bold text-cyan-400 mb-6 tracking-widest border-b border-slate-800 pb-2">
                    MONITOR SYSTEM CONTROL
                  </h2>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between  items-center py-3 border-b border-slate-800">
                      <div>
                        <p className="text-slate-300 font-bold">LIVE TELEMETRY AUTO-REFRESH</p>
                        <p className="text-xs text-slate-500">Syncs feed with USGS stream every 30 seconds</p>
          
		                             </div>
                      <span className="px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-500 rounded text-xs">ENABLED</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-800">
                      <div>
                        <p className="text-slate-300 font-bold">CRITICAL MAGNITUDE ALARM</p>
                        <p className="text-xs text-slate-500">Audio visual flash alarm for events &gt; 6.5 mag</p>
                      </div>
                      <span className="px-3 py-1 bg-red-950 text-red-400 border border-red-500 rounded text-xs">ENABLED</span>
            </div>
                    <div className="flex justify-between items-center py-3">
                      <div>
                        <p className="text-slate-300 font-bold">API CONDUIT SYSTEM</p>
                        <p className="text-xs text-slate-500">USGS GeoJSON live API connection</p>
                      </div>
		                             <span className="px-3 py-1 bg-slate-800 text-slate-400 rounded text-xs">MOCK_CONNECTED</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};
export default Dashboard;

