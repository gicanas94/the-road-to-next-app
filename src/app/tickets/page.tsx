// @packages
import { Suspense } from "react";

// @app
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";

function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <Heading description="All your tickets at one place" title="Tickets" />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}

export default TicketsPage;
