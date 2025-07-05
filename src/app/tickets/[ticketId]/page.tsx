// @app
import { initialTickets } from "@/data";

interface TicketPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = initialTickets.find((t) => t.id === ticketId);

  if (!ticket) {
    return (
      <div>
        <p>Ticket not found</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>{ticket.content}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
}

export default TicketPage;
