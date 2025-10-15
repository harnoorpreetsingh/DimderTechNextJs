"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { services, ServiceUIGraphic } from "./services";
import { ArrowRight } from "lucide-react";

const ServicesViewportSection = () => {
  // const [activeService, setActiveService] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  // // Intersection observer for section visibility
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const index = serviceRefs.current.findIndex(
  //             (ref) => ref === entry.target
  //           );
  //           if (index !== -1) {
  //             setActiveService(index);
  //           }
  //         }
  //       });
  //     },
  //     { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
  //   );

  //   serviceRefs.current.forEach((ref) => {
  //     if (ref) observer.observe(ref);
  //   });

  //   return () => observer.disconnect();
  // }, []);

  const handleNavigateToProjects = () => {
    router.push("/projects");
  };

  const scrollToService = (index: number) => {
    serviceRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 opacity-5" />
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* Dot Navigation - Left Side */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => scrollToService(index)}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300`}
            >
              {/* Tooltip */}
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-white/20">
                  {service.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-300">
              Premium Services
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">Services That </span>
            <span className="text-white font-light italic">Transform</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to accelerate your business growth
            and digital transformation
          </p>
        </div>

        <div className="relative">
          {/* Services Content */}
          <div className="lg:space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  serviceRefs.current[index] = el;
                }}
                className="min-h-[60vh] flex items-center"
              >
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  <div
                    data-aos="fade-up"
                    className={`space-y-8 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div>
                      <div
                        className={`inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r ${service.bgGradient} rounded-full border border-white/10 mb-6`}
                      >
                        <div className={service.accentColor}>
                          {service.icon}
                        </div>
                        <span
                          className={`text-sm font-medium ${service.accentColor}`}
                        >
                          {service.subtitle}
                        </span>
                      </div>

                      <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <div className={service.accentColor}>
                            {feature.icon}
                          </div>
                          <span className="text-gray-300">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow Navigation */}
                    {index === services.length - 1 && (
                      <div className="flex items-center space-x-4 pt-8">
                        <button
                          onClick={handleNavigateToProjects}
                          className="group flex items-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full transition-all duration-300"
                        >
                          <span className="text-white font-medium">
                            View Our Projects
                          </span>
                          <div>
                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Enhanced UI Graphics */}
                  <div  data-aos="fade-down" className="max-lg:!hidden">
                    <div>
                      <ServiceUIGraphic service={service} index={index} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesViewportSection;
