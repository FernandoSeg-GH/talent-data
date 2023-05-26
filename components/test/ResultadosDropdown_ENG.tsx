import React from "react";
import AEMessage_ENG from "./AEMessage_ENG";
import DMessage_ENG from "./DMessage_ENG";
import RPMessage_ENG from "./RPMessage_ENG";
import AEMessage from "./AEMessage";
import DMessage from "./DMessage";
import RPMessage from "./RPMessage";

type Props = {
  points: any;
  selectedLanguage: number;
};

export function ResultadosDropdown_ENG({ points, selectedLanguage }: Props) {
  const AEMessageComponent = selectedLanguage === 1 ? AEMessage_ENG : AEMessage;
  const DMessageComponent = selectedLanguage === 1 ? DMessage_ENG : DMessage;
  const RPMessageComponent = selectedLanguage === 1 ? RPMessage_ENG : RPMessage;

  return (
    <div>
      <br />
      {points.AE !== null && points.AE !== undefined && (
        <>
          <AEMessageComponent points={points.AE} />
          <br />
        </>
      )}
      {points.D !== null && points.D !== undefined && (
        <>
          <DMessageComponent points={points.D} />
          <br />
        </>
      )}
      {points.RP !== null && points.RP !== undefined && (
        <>
          <RPMessageComponent points={points.RP} />
          <br />
        </>
      )}
    </div>
  );
}
