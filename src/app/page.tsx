"use client";

import { motion } from "framer-motion";
import Navbar from  "@/components/navbar";
import { Button } from "@/components/ui/button";
import { User, Building2, Stethoscope } from "lucide-react";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto py-20 px-6 text-center">
  {/* Hero Section */}
  <section className="flex flex-col items-center justify-center space-y-8 relative">
  
  {/* Subtle background glow for hero */}
  <div className="absolute inset-0 -z-10 flex justify-center">
    <div className="w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
  </div>

  {/* Headline */}
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl"
  >
    Connecting{" "}
    <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
      Medical Professors
    </span>{" "}
    with Leading Institutions
  </motion.h1>

  {/* Subheading */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="text-muted-foreground max-w-2xl text-lg"
  >
    A professional network designed to streamline academic collaboration,
    institutional hiring, and medical knowledge exchange.
  </motion.p>

</section>
{/* Trusted By Section */}
<section className="mt-20 text-center overflow-hidden">
  
  {/* Heading */}
  <p className="text-sm text-muted-foreground mb-8">
    Trusted by leading medical institutions
  </p>

  {/* Marquee */}
  <div className="relative w-full overflow-hidden">
    
    <div className="flex gap-16 animate-marquee whitespace-nowrap">
      
      {[
        "AIIMS",
        "Apollo Hospitals",
        "Manipal Hospitals",
        "Fortis Healthcare",
        "Medanta",
        "Narayana Health",
      ].map((item, i) => (
        <div
          key={i}
          className="text-lg font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default"
        >
          {item}
        </div>
      ))}

      {/* Duplicate for seamless loop */}
      {[
        "AIIMS",
        "Apollo Hospitals",
        "Manipal Hospitals",
        "Fortis Healthcare",
        "Medanta",
        "Narayana Health",
      ].map((item, i) => (
        <div
          key={`dup-${i}`}
          className="text-lg font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default"
        >
          {item}
        </div>
      ))}

    </div>

  </div>

</section>
  {/* How It Works Preview */}
<section className="mt-24 relative">
  
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 flex justify-center">
    <div className="w-[600px] h-[600px] bg-teal-500/10 blur-3xl rounded-full" />
  </div>

  {/* Section Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold">
      How It Works
    </h2>
    <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
      A streamlined process designed for academic and institutional collaboration
    </p>
  </div>

  {/* Cards */}
<div className="grid md:grid-cols-3 gap-8">
  
  {/* Card 1 */}
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ duration: 0.25 }}
    className="p-6 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-lg shadow-sm hover:shadow-lg"
  >
    <div className="flex items-start gap-4">
  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
    <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
  </div>

  <div>
    <h3 className="text-xl font-semibold mb-1">
      Create a Professional Profile
    </h3>
    <p className="text-muted-foreground">
      Professors and institutions build verified profiles showcasing their
      expertise, departments, and opportunities.
    </p>
  </div>
</div>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ duration: 0.25 }}
    className="p-6 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-lg shadow-sm hover:shadow-lg"
  >
    <div className="flex items-start gap-4">
  <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-900/30">
    <Stethoscope className="w-5 h-5 text-teal-600 dark:text-teal-400" />
  </div>

  <div>
    <h3 className="text-xl font-semibold mb-1">
      Connect & Collaborate
    </h3>
    <p className="text-muted-foreground">
      Discover relevant institutions or professors and establish meaningful
      academic connections.
    </p>
  </div>
</div>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ duration: 0.25 }}
    className="p-6 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-lg shadow-sm hover:shadow-lg"
  >
    <div className="flex items-start gap-4">
  <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
    <Building2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
  </div>

  <div>
    <h3 className="text-xl font-semibold mb-1">
      Explore Opportunities
    </h3>
    <p className="text-muted-foreground">
      Institutions post roles and professors find positions aligned with their
      specialization.
    </p>
  </div>
</div>
  </motion.div>

</div>
</section>
{/* CTA Section */}
<section className="mt-28 relative">
  
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 flex justify-center">
    <div className="w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full" />
  </div>

  <div className="max-w-5xl mx-auto px-6">
    
    <div className="rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl p-10 md:p-14 text-center shadow-sm">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Join the Future of Medical Collaboration
      </h2>

      {/* Subtext */}
      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        Whether you're a professor seeking the right institution or an organization
        looking for top academic talent, MedNetwork helps you connect efficiently.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
          Join as Professor
        </Button>

        <Button
          variant="outline"
          className="px-6 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
        >
          Join as Institution
        </Button>

      </div>

    </div>

  </div>

</section>
{/* Footer */}
<footer className="mt-28 border-t border-white/20 dark:border-white/10">
  
  <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-sm">
    
    {/* Brand */}
    <div>
      <h3 className="text-lg font-semibold mb-3">MedNetwork</h3>
      <p className="text-muted-foreground">
        Connecting medical professors and institutions through a modern
        professional network.
      </p>
    </div>

    {/* Navigation */}
    <div>
      <h4 className="font-semibold mb-3">Platform</h4>
      <ul className="space-y-2 text-muted-foreground">
        <li className="hover:text-foreground transition-colors cursor-pointer">
          About
        </li>
        <li className="hover:text-foreground transition-colors cursor-pointer">
          How it Works
        </li>
        <li className="hover:text-foreground transition-colors cursor-pointer">
          Pricing
        </li>
        <li className="hover:text-foreground transition-colors cursor-pointer">
          Contact
        </li>
      </ul>
    </div>

    {/* Actions */}
    <div>
      <h4 className="font-semibold mb-3">Get Started</h4>
      <ul className="space-y-2 text-muted-foreground">
        <li className="hover:text-foreground transition-colors cursor-pointer">
          Join as Professor
        </li>
        <li className="hover:text-foreground transition-colors cursor-pointer">
          Join as Institution
        </li>
        <li className="hover:text-foreground transition-colors cursor-pointer">
          Login
        </li>
      </ul>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/10 dark:border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
      
      <p>© {new Date().getFullYear()} MedNetwork. All rights reserved.</p>

      <div className="flex gap-6">
        <span className="hover:text-foreground cursor-pointer transition-colors">
          Privacy Policy
        </span>
        <span className="hover:text-foreground cursor-pointer transition-colors">
          Terms of Service
        </span>
      </div>

    </div>
  </div>

</footer>

</main>
    </>
  );
}