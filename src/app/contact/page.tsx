"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto py-20 px-6">
        
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg">
            Have questions or want to partner with us? Reach out and our team
            will get back to you shortly.
          </p>
        </section>

        {/* Contact Form */}
        <section className="mt-20 max-w-3xl mx-auto">
          
          <div className="p-8 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-sm">
            
            <form className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Submit */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3">
                Send Message
              </Button>

            </form>

          </div>

        </section>

      </main>
    </>
  );
}