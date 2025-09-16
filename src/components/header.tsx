// @packages
import Link from "next/link";

// @app
import { ThemeSwitcher } from "./theme/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import { homePath, ticketsPath } from "@/paths";

function Header() {
  return (
    <header className="bg-background/95 sticky top-0 flex w-full items-center justify-between border-b p-4">
      <span className="text-lg font-bold">The Road to Next app</span>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <nav className="flex gap-4">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={homePath()}
          >
            Home
          </Link>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={ticketsPath()}
          >
            Tickets
          </Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
