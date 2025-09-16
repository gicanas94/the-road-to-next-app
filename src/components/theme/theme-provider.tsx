// @packages
import { ThemeProvider as BaseThemeProvider } from "next-themes";

// @types
type ThemeProviderProps = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BaseThemeProvider>
  );
}

export { ThemeProvider };
