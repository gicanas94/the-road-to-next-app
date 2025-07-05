// @packages
import Link from "next/link";

// @app
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";
import { Heading } from "@/components/heading";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  DONE: <LucideCircleCheck />,
  IN_PROGRESS: <LucideFileText />,
  OPEN: <LucidePencil />,
};

function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <Heading description="All your tickets at one place" title="Tickets" />
      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-4">
        {initialTickets.map((ticket) => (
          <Card className="w-full max-w-2xl" key={ticket.id}>
            <CardHeader>
              <CardTitle className="flex gap-2">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <span className="truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3">{ticket.content}</span>
            </CardContent>
            <CardFooter>
              <Link className="text-sm underline" href={ticketPath(ticket.id)}>
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TicketsPage;
