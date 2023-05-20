import React from "react";
import Screen from "../layout/Screen";
import { Classifications } from "@/lib/types";

type BarChartProps = {
  data: {
    [key: string]: number;
  };
  classifications: Classifications | any;
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


const getGradient = (category: "AE" | "D" | "RP", classification: "low" | "medium" | "high", relativeValue: number) => {
  if (classification === "low") {
    return category === "RP" ? "red" : "yellow";
  }

  const gradientColors = {
    AE: {
      medium: `linear-gradient(90deg, yellow, orange ${relativeValue * 100}%)`,
      high: `linear-gradient(90deg, yellow, orange, red ${relativeValue * 100}%)`,
    },
    D: {
      medium: `linear-gradient(90deg, yellow, orange ${relativeValue * 100}%)`,
      high: `linear-gradient(90deg, yellow, orange, red ${relativeValue * 100}%)`,
    },
    RP: {
      medium: `linear-gradient(90deg, red, orange ${relativeValue * 100}%)`,
      high: `linear-gradient(90deg, red, orange, yellow ${relativeValue * 100}%)`,
    },
  };

  return gradientColors[category][classification];
};

export const BarChart: React.FC<BarChartProps> = ({ data, classifications }) => {
  return (
    <Screen
      title="Your Stress Levels:"
      body={
        <div className="w-full">
          {Object.keys(referenceValues).map((category) => {
            const value = data[category];
            const classification = classifications[category];
            const relativeValue = (() => {
              if (value <= referenceValues[category].medium) {
                return (value / referenceValues[category].medium) * (1 / 3);
              } else {
                return (1 / 3) + ((value - referenceValues[category].medium) / (referenceValues[category].high - referenceValues[category].medium)) * (2 / 3);
              }
            })();

            return (
              <div key={category} className="mb-8">
                <p className="text-sm font-semibold mb-2">{categoryLabels[category]}</p>
                <progress
                  className={`progress progress-success w-full`}
                  value={relativeValue * 100}
                  max="100"
                ></progress>
                <div className="w-40 mx-auto flex justify-between text-xs mt-1 items-center">
                  <span className="relative left-[-50%]">LOW</span>
                  <span className="relative -translate-x-1/2">MEDIUM</span>
                  <span className="relative right-[-50%]">HIGH</span>
                </div>
              </div>
            );
          })}
          <div className="mt-10">
            <h2>
              Stress Prescence:{" "}
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
      }
    />
  );
};
