import type { Metadata } from "next";
import Header from "@/components/Header";
import Works from "@/components/Works";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "The Library — Traditio Media" };

export default function LibraryPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <Works />
      </main>
      <Footer />
    </>
  );
}
