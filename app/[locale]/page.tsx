import Navbar from "@/components/Navbar";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import TechnologySection from "@/components/TechnologySection";
import WorkflowSection from "@/components/WorkflowSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";

import Footer from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <HeroSection
        locale={locale}
      />

      <AboutSection
        locale={locale}
      />

      <SolutionsSection
        locale={locale}
      />

      <TechnologySection
        locale={locale}
      />

      <WorkflowSection
        locale={locale}
      />

      <PartnersSection
        locale={locale}
      />

      <ContactSection
        locale={locale}
      />

      <Footer
        locale={locale}
      />
    </main>
  );
}