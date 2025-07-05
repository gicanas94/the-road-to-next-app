// @packages
import Link from "next/link";

// @app
import { Heading } from "@/components/heading";
import { ticketsPath } from "@/paths";

function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <Heading description="Your place to start" title="Home" />
      <div className="flex flex-1 flex-col items-center">
        <Link className="underline" href={ticketsPath()}>
          Go to tickets
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
