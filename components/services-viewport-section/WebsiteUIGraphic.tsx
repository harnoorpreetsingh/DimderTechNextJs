// import { Activity, Gauge } from "lucide-react";

// export function WebsiteUIGraphic({ service }: { service: any }) {
//   return (
//     <div className="space-y-6">
//       {/* Browser Window */}
//       <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl">
//         {/* Top bar */}
//         <div className="flex items-center space-x-2 px-4 py-3 bg-gray-200">
//           <div className="w-3 h-3 bg-gray-500 rounded-full" />
//           <div className="w-3 h-3 bg-gray-600 rounded-full" />
//           <div className="w-3 h-3 bg-gray-700 rounded-full" />
//           <div className="flex-1 bg-white rounded px-3 py-1 ml-4 shadow-inner">
//             <span className="text-xs text-gray-600">
//               https://yourwebsite.com
//             </span>
//           </div>
//           <div className="flex space-x-1">
//             <div className="w-4 h-4 bg-gray-300 rounded" />
//             <div className="w-4 h-4 bg-gray-300 rounded" />
//           </div>
//         </div>

//         {/* Page Content */}
//         <div className="p-6 bg-gradient-to-br from-white to-gray-50 min-h-[200px]">
//           <div className="space-y-4">
//             {/* Title shimmer → replaced with subtle fade */}
//             <div
//               className="h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded w-3/4 shadow-sm"
//               style={{ willChange: "opacity" }}
//             />

//             {/* Static placeholders (no infinite pulse) */}
//             <div className="h-3 bg-gray-300 rounded w-full shadow-sm" />
//             <div className="h-3 bg-gray-300 rounded w-2/3 shadow-sm" />

//             {/* Cards with hover animation only */}
//             <div className="grid grid-cols-3 gap-4 mt-6">
//               {[0, 1, 2].map((i) => (
//                 <div
//                   key={i}
//                   className="h-16 bg-gradient-to-br from-gray-200 to-gray-100 rounded shadow-md"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Performance Metrics */}
//       <div className="grid grid-cols-2 gap-4">
//         {/* Speed Score */}
//         <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-xs text-gray-600 font-medium">
//               Speed Score
//             </span>
//             <Gauge className="w-4 h-4 text-gray-600" />
//           </div>
//           <div className="text-2xl font-bold text-gray-800">98/100</div>
//           <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
//             <div className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm" />
//           </div>
//         </div>

//         {/* Uptime */}
//         <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-xs text-gray-600 font-medium">Uptime</span>
//             <Activity className="w-4 h-4 text-gray-600" />
//           </div>
//           <div className="text-2xl font-bold text-gray-800">99.9%</div>
//           <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
//             <div
//               className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
//               style={{ willChange: "width" }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Activity, Gauge } from "lucide-react";
import { useState, useEffect } from "react";

export function WebsiteUIGraphic({ service }: { service: any }) {
  const [speedScore, setSpeedScore] = useState(0);
  const [uptime, setUptime] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Animate speed score
    const speedInterval = setInterval(() => {
      setSpeedScore((prev) => {
        const target = 98;
        if (prev >= target) {
          clearInterval(speedInterval);
          return target;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 50);

    // Animate uptime
    const uptimeInterval = setInterval(() => {
      setUptime((prev) => {
        const target = 99.9;
        if (prev >= target) {
          clearInterval(uptimeInterval);
          return target;
        }
        return prev + Math.random() * 6 + 1.5;
      });
    }, 60);

    return () => {
      clearInterval(speedInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const speedPercent = Math.min((speedScore / 100) * 100, 98);
  const uptimePercent = Math.min(((uptime / 100) * 100) / 1.01, 99.9);

  return (
    <div className="space-y-6">
      {/* Browser Window */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl">
        {/* Top bar */}
        <div className="flex items-center space-x-2 px-4 py-3 bg-gray-200">
          <div className="w-3 h-3 bg-gray-500 rounded-full" />
          <div className="w-3 h-3 bg-gray-600 rounded-full" />
          <div className="w-3 h-3 bg-gray-700 rounded-full" />
          <div className="flex-1 bg-white rounded px-3 py-1 ml-4 shadow-inner">
            <span className="text-xs text-gray-600">
              https://yourwebsite.com
            </span>
          </div>
          <div className="flex space-x-1">
            <div className="w-4 h-4 bg-gray-300 rounded" />
            <div className="w-4 h-4 bg-gray-300 rounded" />
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6 bg-gradient-to-br from-white to-gray-50 min-h-[200px]">
          <div className="space-y-4">
            {/* Title with shimmer */}
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-3/4 shadow-sm animate-shimmer bg-[length:200%_100%]" />

            {/* Subtitle with shimmer */}
            <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-full shadow-sm animate-shimmer bg-[length:200%_100%]" />
            <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-2/3 shadow-sm animate-shimmer bg-[length:200%_100%]" />

            {/* Cards with shimmer */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-16 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded shadow-md animate-shimmer bg-[length:200%_100%]"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-2 gap-4">
        {/* Speed Score */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">
              Speed Score
            </span>
            <Gauge className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800 font-mono tracking-tight">
            {Math.floor(speedScore)}/100
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3 shadow-inner overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full shadow-lg transition-all duration-300 ease-out"
              style={{ width: `${speedPercent}%` }}
            />
          </div>
        </div>

        {/* Uptime */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Uptime</span>
            <Activity className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800 font-mono tracking-tight">
            {uptime.toFixed(1)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3 shadow-inner overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full shadow-lg transition-all duration-300 ease-out"
              style={{ width: `${uptimePercent}%` }}
            />
          </div>
        </div>
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

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}