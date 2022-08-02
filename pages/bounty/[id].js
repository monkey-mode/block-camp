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
  Collapse,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { mockBounty, mockComments } from "../../mock";
import { useAccount } from "wagmi";

export default function Bounty() {
  const router = useRouter();
  const { id } = router.query;
  const [bounty, setBounty] = useState();
  const [commentText, setCommentText] = useState("");
  const [expanded, setExpanded] = useState(false);
  const { isConnecting } = useAccount();

  useEffect(() => {
    if (id) {
      fetchProfile();
    }
  }, [id, isConnecting]);

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
        <Grid xs={8}>
          <Card>
            <Card.Header css={{ zIndex: 2 }}>
              <Text h3>Problems with javascript parseInt() [duplicate]</Text>
            </Card.Header>
            <Card.Body css={{ height: "150px" }}>
              <Text>
                asdladkhasldhashdosdlasldasldglasgdlasdlasldlajsgdljsgd
                adkbaskdhlahdlhasdsldlsdlhsdlhsfhslflsflsdhf
                sflihdsofisdlohodufoishfoewpifpsihfohfpoishdf
                soifhsoifoshfodsfpjhofwepofhgoshfpis slflsfsflhslfhshfoisfohsd
              </Text>
              {true ? (
                <div></div>
              ) : (
                <Card.Footer
                  css={{
                    bgBlur: "#ffffff66",
                    position: "absolute",
                    borderStyle: "dashed",
                    borderRadius: "0",
                    height: "100%",
                    zIndex: 1,
                    top: 0,
                    left: 0,
                  }}
                  isBlurred
                ></Card.Footer>
              )}
            </Card.Body>
            <Card.Footer css={{ zIndex: 2 }}>
              <Grid.Container>
                <Grid xs={12}>
                  <Row justify="space-between" align="baseline">
                    <Button
                      light
                      color="primary"
                      auto
                      size="sm"
                      onPress={() => {
                        setExpanded(!expanded);
                      }}
                    >
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
                <Grid xs={12}>
                  <Collapse
                    showArrow={false}
                    expanded={expanded}
                    css={{ padding: "0px", width: "100%" }}
                    divider={false}
                    disabled
                  >
                    <Textarea
                      fullWidth
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                  </Collapse>
                </Grid>
              </Grid.Container>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card></Card>
        </Grid>
        <Spacer y={1} />
        <Row>
          <Text h5>{`${mockComments.length} Participant`}</Text>
        </Row>
        {mockComments.map((comment, index) => {
          const { like, from, description, reply } = comment;
          return (
            <Grid key={index} xs={12}>
              <div></div>
              {/* <Button.Group auto size="sm" vertical light>
                <Button auto>
                  <span style={{size:"1.5rem"}} className="material-symbols-rounded">
                    arrow_drop_up
                  </span>
                </Button>
                <Button >{like}</Button>
                <Button>
                  <span style={{size:"1.5rem"}}  className="material-symbols-rounded">
                    arrow_drop_down
                  </span>
                </Button>
              </Button.Group> */}
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
