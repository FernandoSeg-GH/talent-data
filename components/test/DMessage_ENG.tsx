import React from "react";
import Screen from "../layout/Screen";

type Props = {
  points: number;
};

const DMessage = ({ points }: Props) => {
  if (points >= 0 && points <= 18) {
    return (
      <Screen
        title="Interpersonal Distance: LOW"
        body={
          <div className="text-justify">
            <p className="my-4">This subscale represents the degree to which one recognizes attitudes of coldness and distance at work. It describes possible impersonal responses and lack of feelings towards the subjects-objects of attention in the work environment.</p>
            <p>Your result is LOW. This implies that there are no indicators compatible with Interpersonal Distance. It is suggested to be aware of how your relationships are in the work environment, so that they enhance your ability to work as a team.</p>
          </div>
        }
      />
    );
  } else if (points >= 19 && points <= 26) {
    return (
      <Screen 
        title="Interpersonal Distance: MEDIUM"
        body={
          <div className="text-justify">
            <p className="my-4">This subscale represents the degree to which one recognizes attitudes of coldness and distance at work. It describes possible impersonal responses and lack of feelings towards the subjects-objects of attention in the work environment.</p>
            <p>Your result is MEDIUM. This implies that no significant indicators have been observed for the Interpersonal Distance subscale. It is suggested to stimulate relationships with people you trust in the work environment to increase the support network in favor of collaborative work.</p>
          </div>
        } 
      />
    );
  } else {
    return (
      <Screen 
        title="Interpersonal Distance: HIGH"
        body={
          <div className="text-justify">
            <p className="my-4">This subscale represents the degree to which one recognizes attitudes of coldness and distance at work. It describes possible impersonal responses and lack of feelings towards the subjects-objects of attention in the work environment.</p>
            <p>Your result is HIGH. This reflects that you could be experiencing the need to defend yourself against situations in the work environment that cause you tension and frustration. It would be necessary to take protective measures such as strengthening your teamwork to be able to work with greater tranquility and professional confidence.</p>
          </div>
        }
      />
    );
  }
};

export default DMessage;
