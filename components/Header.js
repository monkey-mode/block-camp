import { Container, Card, Text,Button, Row } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState,useEffect } from 'react';

function Headers() {
  const router = useRouter();
  const [showApprove,setShowApprove] = useState(false)

  const { isConnected,address } = useAccount(
    {
      onDisconnect() {
        location.replace("/");
      }
    }
  );

  useEffect(()=>{
    setShowApprove(address == "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  },[address,isConnected])

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
        <Row align="baseline" css={{width:"fit-content"}}>
        <Link href="/">
          <a> 
          <Button bordered color="primary" auto>
          <Text h4>Auditorium</Text>
        </Button>
          </a>
        </Link>
        {showApprove && <>
        <Link href="/backoffice">
          <a> 
          <Button light color="primary" auto>
          <Text h5>Approve</Text>
        </Button>
          </a>
        </Link>
        {" | "}
        </>
        }
        <Link href="/proposal">
        <a>
        <Button light color="primary" auto>
        <Text h5 >Propsosal</Text>
        </Button>
        </a>
        </Link>
        </Row>
          <ConnectButton />
        </Row>
      </Container>
    </Card.Footer>
  );
}

export default Headers;