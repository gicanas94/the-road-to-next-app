// @packages
import { notFound } from "next/navigation";

// @app
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";

// @types
type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

async function TicketPage({ params }: TicketPageProps) {
  const ticket = await getTicket(params.ticketId);

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
