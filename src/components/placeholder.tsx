// @packages
import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

// @types
type IconProps = {
  className?: string;
};

type PlaceholderProps = {
  button?: React.ReactNode;
  icon?: React.ReactElement<IconProps>;
  label: string;
};

function Placeholder({
  button,
  icon = <LucideMessageSquareWarning />,
  label,
}: PlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {cloneElement(icon, { className: "h-16 w-16" })}
      <h2 className="text-center text-lg">{label}</h2>
      {button}
    </div>
  );
}

export { Placeholder };
