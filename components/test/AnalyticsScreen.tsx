import { Classifications } from "@/lib/types";
import Screen from "../layout/Screen";
import { BarChart } from "./BarChart";

// ############## ANALYTICS SCREEN ##############
type AnalyticsScreenProps = {
  lapapaAE: number;
  lapapaD: number;
  lapapaRP: number;
  classifications: Classifications | any;
  selectedLanguage: number;
};

  
export function AnalyticsScreen({
  lapapaAE,
  lapapaD,
  lapapaRP,
  classifications,
  selectedLanguage,
}: AnalyticsScreenProps) {
  const chartData = { AE: lapapaAE, D: lapapaD, RP: lapapaRP };

  return (
    <div className="w-full">
      <Screen
        title={selectedLanguage === 1 ? "Analytics" : "Análisis"}
        body={<BarChart data={chartData} classifications={classifications} selectedLanguage={selectedLanguage} />}
      />
    </div>
  );
}
