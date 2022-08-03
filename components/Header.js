import { Container, Card, Text, Row } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import {useEffect} from "react";

function Headers() {
  const { isConnected } = useAccount({
    onDisconnect() {
      location.reload();
    }
  });

  return (
    <Card.Footer
      isBlurred
      css={{
        position: "sticky",
        bgBlur: "#ffffff66", //isDark ? "#0f111466" : "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        top: 0,
        zIndex: 600,
      }}
    >
      <Container sm>
        <Row justify="space-between">
          <Text>Auditorium</Text>
          <ConnectButton />
        </Row>
      </Container>
    </Card.Footer>
  );
}

export default Headers;