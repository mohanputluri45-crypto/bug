import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatsPanel from './components/StatsPanel';
import Charts from './components/Charts';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';

// Import CSS
import './styles/dashboard.css';
import './styles/sidebar.css';

// Mock Data
import { mockEarthquakes } from './data/mockData';

// Component Imports
import EarthquakeCard from './components/EarthquakeCard';
import RecentActivity from './components/RecentActivity';

function App() {
  // App-level Navigation and View state
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [minMagnitude, setMinMagnitude] = useState(0);
  const [maxDepth, setMaxDepth] = useState(300);
  const [regionFilter, setRegionFilter] = useState('All');

  // Simulate dashboard initialization/sensor calibration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleResetFilters = () => {
    setSearchTerm('');
    setMinMagnitude(0);
    setMaxDepth(300);
    setRegionFilter('All');
  };
  
  // Filter Data
  const filteredEarthquakes = mockEarthquakes.filter((eq) => {
    const matchesSearch = eq.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          eq.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMagnitude = eq.magnitude >= minMagnitude;
    const matchesDepth = eq.depth <= maxDepth;
    const matchesRegion = regionFilter === 'All' || eq.region === regionFilter;

    return matchesSearch && matchesMagnitude && matchesDepth && matchesRegion;
  });

  const earthquakeCards = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredEarthquakes.map((eq) => (
        <EarthquakeCard key={eq.id} earthquake={eq} />
      ))}
      {filteredEarthquakes.length === 0 && (
        <div className="col-span-2 text-center py-10 font-mono text-slate-500 text-xs tracking-wider border border-dashed border-slate-900 rounded-lg">
          --- SEISMIC FEED IS SILENT FOR CURRENT METRIC CALIBRATION ---
        </div>
      )}
    </div>
  );

  return (
    <Dashboard
      activeTab={activeTab}
      isLoading={isLoading}
      navbar={
        <Navbar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          alertCount={filteredEarthquakes.filter(e => e.severity === 'critical').length} 
        />
      }
      sidebar={
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />
      }
      stats={<StatsPanel earthquakes={filteredEarthquakes} />}
      charts={<Charts earthquakes={filteredEarthquakes} />}
      filters={
        <Filters 
          minMagnitude={minMagnitude} 
          setMinMagnitude={setMinMagnitude} 
          maxDepth={maxDepth} 
          setMaxDepth={setMaxDepth} 
          regionFilter={regionFilter} 
          setRegionFilter={setRegionFilter} 
          onReset={handleResetFilters} 
        />
      }
      searchBar={<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      cards={earthquakeCards}
      activity={<RecentActivity earthquakes={filteredEarthquakes} />}
    />
  );
}

export default App;
