import React from 'react';
import {
  LayoutDashboard,
  BarChart3,
  SlidersHorizontal,
  Settings,
  ChevronLeft,
  ChevronRight,
  Activity
} from 'lucide-react';
import '../styles/sidebar.css';
const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'filters', label: 'Filters', icon: SlidersHorizontal },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];
  
   return (
    <aside 
      className={`sidebar-container shrink-0 flex flex-col h-screen select-none ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
       {/* Sidebar Header Brand */}
      <div className="h-16 flex items-center justify-between px-5 border-b border-slate-800/80">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="p-2 bg-cyan-950 border border-cyan-500/30 rounded-lg text-cyan-400">
            <Activity size={18} className="animate-pulse" />
          </div>
          {sidebarOpen && (
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-cyan-400 whitespace-nowrap">
              E-MONITOR
            </span>
          )}
        </div>
	
	 {/* Toggle Button */}
        {sidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-6 space-y-2 px-3">
        {!sidebarOpen && (
          <div className="flex justify-center mb-6">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`sidebar-item w-full flex items-center gap-4 py-3 px-4 rounded-lg font-mono text-sm tracking-wider text-slate-400 hover:text-slate-100 ${
                isActive ? 'active' : ''
              }`}
            >
              <Icon size={18} className={isActive ? 'text-cyan-400' : 'text-slate-400'} />
              {sidebarOpen && <span className="transition-opacity duration-300">{item.label}</span>}
            </button>
          );
	 })}
      </nav>

      {/* System Status Indicators at bottom */}
      <div className="p-4 border-t border-slate-800/80 font-mono text-[10px]">
        {sidebarOpen ? (
          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-500">FEED_STATUS:</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                ACTIVE
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">SYSTEM_MODE:</span>
              <span className="text-cyan-400">TELEMETRY</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">UPTIME:</span>
              <span className="text-slate-300">99.98%</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-2">
            <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-glow-cyan" title="Feed Active"></div>
            <span className="text-[8px] text-slate-500">99.9%</span>
          </div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;
