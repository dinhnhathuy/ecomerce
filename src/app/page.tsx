import ThemeToggle from "@/components/share/theme-toggle";

export default function Home() {
  return (
    <div className="p-5"> 
      <div className="w-full flex justify-end">
        <ThemeToggle />
      </div>
      <div className="font-mono text-blue-700 font-semibold text-6xl">
        first time check
      </div>
    </div>
  );
}
