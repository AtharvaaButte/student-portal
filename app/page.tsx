import FloatingIconsHeroDemo from "@/components/demos/floating-icons-hero-demo";
import { FeaturesSection } from "@/components/landing/features-section";
import { DashboardPreviewSection } from "@/components/landing/dashboard-preview-section";
import { InteractiveHighlightSection } from "@/components/landing/interactive-highlight-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { FooterSection } from "@/components/ui/footer-section";
import { Navbar1 } from "@/components/ui/navbar1";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

// Navbar Data with Scroll Links
const navbarData = {
  logo: {
    url: "/",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "Student Portal Logo",
    title: "Student Portal",
  },
  menu: [
    { title: "Home", url: "#" },
    {
      title: "Dashboard",
      url: "#dashboard",
      items: [
        {
          title: "Notices",
          description: "Latest announcements and updates",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#dashboard",
        },
        {
          title: "Events",
          description: "Upcoming campus activities",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#dashboard",
        },
        {
          title: "Assignments",
          description: "Track pending and completed work",
          icon: <Book className="size-5 shrink-0" />,
          url: "#assignments",
        },
        {
          title: "Resources",
          description: "Notes, PDFs, and study material",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#dashboard",
        },
      ],
    },
    {
      title: "Academics",
      url: "#features",
      items: [
        {
          title: "Subjects",
          description: "Subjects and syllabus overview",
          icon: <Book className="size-5 shrink-0" />,
          url: "#features",
        },
        {
          title: "Timetable",
          description: "Weekly class schedule",
          icon: <Menu className="size-5 shrink-0" />,
          url: "#features",
        },
      ],
    },
    { title: "Profile", url: "#features" },
  ],
  mobileExtraLinks: [
    { name: "Support", url: "#" },
    { name: "Contact", url: "#" },
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Sign up", url: "/signup" },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <Navbar1 {...navbarData} />
      <FloatingIconsHeroDemo />
      <div id="features"><FeaturesSection /></div>
      <div id="dashboard"><DashboardPreviewSection /></div>
      <div id="assignments"><InteractiveHighlightSection /></div>
      <BenefitsSection />
      <FooterSection />
    </main>
  );
}
