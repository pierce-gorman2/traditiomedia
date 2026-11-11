import type { Metadata } from "next";
import Header from "@/components/Header";
import Beliefs from "@/components/Beliefs";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "What We Believe — Traditio Media" };

export default function BeliefsPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <Beliefs />
      </main>
      <Footer />
    </>
  );
}
