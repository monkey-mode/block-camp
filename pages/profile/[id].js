import { Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;

  return <Text>{id}</Text>;
}
