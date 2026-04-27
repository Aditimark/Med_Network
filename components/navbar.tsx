import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <div className="text-xl font-semibold">
        MedNetwork
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm">Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          Register
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
}