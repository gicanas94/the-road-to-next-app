export type TicketStatus = "DONE" | "IN_PROGRESS" | "OPEN";

export type Ticket = {
  content: string;
  id: string;
  status: TicketStatus;
  title: string;
};
