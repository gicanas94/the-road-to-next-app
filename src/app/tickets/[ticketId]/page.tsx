// @packages
import { notFound } from "next/navigation";

// @app
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";

// @types
type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    return notFound();
  }

  return (
    <div className="animate-fade-in-from-top flex justify-center">
      <TicketItem isDetail ticket={ticket} />
    </div>
  );
}

export default TicketPage;
