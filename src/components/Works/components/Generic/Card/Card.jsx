import React from "react";

import { Description } from "./styles";

function Card({ description }) {
  return (
    <>
      <Description>
        <strong>
          <p> Double click on 3D Model to open it up.</p>
        </strong>
        {description}
      </Description>
    </>
  );
}

export default Card;
