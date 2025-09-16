// @app
import { Ticket } from "@/features/ticket/types";
import { initialTickets } from "@/data";

export async function getTickets(): Promise<Ticket[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
}
