import {
  Container,
  Row,
  Text,
  Grid,
  Card,
  Button,
  Avatar,
  Spacer,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { mockBounty } from "../mock";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
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
              {/* <Link href={`/bounty/${projectId}`} key={index}> */}
              <Card
                isPressable
                onPress={() => {
                  router.push(`/bounty/${projectId}`);
                }}
              >
                <Card.Header css={{ justifyContent: "space-between" }}>
                  <div>
                    <Text small b>
                      End in 20:00:23
                    </Text>
                    <div>
                      <Text small color="secondary">
                        {"    "}2/5 Auditor To Start
                      </Text>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    css={{ paddingLeft: "0" }}
                    auto
                    icon={
                      <Avatar
                        css={{ margin: "0" }}
                        size="sm"
                        src={`https://i.pravatar.cc/150?u=${image}`}
                      />
                    }
                    bordered
                    rounded
                  >
                    {projectName}
                  </Button>
                </Card.Header>
                <Card.Body css={{ paddingTop: 0, paddingBottom: 0 }}>
                  <Text h4>{title}</Text>
                  <Grid.Container>
                    <Grid xs={12}>
                      <Text>{description}</Text>
                    </Grid>
                  </Grid.Container>
                </Card.Body>
                {/* <Card.Divider></Card.Divider> */}
                <Card.Footer>
                  <Grid.Container>
                    <Grid xs={9}>
                      <Button size="xs" auto color="warning">
                        +99 xp
                      </Button>
                    </Grid>
                    <Grid xs={3} direction="column" justify="flex-end">
                      <Button size="xs" auto color="gradient">
                        {`${bounty} ${asset}`}
                      </Button>
                    </Grid>
                  </Grid.Container>
                </Card.Footer>
              </Card>
              <Spacer y={1} />
            </Grid>
          );
        })}
      </Grid.Container>
    </Container>
  );
}
