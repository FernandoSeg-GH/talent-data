import React from "react";

type Props = {
  current: number;
  total: number;
  answers: any;
};

export default function Steps({ current, total, answers }: Props) {
  let percentComplete = Math.round((current / total) * 100);

  if (Object.keys(answers).length === total) {
    percentComplete = 100;
  }

  const progressBarStyle = {
    "--value": `${percentComplete}`,
  };

  return (
    <div className="flex items-center justify-between w-full">
      <progress
        className="progress progress-info w-full shadow"
        value={percentComplete}
        max="100"
      ></progress>
      <span className="cursor-default text-gray-700 bg-blue-200 rounded-full shadow h-6 w-12 py-0 px-3 text-xs flex ml-2 items-center justify-center font-bold">
        {percentComplete}%
      </span>
    </div>
  );
}
