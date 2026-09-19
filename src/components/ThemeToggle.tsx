import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle({ transparent = false }: { transparent?: boolean }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="transition-colors"
    >
      {theme === "dark" ? (
        <Sun className={cn("w-[18px] h-[18px]", transparent ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground")} />
      ) : (
        <Moon className={cn("w-[18px] h-[18px]", transparent ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground")} />
      )}
    </button>
  );
}
