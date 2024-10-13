import React from "react";
import {
    GraduationCap,
    LayoutDashboard,
    LifeBuoy,
  } from "lucide-react";

const WCU = () => {
  return (
    <section className="max-w-7xl mx-auto flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {[
          {
            icon: LayoutDashboard,
            title: "Intuitive Dashboard",
            description:
              "Easy-to-use interface for all college management needs.",
          },
          {
            icon: GraduationCap,
            title: "Comprehensive Solution",
            description:
              "All-in-one platform for academic and administrative tasks.",
          },
          {
            icon: LifeBuoy,
            title: "24/7 Support",
            description:
              "Round-the-clock assistance for all your queries and concerns.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center p-6 border-2 border-violet-200 hover:bg-violet-100 rounded-xl cursor-pointer"
          >
            <feature.icon className="h-12 w-12 text-violet-500 mb-4" />
            <h3 className="text-lg font-medium text-neutral-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-neutral-600 text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WCU;
