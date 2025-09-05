// @app
import { Heading } from "@/components/heading";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { initialTickets } from "@/data";

function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <Heading description="All your tickets at one place" title="Tickets" />
      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-4">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default TicketsPage;
