import React from 'react'

const Team = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Meet our Team
        </h2>
        <div className="grid grid-cols-4 gap-8">
          {[
            {
              name: "Ravi vishwas",
              role: "CEO",
              image: "/asset3.jpg",
            },
            {
              name: "Jane Smith",
              role: "CTO",
              image: "/asset2.jpg",
            },
            {
              name: "Evan smith",
              role: "Head of Support",
              image: "/asset1.jpg",
            },
            {
              name: "Walter Brown",
              role: "Lead Developer",
              image: "/asset4.jpg",
            },
          ].map((member) => (
            <div key={member.name} className="flex flex-col items-start p-4">
              <img
                src={member.image}
                alt={member.name}
                className="h-[20rem] object-cover mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Team