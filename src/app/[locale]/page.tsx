import dynamic from "next/dynamic";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

// Dynamically import Contact since it's conditionally rendered
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: true,
});

const isAvailableForHire =
  process.env.NEXT_PUBLIC_AVAILABLE_FOR_HIRE === "true";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {isAvailableForHire && <Contact />}
      <Footer />
    </main>
  );
}
