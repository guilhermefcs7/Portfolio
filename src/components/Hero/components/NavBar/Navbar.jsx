import React from "react";

import { Link } from "react-scroll";

import {
  Section,
  Container,
  Links,
  List,
  ListItem,
  Icon,
  Button,
  Icons,
} from "./styles";

function NavBar() {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="studio"
                spy={true}
                offset={50}
                smooth={true}
                duration={500}>
                Studio
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="works"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                Works
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                Contact
              </Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default NavBar;
