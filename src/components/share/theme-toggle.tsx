"use client"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu"
import { Button } from "@components/ui/button"
import { SunIcon, MoonIcon } from "lucide-react"
import { useTheme } from "next-themes"

const ThemeToggle = () => {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
          <SunIcon className="h-[1.4rem] w-[1.4rem] rotate-0 transition-all scale-100 block dark:hidden dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="h-[1.4rem] w-[1.4rem] rotate-90 transition-all hidden scale-0 dark:block dark:scale-100 dark:rotate-0" /> 
          <span className="sr-only">change theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggle