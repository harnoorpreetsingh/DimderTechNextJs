"use client";

import { Package, Target } from "lucide-react";
import { useState, useEffect } from "react";

const MechanicalUIGraphic = ({ service }: { service: any }) => {
  const [mounted, setMounted] = useState(false);
  const [activeControl, setActiveControl] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-6">
      {/* 3D Model Viewer */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">
            3D Model Viewer
          </h4>
          <div className="flex space-x-2">
            {[0, 1].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  i === 0 ? "bg-gray-500 animate-pulse" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3D Viewport */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-40 flex items-center justify-center relative overflow-hidden shadow-inner">
          {/* 3D Model with rotation */}
          <div className="relative w-24 h-24 animate-rotate-3d" style={{
            animation: mounted ? "rotate-3d 8s linear infinite" : "none",
          }}>
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-xl relative">
              <div className="absolute inset-2 bg-gradient-to-br from-gray-500 to-gray-700 rounded shadow-inner"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer-fast bg-[length:200%_100%]"></div>
              </div>
            </div>
          </div>

          {/* Grid Background - animated */}
          <div className="absolute inset-0 opacity-10 pointer-events-none animate-grid-shift">
            <div
              className="w-full h-full bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M0 0h20v1H0zM0 0v20h1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {["Rotate", "Zoom", "Pan"].map((tool, index) => (
              <button
                key={tool}
                onClick={() => setActiveControl(index)}
                className={`px-3 py-1 text-xs rounded shadow-sm border transition-all duration-300 transform hover:scale-105 ${
                  activeControl === index
                    ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white border-gray-800 shadow-lg"
                    : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
          <div className="text-xs text-gray-500 font-mono animate-pulse">Precision: 0.01mm</div>
        </div>
      </div>

      {/* Specifications */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300 animate-fade-in opacity-0" style={{
          animation: mounted ? "fade-in 0.8s ease-out forwards 0.2s" : "none",
        }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Tolerance</span>
            <Target className="w-4 h-4 text-blue-500 animate-bounce-slow" />
          </div>
          <div className="text-2xl font-bold text-gray-800 font-mono tracking-tight">±0.01mm</div>
          <div className="text-xs text-gray-500 mt-1 animate-pulse">Industry Leading</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300 animate-fade-in opacity-0" style={{
          animation: mounted ? "fade-in 0.8s ease-out forwards 0.35s" : "none",
        }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Material</span>
            <Package className="w-4 h-4 text-emerald-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
          </div>
          <div className="text-lg font-bold text-gray-800 font-mono">Titanium</div>
          <div className="text-xs text-gray-500 mt-1 animate-pulse" style={{ animationDelay: "0.1s" }}>Grade 5</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        @keyframes shimmer-fast {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
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
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-rotate-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .animate-shimmer-fast {
          animation: shimmer-fast 1.5s infinite;
        }

        .animate-grid-shift {
          animation: grid-shift 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default MechanicalUIGraphic;