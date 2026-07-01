import React from 'react';
import { Search, X } from 'lucide-react';
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full md:w-80 font-mono text-xs">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
        <Search size={14} className="group-focus-within:text-cyan-400 transition-colors" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="SEARCH LOCATION / REGION..."
        className="w-full pl-9 pr-8 py-2 bg-slate-900/60 border border-slate-800 focus:border-cyan-500/50 rounded-lg text-slate-100 placeholder-slate-500 tracking-wider outline-none transition-all duration-300 focus:shadow-glow-cyan"
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};
export default SearchBar;

