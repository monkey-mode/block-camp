import {
  Text,
  Container,
  Grid,
  Card,
  Col,
  Avatar,
  Textarea,
  Spacer,
  Row,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { mockBounty, mockComments } from "../../mock";

export default function Bounty() {
  const router = useRouter();
  const { id } = router.query;
  const [bounty, setBounty] = useState();

  useEffect(() => {
    if (id) {
      fetchProfile();
    }
  }, [id]);

  async function fetchProfile() {
    try {
      // const response = await client.query(getProfiles, { id }).toPromise();
      setBounty(mockBounty[0]);
      console.log(mockBounty[0]);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container sm>
      <Grid.Container gap={2} justify="center">
        <Card>
          <Card.Header>
            <Text h3>Problems with javascript parseInt() [duplicate]</Text>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Text>{bounty ? bounty.description : ""}</Text>
          </Card.Body>
          <Card.Footer>
            <Grid.Container>
              <Grid xs={12}>
                <Row justify="space-between" align="baseline">
                  <Button light color="primary" auto size="sm">
                    <Text small b>
                      Add Comment
                    </Text>
                  </Button>
                  <Row css={{ width: "fit-content" }}>
                    <Avatar
                      size="lg"
                      src={`https://i.pravatar.cc/150?u=${id}`}
                      color="gradient"
                      z
                      bordered
                      css={{ mr: "$6" }}
                    />
                    <Col css={{ width: "fit-content" }}>
                      <Text h4 css={{ lineHeight: "$xs" }}>
                        {bounty ? bounty.projectName : ""}
                      </Text>
                      <Text css={{ color: "$accents8" }}>
                        {bounty ? bounty.title : ""}
                      </Text>
                    </Col>
                  </Row>
                </Row>
              </Grid>
            </Grid.Container>
          </Card.Footer>
        </Card>
        <Spacer y={1} />
        <Row>
          <Button bordered color="gradient" auto>
            {`${mockComments.length} Participant`}
          </Button>
        </Row>
        {/* <Textarea
        fullWidth
        bordered
        color="secondary"
        labelPlaceholder="Comment"
      /> */}
        {mockComments.map((comment, index) => {
          const { like, from, description, reply } = comment;
          return (
            <Grid key={index} xs={12}>
              <Button.Group auto size="sm" vertical color="gradient" bordered>
                <Button auto>Like</Button>
                <Button disabled>{like}</Button>
                <Button>Dislike</Button>
              </Button.Group>

              <Card>
                <Card.Body css={{ p: "$6" }}>
                  <Textarea readOnly initialValue={description} />
                </Card.Body>
                <Card.Footer>
                  <Grid.Container>
                    <Grid xs={12}>
                      <Avatar
                        css={{ mr: "$6" }}
                        size="md"
                        src={`https://i.pravatar.cc/150?u=${from}`}
                        color="gradient"
                        bordered
                      />
                      <Col>
                        <Text h6>{from}</Text>
                        <>
                          <span className="material-symbols-rounded">
                            workspace_premium
                          </span>
                          <span className="material-symbols-rounded">
                            military_tech
                          </span>
                          <span className="material-symbols-rounded">
                            verified
                          </span>
                          <span className="material-symbols-rounded">
                            token
                          </span>
                        </>
                      </Col>
                    </Grid>

                    <Grid.Container>
                      <Button light auto size="sm">
                        <Text small b>
                          Reply
                        </Text>
                      </Button>
                      {reply
                        ? reply.map((reply, index) => {
                            return (
                              <Grid xs={12} key={index}>
                                <Col>
                                  <Card.Divider></Card.Divider>
                                  <Text small css={{ pl: "$8" }}>
                                    {reply.description}
                                  </Text>
                                  <Text
                                    small
                                    color="primary"
                                  >{` - ${reply.from}`}</Text>
                                </Col>
                              </Grid>
                            );
                          })
                        : () => {}}
                    </Grid.Container>
                  </Grid.Container>
                </Card.Footer>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </Container>
  );
}
