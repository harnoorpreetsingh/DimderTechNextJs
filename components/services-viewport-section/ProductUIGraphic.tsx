"use client";

import { Lightbulb, Star, Target, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const ProductUIGraphic = ({ service }: { service: any }) => {
  const [successRate, setSuccessRate] = useState(0);
  const [roi, setRoi] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Animate success rate
    const successInterval = setInterval(() => {
      setSuccessRate((prev) => {
        const target = 92;
        if (prev >= target) {
          clearInterval(successInterval);
          return target;
        }
        return prev + Math.random() * 6 + 3;
      });
    }, 50);

    // Animate ROI
    const roiInterval = setInterval(() => {
      setRoi((prev) => {
        const target = 3.2;
        if (prev >= target) {
          clearInterval(roiInterval);
          return target;
        }
        return prev + Math.random() * 0.25 + 0.1;
      });
    }, 60);

    return () => {
      clearInterval(successInterval);
      clearInterval(roiInterval);
    };
  }, []);

  const successPercent = Math.min((successRate / 100) * 100, 92);
  const roiPercent = Math.min(((roi / 3.2) * 100) / 1.08, 100);

  return (
    <div className="space-y-6">
      {/* Development Pipeline */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">
          Development Pipeline
        </h4>
        <div className="space-y-4">
          {["Ideation", "Validation", "MVP", "Launch"].map((stage, index) => (
            <div
              key={stage}
              className="flex items-center space-x-4 animate-slide-in-left opacity-0"
              style={{
                animation: mounted
                  ? `slide-in-left 0.6s ease-out forwards ${index * 0.15}s`
                  : "none",
              }}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-500 ${
                  index <= 2
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white animate-pulse"
                    : "bg-gradient-to-r from-amber-400 to-amber-600 text-white animate-bounce-slow"
                }`}
              >
                {index <= 2 ? (
                  <Lightbulb className="w-4 h-4" />
                ) : (
                  <Target className="w-4 h-4" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">{stage}</span>
                  <span
                    className={`text-xs font-semibold transition-all ${
                      index <= 2
                        ? "text-blue-600 animate-pulse"
                        : "text-amber-600 animate-pulse"
                    }`}
                  >
                    {index <= 2 ? "✓ Complete" : "In Progress"}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner overflow-hidden">
                  <div
                    className={`h-2 rounded-full shadow-sm transition-all duration-700 ease-out ${
                      index <= 2
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 w-full"
                        : "bg-gradient-to-r from-amber-400 to-amber-600"
                    }`}
                    style={{
                      width: index <= 2 ? "100%" : `${(index - 2) * 50}%`,
                      animation:
                        index > 2 && mounted
                          ? "progress-fill 2s ease-in-out infinite"
                          : "none",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div
          className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in opacity-0"
          style={{
            animation: mounted ? "fade-in 0.8s ease-out forwards 0.6s" : "none",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">
              Success Rate
            </span>
            <Star className="w-4 h-4 text-yellow-500 animate-spin-slow" />
          </div>
          <div className="text-2xl font-bold text-gray-800 font-mono tracking-tight">
            {Math.floor(successRate)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3 shadow-inner overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full shadow-lg transition-all duration-300 ease-out"
              style={{ width: `${successPercent}%` }}
            />
          </div>
        </div>

        <div
          className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in opacity-0"
          style={{
            animation: mounted
              ? "fade-in 0.8s ease-out forwards 0.75s"
              : "none",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">
              ROI Average
            </span>
            <TrendingUp className="w-4 h-4 text-emerald-500 animate-bounce-fast" />
          </div>
          <div className="text-2xl font-bold text-gray-800 font-mono tracking-tight">
            {roi.toFixed(1)}x
          </div>
          <div className="text-xs text-gray-500 mt-1 animate-pulse">
            Return on Investment
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes progress-fill {
          0%,
          100% {
            width: 0%;
          }
          50% {
            width: 50%;
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

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes bounce-fast {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-bounce-fast {
          animation: bounce-fast 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductUIGraphic;
