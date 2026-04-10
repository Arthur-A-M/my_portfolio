import { ScrollProgress } from "../components/ScrollProgress";
import { Hero } from "../components/Hero";
import { Capabilities } from "../components/Capabilities";
import { FeaturedWork } from "../components/FeaturedWork";
import { Skills } from "../components/Skills";
import { Certifications } from "../components/Certifications";
import { HowIWork } from "../components/HowIWork";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <div className="dark">
      <ScrollProgress />
      <div className="h-[100dvh] snap-y snap-proximity overflow-y-auto scroll-smooth">
        <Hero />
        <Capabilities />
        <FeaturedWork />
        <Skills />
        <Certifications />
        <HowIWork />
        <Contact />
      </div>
    </div>
  );
}
