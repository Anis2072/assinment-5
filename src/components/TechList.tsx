import type { TechListProps } from '../types';
import { TechCard } from './TechCard';

export const TechList = ({ technologies, stack, loading, handleAddToStack }: TechListProps) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-400 font-medium">Loading technologies...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechCard 
          key={tech.id} 
          tech={tech} 
          stack={stack} 
          handleAddToStack={handleAddToStack} 
        />
      ))}
    </div>
  );
};