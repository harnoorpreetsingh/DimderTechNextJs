"use client";

import {
  ArrowRight,
  Cloud,
  Cog,
  Database,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";

export function DigitalSystemsUIGraphic({ service }: { service: any }) {
  const [efficiency, setEfficiency] = useState(0);
  const [automation, setAutomation] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Animate efficiency
    const efficiencyInterval = setInterval(() => {
      setEfficiency((prev) => {
        const target = 250;
        if (prev >= target) {
          clearInterval(efficiencyInterval);
          return target;
        }
        return prev + Math.random() * 20 + 10;
      });
    }, 40);

    // Animate automation
    const automationInterval = setInterval(() => {
      setAutomation((prev) => {
        const target = 95;
        if (prev >= target) {
          clearInterval(automationInterval);
          return target;
        }
        return prev + Math.random() * 8 + 3;
      });
    }, 50);

    return () => {
      clearInterval(efficiencyInterval);
      clearInterval(automationInterval);
    };
  }, []);

  const efficiencyPercent = Math.min((efficiency / 250) * 100, 100);
  const automationPercent = Math.min((automation / 100) * 100, 95);

  return (
    <div className="space-y-6">
      {/* System Architecture */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="grid grid-cols-3 gap-4">
          {/* Data Sources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Data Sources
            </h4>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded shadow-md flex items-center justify-center animate-slide-in-left opacity-0"
                style={{
                  animation: mounted
                    ? `slide-in-left 0.6s ease-out forwards ${0.1 + i * 0.1}s`
                    : "none",
                }}
              >
                <Database
                  className="w-4 h-4 text-white animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              </div>
            ))}
          </div>

          {/* Processing */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Processing
            </h4>
            <div
              className="h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded shadow-lg flex items-center justify-center animate-scale-in opacity-0"
              style={{
                animation: mounted
                  ? "scale-in 0.8s ease-out forwards 0.3s"
                  : "none",
              }}
            >
              <div>
                <Cog className="w-8 h-8 text-white animate-spin" />
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Outputs
            </h4>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-8 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded shadow-md flex items-center justify-center animate-slide-in-right opacity-0"
                style={{
                  animation: mounted
                    ? `slide-in-right 0.6s ease-out forwards ${0.4 + i * 0.1}s`
                    : "none",
                }}
              >
                <Cloud
                  className="w-4 h-4 text-white animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow Arrows */}
        <div className="flex justify-center items-center mt-6 space-x-12">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="animate-pulse opacity-0"
              style={{
                animation: mounted
                  ? `pulse 2s ease-in-out infinite ${0.6 + i * 0.3}s`
                  : "none",
              }}
            >
              <ArrowRight className="w-5 h-5 text-blue-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Performance Dashboard */}
      <div className="grid grid-cols-2 gap-4">
        <div
          className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md animate-fade-in opacity-0"
          style={{
            animation: mounted ? "fade-in 0.8s ease-out forwards 0.7s" : "none",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">
              Efficiency
            </span>
            <TrendingUp className="w-4 h-4 text-blue-500 animate-bounce-fast" />
          </div>
          <div className="text-2xl font-bold text-gray-800 font-mono tracking-tight">
            +{Math.floor(efficiency)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3 shadow-inner overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full shadow-lg transition-all duration-300 ease-out"
              style={{ width: `${efficiencyPercent}%` }}
            />
          </div>
        </div>

        <div
          className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md animate-fade-in opacity-0"
          style={{
            animation: mounted
              ? "fade-in 0.8s ease-out forwards 0.85s"
              : "none",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">
              Automation
            </span>
            <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
          </div>
          <div className="text-2xl font-bold text-gray-800 font-mono tracking-tight">
            {Math.floor(automation)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3 shadow-inner overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full shadow-lg transition-all duration-300 ease-out"
              style={{ width: `${automationPercent}%` }}
            />
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

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-fast {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-bounce-fast {
          animation: bounce-fast 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
