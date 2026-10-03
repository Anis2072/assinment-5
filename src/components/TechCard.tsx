import { FaStar } from 'react-icons/fa';
import { TechCardProps } from '../types';

export const TechCard = ({ tech, stack, handleAddToStack }: TechCardProps) => {
  const isAdded = stack.some((item) => item.id === tech.id);

  return (
    <div className="p-6 bg-gray-800/50 border border-gray-700/60 rounded-2xl flex flex-col justify-between hover:border-gray-600 transition shadow-sm relative overflow-hidden">
      <div>
        {/* Category & Badge */}
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-700/80 text-orange-400">
            {tech.category}
          </span>
          {tech.badge && (
            <span className="brand-gradient text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              {tech.badge}
            </span>
          )}
        </div>

        {/* Title & Icon */}
        <div className="flex items-center gap-3 mb-2">
          <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          <h3 className="text-xl font-bold">{tech.name}</h3>
        </div>

        {/* Rating & Difficulty */}
        <div className="flex items-center gap-3 text-xs mb-3">
          <div className="flex items-center gap-1 text-yellow-400 font-semibold">
            <FaStar />
            <span className="text-gray-200">{tech.rating}</span>
          </div>
          <span className="text-gray-400 border border-gray-700 px-2 py-0.5 rounded">
            {tech.difficulty}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3">{tech.description}</p>
      </div>

      {/* Button */}
      <button 
        onClick={() => handleAddToStack(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-xl font-semibold transition cursor-pointer ${
          isAdded 
            ? 'bg-gray-700/60 text-gray-400 cursor-not-allowed border border-gray-600' 
            : 'brand-gradient text-white hover:opacity-90 shadow-md'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};