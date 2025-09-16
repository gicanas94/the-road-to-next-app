// @app
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTickets } from "@/features/ticket/queries/get-tickets";

async function TicketList() {
  const tickets = await getTickets();

  return (
    <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-4">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export { TicketList };
