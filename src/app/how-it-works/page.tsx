"use client";

import Navbar from "@/components/navbar";
import { User, Stethoscope, Building2 } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto py-20 px-6">
        
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How It Works
          </h1>
          <p className="text-muted-foreground text-lg">
            A simple and structured process to connect medical professors
            with institutions for meaningful collaboration and opportunities.
          </p>
        </section>

        {/* Steps */}
        <section className="mt-20 grid md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm text-muted-foreground">Step 1</span>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Create Your Profile
            </h3>
            <p className="text-muted-foreground">
              Professors and institutions register and build detailed profiles
              showcasing qualifications, departments, and expertise.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30">
                <Stethoscope className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <span className="text-sm text-muted-foreground">Step 2</span>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Connect & Discover
            </h3>
            <p className="text-muted-foreground">
              Explore relevant institutions or professors and establish
              connections based on specialization and requirements.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                <Building2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-sm text-muted-foreground">Step 3</span>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Collaborate & Grow
            </h3>
            <p className="text-muted-foreground">
              Institutions post opportunities and professors engage with roles
              that align with their academic and clinical expertise.
            </p>
          </div>

        </section>

        {/* Extended Explanation */}
        <section className="mt-24 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Built for Simplicity and Efficiency
          </h2>
          <p className="text-muted-foreground">
            MedNetwork removes the complexity of traditional hiring and
            collaboration processes by offering a focused, professional
            platform tailored specifically for the medical academic ecosystem.
          </p>
        </section>

      </main>
    </>
  );
}