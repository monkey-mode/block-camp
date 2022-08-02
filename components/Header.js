import { Container, Card, Text, Row } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Headers() {
  return (
    <Container sm>
      <Card.Footer
        isBlurred
        css={{
          position: "sticky",
          bgBlur: "#ffffff66", //isDark ? "#0f111466" : "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          top: 0,
          zIndex: 1,
        }}
      >
        <Row justify="space-between">
          <Text>AuditDAO</Text>
          <ConnectButton />
        </Row>
      </Card.Footer>
    </Container>
  );
}
