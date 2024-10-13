import React from "react";
import {
  BookOpen,
  BriefcaseIcon,
  LayoutDashboard,
  Users,
} from "lucide-react";

const Category = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">
        Browse by Top Category
      </h2>
      <div className="grid grid-cols-4 gap-8">
        {[
          { icon: BookOpen, name: "Academics" },
          { icon: Users, name: "Student Affairs" },
          { icon: LayoutDashboard, name: "Administration" },
          { icon: BriefcaseIcon, name: "Career Services" },
        ].map((category) => (
          <div
            key={category.name}
            className="flex flex-col border-2 border-violet-300 rounded-xl hover:bg-violet-100 items-center p-4 hover:shadow-lg cursor-pointer"
          >
            <category.icon className="h-12 w-12 text-violet-500 mb-4" />
            <h3 className="text-lg font-medium text-neutral-900">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
