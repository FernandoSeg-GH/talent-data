import Screen from "../layout/Screen";

// ############## BAR CHART SCREEN ##############
type BarChartProps = {
  data: {
    [key: string]: number;
  };
};

type CategoryData = {
  value: number;
  tier: string;
};

const referenceValues: {
  [key: string]: { low: number; medium: number; high: number };
} = {
  AE: { low: 0, medium: 10, high: 19 },
  D: { low: 0, medium: 6, high: 9 },
  RP: { low: 27, medium: 34, high: 39 },
};

const getTier = (
  value: number,
  low: number,
  medium: number,
  high: number
): string => {
  if (value >= high) {
    return "high";
  } else if (value >= medium) {
    return "medium";
  } else {
    return "low";
  }
};

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
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
      title="Reporte de su nivel de estrés"
      body={
        <div className="w-full">
      {categoryKeys.map((category) => {
        const { value, tier } = categoryData[category];
        const lowWidth = `${
          33.33 *
          ((value - referenceValues[category].low) /
            (referenceValues[category].high - referenceValues[category].low))
        }%`;
        const mediumWidth = `${
          33.33 *
          ((referenceValues[category].medium - referenceValues[category].low) /
            (referenceValues[category].high - referenceValues[category].low))
        }%`;
        const highWidth = `${
          33.33 *
          ((referenceValues[category].high - value) /
            (referenceValues[category].high - referenceValues[category].medium))
        }%`;
        return (
          <div key={category}>
            <div className="flex items-center justify-between my-8 mb-2">
              <p className="text-sm font-semibold">
                {category == "AE" ? "Agotamiento Emocional" : ""}
                {category == "D" ? "Despersonalización" : ""}
                {category == "RP" ? "Realización Personal" : ""}
              
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
                    "--low-width": lowWidth,
                    "--medium-width": mediumWidth,
                    "--high-width": highWidth,
                  } as React.CSSProperties
                }
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>BAJO</span>
                <span>MEDIO</span>
                <span>ALTO</span>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mt-10">
        Si AE high + D high + RP low = SI
        <h2>Stress Levels: 
          { categoryData["AE"].tier == "high" && categoryData["D"].tier == "high" && categoryData["RP"].tier == "low" ? <span className="bg-red-200 text-black shadow-sm mx-4 rounded px-4 py-1">SI</span> : <span className="bg-yellow-400 text-black shadow-sm mx-4 rounded px-4 py-1">NO</span>}</h2>
        {/* <h2>Brunout: <span className="bg-red-200 text-black shadow-sm mx-4 rounded px-4 py-1">SI</span><span className="bg-yellow-400 text-black shadow-sm mx-4 rounded px-4 py-1">NO</span></h2> */}
      </div>
    </div>
      }
    />
  );
};
