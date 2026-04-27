"use client";

import Navbar from "@/components/navbar";
import { User, Building2 } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto py-20 px-6 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Join MedNetwork
        </h1>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose how you want to get started on the platform.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          
          {/* Professor */}
          <Link
            href="/register/professor"
            className="p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center">
              
              <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-4">
                <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Join as Professor
              </h3>

              <p className="text-muted-foreground text-sm">
                Build your academic profile and explore opportunities.
              </p>

            </div>
          </Link>

          {/* Institution */}
          <Link
            href="/register/institution"
            className="p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center">
              
              <div className="p-4 rounded-xl bg-teal-100 dark:bg-teal-900/30 mb-4">
                <Building2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Join as Institution
              </h3>

              <p className="text-muted-foreground text-sm">
                Recruit and connect with qualified medical professionals.
              </p>

            </div>
          </Link>

        </div>

      </main>
    </>
  );
}