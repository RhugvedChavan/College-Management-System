const Hero = () => {
  return (
    <div className="min-h-screen pt-14">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center">
        <div className="w-1/2 pr-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stay Organized And Manage Your College Efficiently
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Streamline your college operations with our comprehensive management
            system.
          </p>
          <button 
          size="lg" 
          className="px-4 py-2 bg-violet-500 rounded-md hover:bg-violet-600 text-white"
        >
          Get Started Now
        </button>
        </div>
        <div className="w-1/2 relative h-96">
          <img src="/hero-banner.png" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
