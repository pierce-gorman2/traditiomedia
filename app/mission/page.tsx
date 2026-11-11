import type { Metadata } from "next";
import Header from "@/components/Header";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Our Mission — Traditio Media" };

export default function MissionPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <Mission />
      </main>
      <Footer />
    </>
  );
}
