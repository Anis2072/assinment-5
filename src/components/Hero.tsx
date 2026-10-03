export const Hero = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15] mb-6">
          Build Your Ideal <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>
        
        <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="#technologies"
            className="brand-gradient text-white px-6 py-3 rounded-lg font-medium text-sm shadow-md hover:opacity-95 transition cursor-pointer"
          >
            Explore Technologies
          </a>
          <a 
            href="#about"
            className="bg-white border border-gray-200 text-gray-600 px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-50 transition"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img 
          src="https://i.ibb.co/6y4b2L7/dev-stack-3d.png" 
          alt="Development Stack Illustration" 
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
};