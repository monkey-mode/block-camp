import {
  Text,
  Container,
  Grid,
  Card,
  Link,
  Avatar,
  Textarea,
  Spacer,
  Row,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { mockBounty, mockComments } from "../../mock";
import { CommentCard } from "../../components/CommentCard";
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
            <Link
              icon
              color="primary"
              target="_blank"
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
            <Avatar
              size="lg"
              src={`https://i.pravatar.cc/150?u=${id}`}
              color="gradient"
              bordered
            />
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  {bounty ? bounty.projectName : ""}
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text css={{ color: "$accents8" }}>
                  {bounty ? bounty.title : ""}
                </Text>
              </Grid>
            </Grid.Container>
          </Card.Footer>
        </Card>
        <Spacer y={1} />
        {/* <Textarea
        fullWidth
        bordered
        color="secondary"
        labelPlaceholder="Comment"
      /> */}
        {mockComments.map((comment, index) => {
          return (
            <Grid key={index} xs={12}>
              <Button.Group auto size="sm" vertical color="gradient" bordered>
                <Button auto>Like</Button>
                <Button disabled>{comment.like}</Button>
                <Button>Dislike</Button>
              </Button.Group>

              <Card>
                <Card.Body css={{ p: "$6" }}>
                  <Textarea readOnly initialValue={comment.comment} />
                </Card.Body>
                <Card.Footer>
                  <Avatar
                    size="md"
                    src={`https://i.pravatar.cc/150?u=${comment.from}`}
                    color="gradient"
                    bordered
                  />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h6>{comment.from}</Text>
                    </Grid>
                    <Grid xs={12}>
                      <span className="material-symbols-rounded">
                        workspace_premium
                      </span>
                      <span className="material-symbols-rounded">
                        military_tech
                      </span>
                      <span className="material-symbols-rounded">verified</span>
                      <span className="material-symbols-rounded">token</span>
                    </Grid>
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
