import { Atom, BookAIcon, BookOpen, Cloud, Users } from "lucide-react";

export default function Promotion() {
  return (
    <div className="bg-pink-50 p-8 rounded-3xl max-w-6xl mx-auto my-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-300 rounded-full opacity-20"></div>
      </div>
      <div className="relative z-10 flex gap-40">
        <div className="w-1/2 pr-8">
          <span className="text-orange-500 font-semibold mb-2 inline-block">
            What's New
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Master the skills to drive your career
          </h2>
          <p className="text-gray-600 mb-6">
            Education is the most powerful weapon which you can use to change
            the world. Leadership is not about a title or a designation. It's
            about impact, influence inspiration.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <FeatureItem
              icon={Atom}
              text="Build skills your way, from labs to courses"
            />
            <FeatureItem
              icon={BookOpen}
              text="Get certified with 100+ courses"
            />
            <FeatureItem
              icon={Cloud}
              text="Keep up with in the latest in cloud"
            />
            <FeatureItem
              icon={Users}
              text="Stay motivated with engaging instructors"
            />
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-2 z-20">
            <div className="flex items-center">
              <BookAIcon />
              <span className="font-semibold">1236+ Online Students</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-2 z-20">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="font-semibold">Your Admission Complete</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-violet-300 rounded-full transform translate-x-1/4"></div>
          <img
            src="/promo.png"
            alt="Student with book"
            width={300}
            height={400}
            className="relative z-10 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center">
      <Icon className="w-5 h-5 text-blue-500 mr-2" />
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
}
