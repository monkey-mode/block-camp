import { useState, useEffect } from "react";
import { mockBounty } from "../mock";
import {
  Container,
  Card,
  Row,
  Text,
  Spacer,
  Avatar,
  Grid,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetchProfiles();
  }, []);
  async function fetchProfiles() {
    try {
      // const response = await client.query(recommendProfiles).toPromise();
      // console.log({ response });
      setProfiles(mockBounty);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Container sm>
        <Row align="baseline">
          <Text h3>Explore</Text>
          <Text h5>bounty </Text>
          Instantly earn crypto by discovering web3
        </Row>

        <Grid.Container gap={2} justify="center">
          {profiles.map((profile, index) => {
            const {
              projectId,
              projectName,
              title,
              description,
              bounty,
              asset,
              image,
            } = profile;
            return (
              <Grid xs={6} key={index}>
                <Link href={`/bounty/${projectId}`} key={index}>
                  <a style={{ width: "100%" }}>
                    <Card isPressable>
                      <Card.Header>
                        <Button
                          size="sm"
                          css={{ paddingLeft: "0" }}
                          auto
                          icon={
                            <Avatar
                              size="sm"
                              src={`https://i.pravatar.cc/150?u=${image}`}
                            />
                          }
                          disabled
                          rounded
                        >
                          {projectName}
                        </Button>
                      </Card.Header>
                      <Card.Body css={{ paddingTop: 0, paddingBottom: 0 }}>
                        <Text h4>{title}</Text>
                        <Grid.Container>
                          <Grid xs={9}>
                            <Text>{description}</Text>
                          </Grid>
                          <Grid xs={3} direction="column" justify="flex-end">
                            <Button size="xs" auto disabled>
                              {`${bounty} ${asset}`}
                            </Button>
                          </Grid>
                        </Grid.Container>
                      </Card.Body>
                      {/* <Card.Divider></Card.Divider> */}
                      <Card.Footer></Card.Footer>
                    </Card>
                    <Spacer y={1} />
                  </a>
                </Link>
              </Grid>
            );
          })}
        </Grid.Container>
      </Container>
    </>
  );
}
