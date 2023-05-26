import React from "react";
import Screen from "../layout/Screen";
import { Classifications } from "@/lib/types";

type BarChartProps = {
  data: {
    [key: string]: number;
  };
  classifications: Classifications | any;
  selectedLanguage: number;
};

const getGradient = (
  category: "AE" | "D" | "RP",
  classification: any,
  relativeValue: number
) => {
  if (classification === "low") {
    return "yellow";
  }

  const gradientColors = {
    AE: {
      medium: `linear-gradient(90deg, yellow, orange ${
        relativeValue * 100
      }%, red)`,
      high: `linear-gradient(90deg, yellow, orange, red ${
        relativeValue * 100
      }%)`,
    },
    D: {
      medium: `linear-gradient(90deg, yellow, orange ${
        relativeValue * 100
      }%, red)`,
      high: `linear-gradient(90deg, yellow, orange, red ${
        relativeValue * 100
      }%)`,
    },
    RP: {
      low: "yellow",
      medium: `linear-gradient(90deg, yellow, orange ${
        relativeValue * 100
      }%, red)`,
      high: `linear-gradient(90deg, yellow, orange, red ${
        relativeValue * 100
      }%)`,
    },
  };

  return gradientColors[category][classification as keyof typeof gradientColors[typeof category]];
};

const referenceValues: {
  [key: string]: { low: number; medium: number; high: number };
} = {
  AE: { low: 0, medium: 19, high: 27 },
  D: { low: 0, medium: 6, high: 10 },
  RP: { low: 0, medium: 34, high: 40 },
};

const categoryLabels: { [key: string]: string } = {
  AE: "Emotional Exhaustion",
  D: "Interpersonal Distancing",
  RP: "Work Productivity",
};
const categoryLabelsES: { [key: string]: string } = {
  AE: "Agostamiento Emocional",
  D: "Distanciamiento Interpersonal",
  RP: "Productividad Laboral",
};

export const BarChart: React.FC<BarChartProps> = ({
  data,
  classifications,
  selectedLanguage,
}) => {
  const isOverallHighStress =
    classifications.AE === "HIGH" &&
    classifications.D === "HIGH" &&
    classifications.RP === "LOW";

  const overallStressPresence = isOverallHighStress
    ? selectedLanguage === 1
      ? "HIGH"
      : "ALTO"
    : selectedLanguage === 1
    ? "LOW"
    : "BAJO";
  const overallStressColor = isOverallHighStress ? "red" : "yellow";

  return (
    <Screen
      title={
        selectedLanguage === 1
          ? "Your Stress Levels:"
          : "Tus Niveles de Estrés:"
      }
      body={
        <div className="w-full">
          {Object.keys(referenceValues).map((category) => {
            const value = data[category];
            const classification = classifications[category];
            const relativeValue =
              value <= referenceValues[category].medium
                ? (value / referenceValues[category].medium) * (1 / 3)
                : 1 / 3 +
                  ((value - referenceValues[category].medium) /
                    (referenceValues[category].high -
                      referenceValues[category].medium)) *
                    (2 / 3);

            return (
              <div key={category} className="mb-8">
                <p className="text-sm font-semibold mb-2">
                  {selectedLanguage === 1
                    ? categoryLabels[category]
                    : categoryLabelsES[category]}
                </p>
                <progress
                  className="w-full"
                  value={relativeValue * 100}
                  max="100"
                  style={{
                    backgroundImage: getGradient(
                      category as any,
                      classification,
                      relativeValue
                    ),
                  }}
                ></progress>
                <div className="w-40 mx-auto flex justify-between text-xs mt-1 items-center">
                  <span className="relative left-[-50%]">
                    {selectedLanguage === 1 ? "LOW" : "BAJO"}
                  </span>
                  <span className="relative -translate-x-1/2">
                    {selectedLanguage === 1 ? "MEDIUM" : "MEDIO"}
                  </span>
                  <span className="relative right-[-50%]">
                    {selectedLanguage === 1 ? "HIGH" : "ALTO"}
                  </span>
                </div>
              </div>
            );
          })}
          <div className="mt-10">
            <h2>
              {selectedLanguage === 1
                ? "Stress Presence:"
                : "Presencia de Estrés:"}{" "}
              <span
                className={`bg-${overallStressColor}-400 text-black shadow-sm mx-4 rounded px-4 py-1`}
              >
                {overallStressPresence}
              </span>
            </h2>
          </div>
        </div>
      }
    />
  );
};
