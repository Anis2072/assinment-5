import { FaTrash, FaTimes } from 'react-icons/fa';
import type { SidebarProps } from '../types';

export const Sidebar = ({ stack, handleRemoveFromStack, handleRemoveAll }: SidebarProps) => {
  return (
    <aside className="bg-gray-800/80 border border-gray-700 p-6 rounded-2xl h-fit sticky top-24 shadow-xl">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700">
        <div>
          <h2 className="text-xl font-bold">Your Stack</h2>
          <p className="text-xs text-gray-400 mt-1">
            {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button 
            onClick={handleRemoveAll}
            className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1 transition bg-red-500/10 hover:bg-red-500/20 px-2.5 py-1.5 rounded-lg border border-red-500/20 cursor-pointer"
          >
            <FaTrash size={12} /> Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          <p className="text-sm">Your stack is empty.</p>
          <p className="text-xs text-gray-500 mt-1">Select technologies from the list to build your stack.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {stack.map((item) => (
            <li 
              key={item.id} 
              className="flex justify-between items-center p-3 bg-gray-900/80 rounded-xl border border-gray-700/60"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-[11px] text-gray-400">{item.category}</p>
                </div>
              </div>
              <button 
                onClick={() => handleRemoveFromStack(item.id)}
                className="text-gray-400 hover:text-red-400 p-2 transition cursor-pointer"
                title="Remove item"
              >
                <FaTimes size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};