import React from 'react'

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 ">
          Discover Popular Features
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              title: "Course Management",
              image: "/course1.jpg",
              rating: 4.9,
              users: "1.5k+",
            },
            {
              title: "Student Information System",
              image: "/course2.jpg",
              rating: 4.8,
              users: "2k+",
            },
            {
              title: "Faculty Portal",
              image: "/course3.jpg",
              rating: 4.7,
              users: "1k+",
            },
          ].map((feature) => (
            <div key={feature.title} className="flex items-center justify-center flex-col rounded-lg hover:shadow-lg pt-4 bg-violet-50">
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-t-lg w-[20rem] h-[15rem] object-cover"
              />
              <div className="p-4 px-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 ">
                  <span className="flex items-center mr-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(feature.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </span>
                  {feature.rating} • {feature.users} users
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Features