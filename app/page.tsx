import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Beliefs from "@/components/Beliefs";
import Projects from "@/components/Projects";
import Works from "@/components/Works";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Beliefs />
        <Projects />
        <Works />
      </main>
      <Footer />
    </>
  );
}
