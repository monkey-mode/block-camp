import {
  Container,
  Row,
  Text,
  Grid,
  Card,
  Button,
  Avatar,
  Spacer,
  Loading
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {useApi} from "../hooks/useApi";

export default function Home() {
  const router = useRouter();
  const { getBountys } = useApi();
  const [profiles, setProfiles] = useState([]);

  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    fetchProfiles();
  },[]);
  async function fetchProfiles() {
    setIsLoading(true)
    try {
      const response = await getBountys();
      setProfiles(response.data);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false)

  }
  return (
    <Container sm>
    <Row align="baseline">
      <Text h5>Select your project your want to participate</Text>
    </Row>
    {isLoading ? <Row justify="center" css={{mt:"$20"}}><Loading type="gradient" size="xl"/></Row>:<Grid.Container gap={2} justify="center">
      {profiles.map((profile, index) => {
        const {
          task_id,
          description,
          title,
          _id
        } = profile;
        return (
          <Grid xs={6} key={index}>
            {/* <Link href={`/bounty/${projectId}`} key={index}> */}
            <Card
              isPressable
              onPress={() => {
                router.prefetch(`/bounty/${task_id}`);
                router.push(`/bounty/${task_id}`);
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
                      src={`https://i.pravatar.cc/150?u=${task_id}`}
                    />
                  }
                  bordered
                  rounded
                >
                  {task_id}
                </Button>
              </Card.Header>
              <Card.Body css={{ paddingTop: 0, paddingBottom: 0 }}>
                <Text h4>{title}</Text>
                <Grid.Container>
                  <Grid xs={12}>
                    <Text>{description.text}</Text>
                    <Text>{description.link}</Text>
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
                      {`${400} DAI`}
                    </Button>
                  </Grid>
                </Grid.Container>
              </Card.Footer>
            </Card>
            <Spacer y={1} />
          </Grid>
        );
      })}
    </Grid.Container>}
    
  </Container>
    
  );
}
