import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-white/20 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-semibold">
          MedNetwork
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-sm hover:text-blue-600 transition-colors">
            Login
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
            Register
          </button>

          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}