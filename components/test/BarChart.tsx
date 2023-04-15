import Screen from "../layout/Screen";

// ############## BAR CHART SCREEN ##############
type BarChartProps = {
  data: {
    [key: string]: number;
  };
  classifications: {
    AE: string;
    D: string;
    RP: string;
  };
};


type CategoryData = {
  value: number;
  tier: string;
};

const referenceValues: {
  [key: string]: { low: number; medium: number; high: number };
} = {
  AE: { low: 0, medium: 19, high: 27 },
  D: { low: 0, medium: 6, high: 10 },
  RP: { low:0, medium: 34, high: 40 },
};

const getTier = (
  value: number,
  low: number,
  medium: number,
  high: number
): string => {
  if (value >= high) {
    return "high";
  } else if (value >= low && value < medium) {
    return "low";
  } else {
    return "medium";
  }
};

export const BarChart: React.FC<BarChartProps> = ({ data, classifications }) => {
  const categoryKeys = Object.keys(referenceValues);
  const categoryData: { [key: string]: CategoryData } = {};

  for (const category of categoryKeys) {
    const value = data[category];
    const { low, medium, high } = referenceValues[category];

    const tier = getTier(value, low, medium, high);

    categoryData[category] = { value, tier };
  }

  return (
    <Screen
      title="Your Stress Levels:"
      body={
        <div className="w-full">
          {categoryKeys.map((category) => {
            const { value, tier } = categoryData[category];
            const position = tier === "low" ? "0%" : tier === "medium" ? "50%" : "100%";

            return (
              <div key={category}>
                <div className="flex items-center justify-between my-8 mb-2">
                  <p className="text-sm font-semibold">
                    {category == "AE" ? "Emocional Exhaustion" : ""}
                    {category == "D" ? "Interpersonal Distancing" : ""}
                    {category == "RP" ? "Work Productivity" : ""}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <input
                    type="range"
                    min={referenceValues[category].low}
                    max={referenceValues[category].high}
                    value={value}
                    className={`cursor-default w-full range ${
                      tier === "low" ? "bg-blue-500" : ""
                    } ${tier === "medium" ? "bg-green-500" : ""} ${
                      tier === "high" ? "bg-red-500" : ""
                    }`}
                    style={
                      {
                        "--position": position,
                      } as React.CSSProperties
                    }
                  />
                  <div className="w-full flex justify-between text-xs px-2">
                    <span>LOW</span>
                    <span>MEDIUM</span>
                    <span>HIGH</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mt-10">
            {/* <h2>Stress Levels: 
              { categoryData["AE"].tier == "high" && categoryData["D"].tier == "high" && categoryData["RP"].tier == "low" ? <span className="bg-red-400 text-black shadow-sm mx-4 rounded px-4 py-1">HIGH</span> : <span className="bg-yellow-400 text-black shadow-sm mx-4 rounded px-4 py-1">LOW</span>}
              </h2> */}
              <div className="mt-10">
            <h2>
              Stress Levels:{" "}
              {classifications.AE === "high" &&
              classifications.D === "high" &&
              classifications.RP === "low" ? (
                <span className="bg-red-400 text-black shadow-sm mx-4 rounded px-4 py-1">
                  HIGH
                </span>
              ) : (
                <span className="bg-yellow-400 text-black shadow-sm mx-4 rounded px-4 py-1">
                  LOW
                </span>
              )}
            </h2>
          </div>
          </div>
        </div>
      }
    />
  );
};
