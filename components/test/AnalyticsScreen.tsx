import Screen from "../layout/Screen";
import { BarChart } from "./BarChart";

// ############## ANALYTICS SCREEN ##############
type AnalyticsScreenProps = {
  lapapaAE: number;
  lapapaD: number;
  lapapaRP: number;
  classifications: {
    AE: string;
    D: string;
    RP: string;
  };
};

  
export function AnalyticsScreen({
  lapapaAE,
  lapapaD,
  lapapaRP,
  classifications,
}: AnalyticsScreenProps) {
  const chartData = { AE: lapapaAE, D: lapapaD, RP: lapapaRP };

  return (
    <div className="w-full">
      <BarChart data={chartData} classifications={classifications} />
    </div>
  );
}
