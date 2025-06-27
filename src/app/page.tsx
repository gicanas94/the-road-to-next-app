// @packages
import Link from "next/link";

// @app
import { ticketsPath } from "@/paths";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold">Home</h2>
        <p className="text-sm">Your place to start</p>
      </div>
      <div className="flex flex-1 flex-col items-center">
        <Link className="underline" href={ticketsPath()}>
          Go to tickets
        </Link>
      </div>
    </div>
  );
}
