import React from "react";
import Screen from "../layout/Screen";

type Props = {
  points: number;
};

const AEMessage = ({ points }: Props) => {
  if (points >= 0 && points <= 18) {
    return (
      <Screen
        title="Emotional Exhaustion: LOW"
        body={
          <div className="text-justify ">
            <h2 className="font-bold">Emotional Exhaustion: LOW</h2>
            <p className="my-4">
              This subscale represents the experience of feeling exhausted, overwhelmed, emotionally &quot;burnt out&quot; by job demands. It implies a loss of energy, wear and tear, and fatigue.{" "}
            </p>
            <p>
              Your result is LOW. This means that there have been no significant indicators for Emotional Exhaustion.
            </p>
          </div>
        }
      />
    );
  } else if (points >= 19 && points <= 26) {
    return (
      <Screen
        title="Emotional Exhaustion: MEDIUM"
        body={
          <div className="text-justify">
            <p className="my-4">
              This subscale represents the experience of feeling exhausted, overwhelmed, emotionally &quot;burnt out&quot; by job demands. It implies a loss of energy, wear and tear, and fatigue.{" "}
            </p>
            <p>
              Your result is MEDIUM. This implies that there are no significant indicators for Emotional Exhaustion. However, it has not been low either, so it is important to prevent its negative evolution in the future. It is suggested to monitor your levels of energy and fatigue to stay motivated and achieve professional success.
            </p>
          </div>
        }
      />
    );
  } else {
    return (
      <Screen
        title="Emotional Exhaustion: HIGH"
        body={
          <div className="text-justify">
            <p className="my-4">
              This subscale represents the experience of feeling exhausted, overwhelmed, emotionally &quot;burnt out&quot; by job demands. It implies a loss of energy, wear and tear, and fatigue.
            </p>
            <p>
              Your result is HIGH. This indicates that you may have symptoms compatible with Emotional Exhaustion. The feeling of being emotionally burnt out could affect your professional capacity. It would be necessary to take preventive measures to avoid it affecting your work and personal life.
            </p>
          </div>
        }
      />
    );
  }
};

export default AEMessage;
