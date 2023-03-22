import React, { useState } from "react";
import { Development, Behance, SocialMedia } from "./components";

import {
  Section,
  Container,
  Presentation,
  List,
  ListItem,
  PresentationImage,
} from "./styles";

const listData = [
  { item: "Development" },
  { item: "Behance" },
  { item: "Social Media" },
];

function Works() {
  const [work, setWork] = useState("Development");

  return (
    <Section id="works">
      <Container>
        <Presentation>
          <List>
            {listData.map((list, index) => (
              <ListItem
                key={index}
                text={list.item}
                onClick={() => setWork(list)}>
                {list.item}
              </ListItem>
            ))}
          </List>
        </Presentation>
        <PresentationImage>
          {work.item === "Behance" ? (
            <Behance />
          ) : work.item === "Social Media" ? (
            <SocialMedia />
          ) : (
            <Development />
          )}
        </PresentationImage>
      </Container>
    </Section>
  );
}

export default Works;
