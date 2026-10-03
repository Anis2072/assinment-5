import { TechListProps, SidebarProps } from '../types';
import { TechList } from './TechList';
import { Sidebar } from './Sidebar';

interface MainLayoutProps extends TechListProps, SidebarProps {}

export const MainLayout = ({ 
  technologies, 
  stack, 
  loading, 
  handleAddToStack, 
  handleRemoveFromStack, 
  handleRemoveAll 
}: MainLayoutProps) => {
  return (
    <section id="technologies" className="max-w-7xl mx-auto px-6 py-10">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Technology List Grid */}
        <div className="lg:w-3/4">
          <TechList 
            technologies={technologies} 
            stack={stack} 
            loading={loading} 
            handleAddToStack={handleAddToStack} 
          />
        </div>

        {/* Selected Stack Sidebar */}
        <div className="lg:w-1/4">
          <Sidebar 
            stack={stack} 
            handleRemoveFromStack={handleRemoveFromStack} 
            handleRemoveAll={handleRemoveAll} 
          />
        </div>
      </div>
    </section>
  );
};