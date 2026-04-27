import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Connecting Medical Professionals & Institutions
        </h1>
      </section>
    </main>
  );
}