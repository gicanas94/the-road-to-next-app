// @packages
import Link from "next/link";

// @app
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

export default function TicketsPage() {
  return (
    <div>
      <h1>Tickets</h1>
      <ul>
        {initialTickets.map((ticket) => (
          <li key={ticket.id}>
            <Link href={ticketPath(ticket.id)}>
              <h2>{ticket.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
