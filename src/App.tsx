import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Technology } from './types'; 

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MainLayout } from './components/MainLayout';
import { Footer } from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to load technologies!');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((prevStack) => [...prevStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prevStack) => prevStack.filter((item) => item.id !== id));
    toast.info(`${itemToRemove ? itemToRemove.name : 'Item'} removed from stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error('All technologies removed from stack.');
  };

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-800 font-sans flex flex-col justify-between">
      <ToastContainer position="top-right" theme="light" autoClose={3000} />
      <div>
        <Navbar />
        <Hero />
        <MainLayout 
          technologies={technologies}
          stack={stack}
          loading={loading}
          handleAddToStack={handleAddToStack}
          handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;