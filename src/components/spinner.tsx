// @app
import { LucideLoaderCircle } from "lucide-react";

function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <LucideLoaderCircle className="h-16 w-16 animate-spin" />
    </div>
  );
}

export { Spinner };
