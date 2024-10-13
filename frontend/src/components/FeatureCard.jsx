import React from "react";

const FeatureCard = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex space-x-8">
      <div className="w-1/2 bg-violet-100 rounded-xl hover:shadow-lg hover:bg-violet-200">
        <div className="p-6">
          <h3 className="text-xl font-bold text-neutral-800 mb-2 ">
            Streamline College Operations
          </h3>
          <p className="text-gray-600">
            Efficiently manage all aspects of your college with our integrated
            system.
          </p>
          <button variant="link" className="mt-4 p-0">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-yellow-100 rounded-xl hover:shadow-lg hover:bg-yellow-200">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Enhance Student Experience
          </h3>
          <p className="text-gray-600">
            Provide a seamless digital experience for your students from
            enrollment to graduation.
          </p>
          <button variant="link" className="mt-4 p-0">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
