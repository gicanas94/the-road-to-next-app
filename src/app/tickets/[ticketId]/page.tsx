// @packages
import Link from "next/link";

// @app
import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/placeholder";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

// @types
type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = initialTickets.find((t) => t.id === ticketId);

  if (!ticket) {
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

  return (
    <div className="animate-fade-in-from-top flex justify-center">
      <TicketItem isDetail ticket={ticket} />
    </div>
  );
}

export default TicketPage;
