"use client";
import { Award, Building2 } from "lucide-react";
import { useState, useEffect } from "react";

const ArchitectureUIGraphic = ({ service }: { service: any }) => {
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeView, setActiveView] = useState(1);

  useEffect(() => {
    setMounted(true);

    // Animate projects count
    const projectsInterval = setInterval(() => {
      setProjects((prev) => {
        const target = 150;
        if (prev >= target) {
          clearInterval(projectsInterval);
          return target;
        }
        return prev + Math.random() * 12 + 6;
      });
    }, 40);

    // Animate satisfaction
    const satisfactionInterval = setInterval(() => {
      setSatisfaction((prev) => {
        const target = 96;
        if (prev >= target) {
          clearInterval(satisfactionInterval);
          return target;
        }
        return prev + Math.random() * 6 + 3;
      });
    }, 50);

    return () => {
      clearInterval(projectsInterval);
      clearInterval(satisfactionInterval);
    };
  }, []);

  const projectsPercent = Math.min((projects / 150) * 100, 100);
  const satisfactionPercent = Math.min((satisfaction / 100) * 100, 96);

  return (
    <div className="space-y-6">
      {/* Enhanced Blueprint Viewer */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">
            Blueprint Viewer
          </h4>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div
              className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>

        {/* Blueprint Canvas */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg h-40 flex items-center justify-center relative overflow-hidden shadow-inner border border-blue-200">
          {/* Grid Background - animated */}
          <div className="absolute inset-0 opacity-20 animate-grid-shift">
            <div
              className="w-full h-full bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.2'%3E%3Cpath d='M0 0h20v1H0zM0 0v20h1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Building Structure - with animations */}
          <div
            className="relative animate-building-enter opacity-0"
            style={{
              animation: mounted
                ? "building-enter 0.8s ease-out forwards"
                : "none",
            }}
          >
            {/* Foundation */}
            <div className="w-32 h-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-sm shadow-md animate-pulse"></div>

            {/* Walls */}
            <div className="w-28 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-t-sm mx-auto -mt-1 shadow-lg relative hover:shadow-xl transition-shadow duration-300">
              {/* Windows */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-300 rounded-sm shadow-inner animate-window-glow"></div>
              <div
                className="absolute top-2 right-2 w-4 h-4 bg-yellow-300 rounded-sm shadow-inner animate-window-glow"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-yellow-200 rounded-sm shadow-inner animate-window-glow"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>

            {/* Roof */}
            <div className="w-32 h-8 bg-gradient-to-r from-blue-600 to-blue-700 transform -skew-y-12 -mt-2 shadow-lg animate-roof-glow"></div>
          </div>
        </div>

        {/* Enhanced Tools */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {["2D", "3D", "VR"].map((view, index) => (
              <button
                key={view}
                onClick={() => setActiveView(index)}
                className={`px-3 py-1 text-xs rounded shadow-sm border transition-all duration-300 transform hover:scale-105 ${
                  activeView === index
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-800 shadow-lg"
                    : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
                }`}
              >
                {view}
              </button>
            ))}
          </div>
          <div className="text-xs text-gray-500 font-mono animate-pulse">
            Scale: 1:100
          </div>
        </div>
      </div>

      {/* Enhanced Project Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div
          className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in opacity-0"
          style={{
            animation: mounted ? "fade-in 0.8s ease-out forwards 0.3s" : "none",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Projects</span>
            <Building2 className="w-4 h-4 text-blue-500 animate-bounce-slow" />
          </div>
          <div className="text-2xl font-bold text-gray-800 font-mono tracking-tight">
            {Math.floor(projects)}+
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full shadow-lg transition-all duration-300 ease-out"
              style={{ width: `${projectsPercent}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-2">Completed</div>
        </div>

        <div
          className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in opacity-0"
          style={{
            animation: mounted ? "fade-in 0.8s ease-out forwards 0.45s" : "none",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">
              Satisfaction
            </span>
            <Award className="w-4 h-4 text-yellow-500 animate-spin-slow" />
          </div>
          <div className="text-2xl font-bold text-gray-800 font-mono tracking-tight">
            {Math.floor(satisfaction)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full shadow-lg transition-all duration-300 ease-out"
              style={{ width: `${satisfactionPercent}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-2">Client Rating</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes building-enter {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes window-glow {
          0%,
          100% {
            box-shadow: inset 0 0 8px rgba(253, 224, 71, 0.6);
          }
          50% {
            box-shadow: inset 0 0 16px rgba(253, 224, 71, 0.9);
          }
        }

        @keyframes roof-glow {
          0%,
          100% {
            filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8));
          }
        }

        @keyframes grid-shift {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-building-enter {
          animation: building-enter 0.8s ease-out forwards;
        }

        .animate-window-glow {
          animation: window-glow 1.5s ease-in-out infinite;
        }

        .animate-roof-glow {
          animation: roof-glow 2s ease-in-out infinite;
        }

        .animate-grid-shift {
          animation: grid-shift 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ArchitectureUIGraphic;
