import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

interface DateBadgeProps {
  startDate: string;
  endDate: string;
  className?: string;
}

export function DateBadge({ startDate, endDate, className }: DateBadgeProps) {
  const calculateDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const diffYears = endDate.getFullYear() - startDate.getFullYear();
    const diffMonths = endDate.getMonth() - startDate.getMonth();

    let years = diffYears;
    let months = diffMonths;

    if (diffMonths < 0) {
      years--;
      months = 12 + diffMonths;
    }

    return `${years}yrs ${months}mos`;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="inline-flex flex-wrap items-center gap-2 group w-fit max-w-full">
      <Badge
        variant="secondary"
        className={`px-3 py-1 transition-all duration-200 hover:scale-105 ${className}`}
      >
        <Icons.calendar className="w-3 h-3 mr-1" />
        <span className="font-medium">
          {formatDate(startDate)} - {formatDate(endDate)}
        </span>
        <div className="ml-2 px-1.5 py-0.5 bg-primary/10 rounded-sm text-xs font-semibold flex gap-1 items-center justify-center">
          {calculateDuration(startDate, endDate)}
        </div>
      </Badge>
    </div>
  );
}
