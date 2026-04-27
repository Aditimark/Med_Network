"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto py-20 px-6">
        
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pricing
          </h1>
          <p className="text-muted-foreground text-lg">
            Simple and transparent pricing designed for both medical
            professionals and institutions.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="mt-20 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Professor Plan */}
          <div className="p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-sm">
            
            <h3 className="text-2xl font-semibold mb-2">
              For Professors
            </h3>

            <p className="text-muted-foreground mb-6">
              Build your professional profile and explore opportunities.
            </p>

            <div className="text-4xl font-bold mb-6">
              Free
            </div>

            <ul className="space-y-3 text-muted-foreground mb-8">
              <li>• Create and manage profile</li>
              <li>• Showcase academic expertise</li>
              <li>• Discover institutions</li>
              <li>• Apply to opportunities</li>
            </ul>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              Get Started
            </Button>
          </div>

          {/* Institution Plan */}
          <div className="p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-sm relative">
            
            {/* Badge */}
            <div className="absolute top-4 right-4 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
              Popular
            </div>

            <h3 className="text-2xl font-semibold mb-2">
              For Institutions
            </h3>

            <p className="text-muted-foreground mb-6">
              Find and recruit qualified medical professionals efficiently.
            </p>

            <div className="text-4xl font-bold mb-6">
              Contact Us
            </div>

            <ul className="space-y-3 text-muted-foreground mb-8">
              <li>• Post opportunities</li>
              <li>• Access professor profiles</li>
              <li>• Manage recruitment</li>
              <li>• Dedicated support</li>
            </ul>

            <Button
              variant="outline"
              className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              Contact Sales
            </Button>
          </div>

        </section>

        {/* Note */}
        <section className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Custom enterprise solutions available for large institutions.
          </p>
        </section>

      </main>
    </>
  );
}