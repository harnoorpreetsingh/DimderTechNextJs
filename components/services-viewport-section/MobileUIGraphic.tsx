"use client";
import { useState, useEffect } from "react";

export function MobileUIGraphic({ service }: { service: any }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Phone Mockup */}
      <div
        className="relative animate-bounce-slow"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="w-48 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 text-xs">
              <span className="font-medium">9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-4">
              {/* Title with shimmer */}
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-3/4 shadow-sm animate-shimmer bg-[length:200%_100%]" />

              {/* Subtitle with shimmer */}
              <div className="space-y-2">
                <div
                  className="h-2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-full shadow-sm animate-shimmer bg-[length:200%_100%]"
                  style={{ animationDelay: "0.1s" }}
                />
                <div
                  className="h-2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-2/3 shadow-sm animate-shimmer bg-[length:200%_100%]"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>

              {/* Cards with slide-in animation */}
              <div className="space-y-3 mt-6">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100 animate-slide-in opacity-0"
                    style={{
                      animation: mounted
                        ? `slide-in 0.6s ease-out forwards ${0.3 + i * 0.15}s`
                        : "none",
                    }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-sm animate-pulse"></div>
                    <div className="flex-1 space-y-1">
                      <div
                        className="h-2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-3/4 animate-shimmer bg-[length:200%_100%]"
                        style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                      ></div>
                      <div
                        className="h-1.5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-1/2 animate-shimmer bg-[length:200%_100%]"
                        style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                      ></div>
                    </div>
                    <div
                      className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"
                      style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
              <div className="flex justify-around">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded transition-all duration-300 shadow-sm ${
                      i === 1
                        ? "bg-gray-700 animate-pulse"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    style={{ animationDelay: i === 1 ? "0s" : undefined }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Features */}
      <div className="space-y-4">
        {service?.features?.slice(0, 3).map((feature: any, index: number) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-md animate-fade-in opacity-0"
            style={{
              animation: mounted
                ? `fade-in 0.8s ease-out forwards ${0.5 + index * 0.15}s`
                : "none",
            }}
          >
            <div className="text-gray-600">{feature.icon}</div>
            <span className="text-sm text-gray-700 font-medium">
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes slide-in {
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

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
