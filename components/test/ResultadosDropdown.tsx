import React from "react";
import AEMessage from "./AEMessage";
import DMessage from "./DMessage";
import RPMessage from "./RPMessage";

type Props = {
  points: any
};

export function ResultadosDropdown({ points }: Props) {
  return (
    <div>
          <br />
          {points.AE && (
            <>
              <AEMessage points={points.AE} />
              <br />
            </>
          )}
          {points.D && (
            <>
              <DMessage points={points.D} />
              <br />
            </>
          )}
          {points.RP && (
            <>
              <RPMessage points={points.RP} />
              <br />
            </>
          )}
        </div>
  );
}
