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
import TaskCard from "../../components/TaskCard";
import AcceptCard from "../../components/AcceptCard";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { mockBounty, mockComments } from "../../mock";
import { useAccount } from "wagmi";
import { useApi } from "../../hooks/useApi";

function Bounty() {
  const router = useRouter();
  const { id } = router.query;
  const [bounty, setBounty] = useState();
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const { getBounty } = useApi();
  const { address } = useAccount();

  useEffect(() => {
    if (id) {
      fetchProfile();
    }
  }, [id]);

  useEffect(() => {}, [comments]);

  async function fetchProfile() {
    try {
      // const response = await client.query(getProfiles, { id }).toPromise();
      setBounty(mockBounty[0]);
      setComments(mockComments);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container sm>
      <Grid.Container gap={2} justify="center">
        <Card>
          <Grid.Container gap={1} justify="center">
            <Grid xs={9}>
              <TaskCard
                head="Gashajd adgakfj HH asda JJJkasd "
                description="jakdnlksnfnidbnfkjbfsfnlsdnfjksd
          asdknsdfnjsdfkjbskfbskdfbsbdfkbsdkf
          slfnlsjdnflsdlh"
                isLock={true}
                expanded={expanded}
                onExpanded={(expanded) => {
                  setExpanded(expanded);
                }}
              />
            </Grid>
            <Grid xs={3}>
              <AcceptCard />
            </Grid>
          </Grid.Container>
        </Card>
        <Spacer y={0.5} />
        <Grid xs={12}>
          <Text h5>{`${comments.length} Participant`}</Text>
        </Grid>

        <>
          {comments.map((comment, index) => {
            const { like, from, description, reply } = comment;
            return (
              <Grid key={index} xs={12}>
                <div></div>
                {/* like and dislike */}
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
                    <Textarea bordered readOnly initialValue={description} />
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
        </>
        <Grid xs={12}>
          <Card>
            <Card.Body css={{ p: "$6" }} id="comment-section">
              <Text h5>Write your answer</Text>
              <Textarea
                minRows={6}
                fullWidth
                css={{ my: "$6" }}
                onChange={(e) => {
                  setCommentText(e.target.value);
                }}
              />
              <Row>
                <Button
                  ghost
                  sm
                  color="primary"
                  auto
                  onPress={() => {
                    const newValue = [
                      ...comments,
                      {
                        from: address,
                        description: commentText,
                        like: -5,
                      },
                    ];
                    setComments(newValue);
                    console.log(newValue);
                  }}
                >
                  submit
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export default Bounty;
