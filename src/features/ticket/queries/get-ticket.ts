// @app
import { Ticket } from "@/features/ticket/types";
import { initialTickets } from "@/data";

export async function getTicket(ticketId: string): Promise<Ticket | null> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
    resolve(ticket || null);
  });
}
