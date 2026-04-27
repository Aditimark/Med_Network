"use client";

import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto py-20 px-6">
        
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About MedNetwork
          </h1>
          <p className="text-muted-foreground text-lg">
            MedNetwork is a professional platform designed to connect medical
            professors with leading institutions, enabling seamless academic
            collaboration and opportunity discovery.
          </p>
        </section>

        {/* Mission */}
        <section className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-muted-foreground">
            We aim to simplify how medical professionals and institutions connect,
            collaborate, and grow together. By creating a structured and trusted
            network, we help bridge the gap between academic expertise and
            institutional needs.
          </p>
        </section>

        {/* Who It's For */}
        <section className="mt-20 grid md:grid-cols-2 gap-10">
          
          {/* Professors */}
          <div className="p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold mb-3">
              For Professors
            </h3>
            <p className="text-muted-foreground">
              Showcase your academic background, research, and clinical expertise.
              Discover opportunities that align with your specialization and
              career goals.
            </p>
          </div>

          {/* Institutions */}
          <div className="p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold mb-3">
              For Institutions
            </h3>
            <p className="text-muted-foreground">
              Find qualified medical professionals, streamline recruitment, and
              build strong academic teams with confidence.
            </p>
          </div>

        </section>

      </main>
    </>
  );
}