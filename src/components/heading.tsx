// @app
import { Separator } from "@/components/ui/separator";

// @types
type HeadingProps = {
  description?: string;
  title: string;
};

function Heading({ description, title }: HeadingProps) {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && <p className="text-sm">{description}</p>}
      </div>
      <Separator />
    </>
  );
}

export { Heading };
