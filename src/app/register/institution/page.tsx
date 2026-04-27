"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function InstitutionRegisterPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto py-20 px-6 flex justify-center">
        
        <div className="w-full max-w-2xl p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-sm">
          
          {/* Heading */}
          <h1 className="text-3xl font-bold mb-2 text-center">
            Register as Institution
          </h1>

          <p className="text-muted-foreground text-center mb-8">
            Create your institution profile to connect with qualified professors.
          </p>

          {/* Form */}
          <form className="space-y-6">
            
            {/* Institution Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Institution Name
              </label>
              <input
                type="text"
                placeholder="Hospital / University Name"
                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Official Email
              </label>
              <input
                type="email"
                placeholder="contact@institution.com"
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

            {/* Type */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Institution Type
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option>Hospital</option>
                <option>University</option>
                <option>Medical College</option>
                <option>Research Center</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="City, Country"
                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Website (optional)
              </label>
              <input
                type="text"
                placeholder="https://example.com"
                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Submit */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
              Create Institution Account
            </Button>

          </form>

        </div>

      </main>
    </>
  );
}