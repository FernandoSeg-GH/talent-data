import React from "react";
import AEMessage_ENG from "./AEMessage_ENG";
import DMessage_ENG from "./DMessage_ENG";
import RPMessage_ENG from "./RPMessage_ENG";

type Props = {
  points: any
};

export function ResultadosDropdown_ENG({ points }: Props) {
  return (
    <div>
      <br />
      {points.AE !== null && points.AE !== undefined && (
        <>
          <AEMessage_ENG points={points.AE} />
          <br />
        </>
      )}
      {points.D !== null && points.D !== undefined && (
        <>
          <DMessage_ENG points={points.D} />
          <br />
        </>
      )}
      {points.RP !== null && points.RP !== undefined && (
        <>
          <RPMessage_ENG points={points.RP} />
          <br />
        </>
      )}
    </div>
  );
}
