import { Avatar, Card, Text, Grid } from "@nextui-org/react";

export default function CommentCard(props) {
  return (
    <Card>
      <Card.Body css={{ py: "$2" }}>
        <Text>{props.comment}</Text>
      </Card.Body>
      <Card.Footer>
        <Avatar
          size="lg"
          src={`https://i.pravatar.cc/150?u=${id}`}
          color="gradient"
          bordered
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {props.commentName}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
}
