"use client";

// @app
import { Placeholder } from "@/components/placeholder";

function Error({ error }: { error: Error }) {
  return <Placeholder label={error.message || "Unknown error"} />;
}

export default Error;
