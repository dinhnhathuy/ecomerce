import ThemeToggle from "@/components/share/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5"> 
      <div className="w-full flex justify-end gap-x-5">
        <UserButton />
        <ThemeToggle />
      </div>
      <div className="font-mono text-blue-700 font-semibold text-6xl">
        Home page
      </div>
    </div>
  );
}
