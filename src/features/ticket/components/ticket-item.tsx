// @packages
import Link from "next/link";
import { LucideSquareArrowOutUpRight } from "lucide-react";

// @app
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ticketPath } from "@/paths";

// @own
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";
import { Button } from "@/components/ui/button";

// @types
type TicketItemProps = {
  isDetail?: boolean;
  ticket: Ticket;
};

function TicketItem({ isDetail, ticket }: TicketItemProps) {
  const detailButton = (
    <Button asChild size="icon" variant="outline">
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <div
      className={cn("flex w-full gap-1", {
        "max-w-3xl": isDetail,
        "max-w-2xl": !isDetail,
      })}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className={cn({ "line-clamp-3": !isDetail })}>
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {!isDetail && <div className="flex flex-col gap-1">{detailButton}</div>}
    </div>
  );
}

export { TicketItem };
