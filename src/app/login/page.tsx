"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto py-20 px-6 flex justify-center">
        
        <div className="w-full max-w-md p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-sm">
          
          <h1 className="text-3xl font-bold mb-6 text-center">
            Login
          </h1>

          <form className="space-y-5">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Submit */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
              Sign In
            </Button>

          </form>

        </div>

      </main>
    </>
  );
}