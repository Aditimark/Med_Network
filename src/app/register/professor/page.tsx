"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function ProfessorRegisterPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto py-20 px-6 flex justify-center">
        
        <div className="w-full max-w-2xl p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-sm">
          
          {/* Heading */}
          <h1 className="text-3xl font-bold mb-2 text-center">
            Register as Professor
          </h1>

          <p className="text-muted-foreground text-center mb-8">
            Create your professional profile to connect with institutions.
          </p>

          {/* Form */}
          <form className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Dr. John Doe"
                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Specialization */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Specialization
              </label>
              <input
                type="text"
                placeholder="Cardiology, Neurology, etc."
                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Years of Experience
              </label>
              <input
                type="number"
                placeholder="e.g. 10"
                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Institution */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Current Institution
              </label>
              <input
                type="text"
                placeholder="Hospital / University"
                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Submit */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
              Create Account
            </Button>

          </form>

        </div>

      </main>
    </>
  );
}