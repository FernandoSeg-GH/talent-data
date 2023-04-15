import React from "react";
import Screen from "../layout/Screen";

type Props = {
  points: number;
};

const RPMessage = ({ points }: Props) => {
  if (points >= 0 && points <= 33) {
    return (
      <Screen 
        title="Work Productivity: LOW"
        body={
          <div className="text-justify">
            <p className="my-4">The Work Productivity subscale evaluates feelings of self-efficacy and productivity in the workplace. It describes feelings of competence and perception of factors for work success.</p>
            <p>Your result is LOW. This indicates that there are no negative indicators in this area. This covers the possibility that you may not be perceiving that you are self-realizing in the workplace. In severe situations, you may even feel like you are failing professionally. Identifying and acknowledging these feelings could allow us to take the initiative to seek tools that enhance our development of skills. Some of these tools may be: seeking career guidance, analyzing the congruence between our vocation and current work, planning objectives, and talking to industry leaders.</p>
          </div>
        }
      />
    );
  } else if (points >= 34 && points <= 39) {
    return (
      <Screen 
        title="Work Productivity: MEDIUM"
        body={
          <div className="text-justify">
            <p className="my-4">The Work Productivity subscale evaluates feelings of self-efficacy and productivity in the workplace. It describes feelings of competence and perception of factors for work success.</p>
            <p>Your result is MEDIUM. This indicates that there are no significant indicators for this subscale. Nevertheless, given that the result is medium, it is necessary to analyze how you perceive yourself regarding your work self-realization. A clear future projection at a professional level with clear objectives will be related to how you feel that you self-realize and enhance your success factors.</p>
          </div>
        }
      />
    );
  } else {
    return (
      <Screen 
        title="Work Productivity: HIGH"
        body={
          <div className="text-justify">
            <p className="my-4">The Work Productivity subscale evaluates feelings of self-efficacy and productivity in the workplace. It describes feelings of competence and perception of factors for work success.</p>
            <p>Your result is HIGH. Good job! Reflect on how you perceive yourself professionally in the current and future time frame to have a clear assessment of how your professional self-realization is evolving.</p>
          </div>
        }
      />
    );
  }
};

export default RPMessage;
