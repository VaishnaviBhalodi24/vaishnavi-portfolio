import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Experience } from "@/components/experience/experience";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/skills/skills";
import { Leadership } from "@/components/leadership/leadership";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
    </>
  );
}
