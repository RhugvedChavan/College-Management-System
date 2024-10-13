import React from 'react'

const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 rounded-xl sm:px-6 lg:px-8 py-12">
    <div className="bg-violet-100 p-9 flex items-center">
      <div className="w-2/3 pr-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to transform your college management?
        </h2>
        <p className="text-gray-600 mb-6">
          Join thousands of institutions already using EduManage to
          streamline their operations.
        </p>
        <button 
          size="lg" 
          className="px-4 py-2 bg-violet-500 rounded-md hover:bg-violet-600 text-white"
        >
          Get Started Now
        </button>
      </div>
      <div className="w-1/3 relative h-64">
        <img
          className=' rounded-xl'
          src="/cta.jpg"
          alt="College student with laptop"
        />
      </div>
    </div>
  </section>
  )
}

export default CTA