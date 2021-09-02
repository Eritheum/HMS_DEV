import React from "react";
import { Wrapper, Content, Text } from "../header/Header.Styles";

const Nav = () => (
  <Wrapper>
    <Content>
      <nav>
        <h3>Navigation Page</h3>
        <ul>
          <li>About Us</li>
          <li>Booking</li>
          <li>Reservation</li>
          <li>Record</li>
        </ul>
      </nav>
    </Content>
  </Wrapper>
);

export default Nav;
