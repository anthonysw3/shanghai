"use client";

import React, { useContext } from "react";

// Providers
import { AppContext } from "../../providers/AppProvider";

// Grid
import { Container, Row, Col } from "react-grid-system";

export default function Home() {
  const { openLayer } = useContext(AppContext);

  const openMyDrawer = () => {
    openLayer({
      size: "fit content",
      stack: true,
      title: "Test drawer",
      component: MyComponent,
      footerComponent: MyFooterComponent,
      callbacks: {
        onClose: () => console.log("Drawer closed"),
      },
      anchor: "right",
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <button onClick={openMyDrawer}>Open drawer</button>
        </Col>
      </Row>
    </Container>
  );
}

const MyComponent = () => {
  return <div>My component</div>;
};

const MyFooterComponent = () => {
  return <div>My footer component</div>;
};
