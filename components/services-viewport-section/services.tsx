import {
  Globe,
  Smartphone,
  Cog,
  Package,
  Building2,
  Laptop,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Shield,
  Rocket,
  Target,
  BarChart,
  Lightbulb,
  Layers,
  Code,
  Database,
  Cloud,
  Lock,
  Gauge,
} from "lucide-react";
import { WebsiteUIGraphic } from "./WebsiteUIGraphic";
import { MobileUIGraphic } from "./MobileUIGraphic";
import { DigitalSystemsUIGraphic } from "./DigitalSystemsUIGraphic";
import MechanicalUIGraphic from "./MechanicalUIGraphic";
import ProductUIGraphic from "./ProductUIGraphic";
import ArchitectureUIGraphic from "./ArchitectureUIGraphic";

export const services = [
  {
    id: "website",
    title: "Website Development",
    subtitle: "Modern, Fast & Scalable",
    description:
      "Transform your digital presence with cutting-edge websites that convert visitors into customers. Built with the latest technologies for maximum performance and user experience.",
    icon: <Globe className="w-8 h-8" />,
    features: [
      {
        icon: <Rocket className="w-5 h-5" />,
        text: "Lightning-fast loading speeds",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        text: "Enterprise-grade security",
      },
      {
        icon: <Target className="w-5 h-5" />,
        text: "Conversion-optimized design",
      },
      { icon: <Gauge className="w-5 h-5" />, text: "99.9% uptime guarantee" },
    ],
    stats: [
      { label: "Average Speed Increase", value: "340%" },
      { label: "Conversion Rate Boost", value: "127%" },
      { label: "Client Satisfaction", value: "98%" },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
    bgGradient: "from-blue-500/20 via-cyan-400/10 to-blue-600/20",
    accentColor: "text-blue-400",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform",
    description:
      "Create powerful mobile experiences that engage users and drive business growth. From concept to app store, we deliver apps that users love and businesses depend on.",
    icon: <Smartphone className="w-8 h-8" />,
    features: [
      {
        icon: <Users className="w-5 h-5" />,
        text: "Cross-platform compatibility",
      },
      { icon: <Zap className="w-5 h-5" />, text: "Real-time synchronization" },
      {
        icon: <Lock className="w-5 h-5" />,
        text: "Advanced security features",
      },
      { icon: <BarChart className="w-5 h-5" />, text: "Built-in analytics" },
    ],
    stats: [
      { label: "App Store Rating", value: "4.8★" },
      { label: "User Retention", value: "85%" },
      { label: "Development Speed", value: "2x Faster" },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    gradient: "from-purple-500 via-pink-400 to-purple-600",
    bgGradient: "from-purple-500/20 via-pink-400/10 to-purple-600/20",
    accentColor: "text-purple-400",
  },
  {
    id: "digital",
    title: "Digital Systems",
    subtitle: "Automation & Integration",
    description:
      "Streamline your operations with intelligent digital systems that automate workflows, integrate seamlessly, and scale with your business growth.",
    icon: <Laptop className="w-8 h-8" />,
    features: [
      { icon: <Cog className="w-5 h-5" />, text: "Workflow automation" },
      { icon: <Database className="w-5 h-5" />, text: "Data integration" },
      {
        icon: <Cloud className="w-5 h-5" />,
        text: "Cloud-native architecture",
      },
      { icon: <Layers className="w-5 h-5" />, text: "API-first design" },
    ],
    stats: [
      { label: "Efficiency Increase", value: "250%" },
      { label: "Cost Reduction", value: "60%" },
      { label: "Error Reduction", value: "95%" },
    ],
    technologies: ["Node.js", "Python", "AWS", "Docker", "Kubernetes"],
    gradient: "from-emerald-500 via-teal-400 to-emerald-600",
    bgGradient: "from-emerald-500/20 via-teal-400/10 to-emerald-600/20",
    accentColor: "text-emerald-400",
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    subtitle: "Design & Prototyping",
    description:
      "Bring your physical products to life with precision engineering, rapid prototyping, and manufacturing-ready designs that meet the highest industry standards.",
    icon: <Cog className="w-8 h-8" />,
    features: [
      {
        icon: <Lightbulb className="w-5 h-5" />,
        text: "Innovative design solutions",
      },
      { icon: <Code className="w-5 h-5" />, text: "CAD modeling & simulation" },
      { icon: <Package className="w-5 h-5" />, text: "Rapid prototyping" },
      { icon: <Award className="w-5 h-5" />, text: "Quality assurance" },
    ],
    stats: [
      { label: "Design Accuracy", value: "99.7%" },
      { label: "Time to Prototype", value: "72hrs" },
      { label: "Manufacturing Ready", value: "100%" },
    ],
    technologies: ["SolidWorks", "AutoCAD", "ANSYS", "3D Printing", "CNC"],
    gradient: "from-orange-500 via-red-400 to-orange-600",
    bgGradient: "from-orange-500/20 via-red-400/10 to-orange-600/20",
    accentColor: "text-orange-400",
  },
  {
    id: "product",
    title: "Product Development",
    subtitle: "From Idea to Market",
    description:
      "Transform innovative ideas into market-ready products with our comprehensive development process, from initial concept through successful launch.",
    icon: <Package className="w-8 h-8" />,
    features: [
      {
        icon: <Target className="w-5 h-5" />,
        text: "Market research & validation",
      },
      { icon: <Rocket className="w-5 h-5" />, text: "MVP development" },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        text: "Go-to-market strategy",
      },
      { icon: <Star className="w-5 h-5" />, text: "Post-launch optimization" },
    ],
    stats: [
      { label: "Success Rate", value: "92%" },
      { label: "Time to Market", value: "40% Faster" },
      { label: "ROI Average", value: "3.2x" },
    ],
    technologies: [
      "Lean Startup",
      "Agile",
      "Design Thinking",
      "Analytics",
      "A/B Testing",
    ],
    gradient: "from-indigo-500 via-purple-400 to-indigo-600",
    bgGradient: "from-indigo-500/20 via-purple-400/10 to-indigo-600/20",
    accentColor: "text-indigo-400",
  },
  {
    id: "architecture",
    title: "Architecture Design",
    subtitle: "Spaces That Inspire",
    description:
      "Create stunning architectural designs that blend functionality with aesthetics, delivering spaces that inspire and environments that enhance human experience.",
    icon: <Building2 className="w-8 h-8" />,
    features: [
      {
        icon: <Lightbulb className="w-5 h-5" />,
        text: "Sustainable design principles",
      },
      { icon: <Layers className="w-5 h-5" />, text: "3D visualization & VR" },
      {
        icon: <Shield className="w-5 h-5" />,
        text: "Building code compliance",
      },
      { icon: <Award className="w-5 h-5" />, text: "Award-winning designs" },
    ],
    stats: [
      { label: "Projects Completed", value: "150+" },
      { label: "Client Satisfaction", value: "96%" },
      { label: "On-Time Delivery", value: "98%" },
    ],
    technologies: ["AutoCAD", "Revit", "SketchUp", "3ds Max", "Lumion"],
    gradient: "from-pink-500 via-rose-400 to-pink-600",
    bgGradient: "from-pink-500/20 via-rose-400/10 to-pink-600/20",
    accentColor: "text-pink-400",
  },
];

// Enhanced UI Graphics Components
export function ServiceUIGraphic({ service, index }: { service: any; index: number }) {
  const getServiceGraphic = () => {
    switch (service.id) {
      case "website":
        return <WebsiteUIGraphic service={service} />;
      case "mobile":
        return <MobileUIGraphic service={service} />;
      case "digital":
        return <DigitalSystemsUIGraphic service={service} />;
      case "mechanical":
        return <MechanicalUIGraphic service={service} />;
      case "product":
        return <ProductUIGraphic service={service} />;
      case "architecture":
        return <ArchitectureUIGraphic
         service={service} />;
      default:
        return <WebsiteUIGraphic service={service} />;
    }
  };

  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-white/5 rounded-3xl" />

      {/* Main UI Container */}
      <div className="relative bg-white/95 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 overflow-hidden shadow-2xl">
        {getServiceGraphic()}
      </div>
    </div>
  );
}

