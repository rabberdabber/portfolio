import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
interface DateBadgeProps {
  startDate: Date;
  endDate: Date;
  className?: string;
}

export function DateBadge({ startDate, endDate, className }: DateBadgeProps) {
  const calculateDuration = (start: Date, end: Date) => {
    const diffYears = end.getFullYear() - start.getFullYear();
    const diffMonths = end.getMonth() - start.getMonth();

    let years = diffYears;
    let months = diffMonths;

    if (diffMonths < 0) {
      years--;
      months = 12 + diffMonths;
    }

    return `${years}y:${months}m`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="inline-flex items-center gap-2 group w-max">
      <Badge
        variant="secondary"
        className={`px-3 py-1 transition-all duration-200 hover:scale-105 ${className}`}
      >
        <CalendarDays className="w-3 h-3 mr-1" />
        <span className="font-medium">
          {formatDate(startDate)} - {formatDate(endDate)}
        </span>
        <div className="ml-2 px-1.5 py-0.5 bg-primary/10 rounded-sm text-xs font-semibold flex gap-1 items-center justify-center">
          <Icons.hourglass className="w-3 h-3 mr-1" />
          {calculateDuration(startDate, endDate)}
        </div>
      </Badge>
    </div>
  );
}
