"use client";

// @packages
import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";

// @app
import { Button } from "@/components/ui/button";

function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const handleButtonClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      className="cursor-pointer"
      onClick={handleButtonClick}
      size="icon"
      variant="outline"
    >
      {theme === "dark" ? <LucideSun /> : <LucideMoon />}
    </Button>
  );
}

export { ThemeSwitcher };
