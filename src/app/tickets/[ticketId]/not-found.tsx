// @packages
import Link from "next/link";

// @app
import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/placeholder";
import { ticketsPath } from "@/paths";

function NotFound() {
  return (
    <Placeholder
      button={
        <Button asChild variant="outline">
          <Link href={ticketsPath()}>Go back</Link>
        </Button>
      }
      label="Ticket not found"
    />
  );
}

export default NotFound;
