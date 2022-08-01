import { useState, useEffect } from "react";
import { client, recommendProfiles } from "../api";
import { Container, Card, Row, Text, Spacer, Avatar } from "@nextui-org/react";
import jazzicon from "@metamask/jazzicon";
import Link from "next/link";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetchProfiles();
  }, []);
  async function fetchProfiles() {
    try {
      const response = await client.query(recommendProfiles).toPromise();
      console.log({ response });
      setProfiles(response.data.recommendedProfiles);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
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
        <Text>TEXT</Text>
      </Card.Footer>
      <Container xs>
        {profiles.map((profile, index) => {
          const { id, handle, bio, picture } = profile;
          return (
            <Link href={`/profile/${id}`} key={id}>
              <a>
                <Card isPressable>
                  <Card.Header>
                    <Row align="center">
                      <Avatar
                        size="lg"
                        src={picture ? picture?.original?.url : ""}
                        color="gradient"
                        bordered
                      />
                      <Spacer x={1} />
                      <Text b>{handle}</Text>
                    </Row>
                  </Card.Header>
                  <Card.Body css={{ paddingTop: 0, paddingBottom: 0 }}>
                    {bio}
                  </Card.Body>
                  <Card.Footer></Card.Footer>
                </Card>
                <Spacer y={1} />
              </a>
            </Link>
          );
        })}
      </Container>
    </>
  );
}
