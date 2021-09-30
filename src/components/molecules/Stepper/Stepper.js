import React from "react";
import StepperLabel from "../../atoms/StepperLabel/StepperLabel";
import LabelNumber from "../../atoms/StepperNumber/LabelNumber";

const Stepper = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }} data-testid="stepper" >
      <LabelNumber isVisited={props.isVisited} number={props.number} />
      <StepperLabel label={props.label} isVisited={props.isVisited} />
    </div>
  );
};

export default Stepper;
