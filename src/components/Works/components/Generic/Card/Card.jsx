import React from "react";

import {
  Description,
  DescriptionContentWarning,
  DescriptionContent,
} from "./styles";

function Card({ description }) {
  return (
    <>
      <Description>
        <strong>
          <DescriptionContentWarning>
            {" "}
            Double click on 3D Model to open it up.
          </DescriptionContentWarning>
        </strong>
        <DescriptionContent>{description}</DescriptionContent>
      </Description>
    </>
  );
}

export default Card;
