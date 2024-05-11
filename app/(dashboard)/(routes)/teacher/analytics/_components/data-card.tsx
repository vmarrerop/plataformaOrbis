import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { formatPrice } from "@/lib/format";

interface DataCardProps {
  value: number;
  label: string;
  shouldFormat?: boolean;
}

export const DataCard = ({
  value,
  label,
  shouldFormat,
}: DataCardProps) => {
  return (
   <Card>
    <CardHeader className="flex bg-red-900 flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium bg-red-500">
        {label}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">
        {shouldFormat ? formatPrice(value) : value}
      </div>
    </CardContent>
   </Card>
  )
}