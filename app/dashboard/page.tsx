import {
  Badge,
  Box,
  Center,
  FormatNumber,
  HStack,
  Icon,
  Stack,
  Stat,
} from "@chakra-ui/react";

import { IconBrandMeta } from "@tabler/icons-react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <Center>
      <Stack direction="row" gap={2}>
        {links.map((link) => (
          <Link href={link.path} key={link.path}>
            <Box
              width={150}
              bg="gray.50"
              borderWidth="1px"
              borderColor="border.disabled"
              _hover={{ bg: "gray.100" }}
              padding={2}
            >
              {link.label}
            </Box>
          </Link>
        ))}
        <Link href="/signin">About</Link>
        <Icon>
          <IconBrandMeta />
        </Icon>
      </Stack>
    </Center>
  );
};
const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/signin",
    label: "Login",
  },
];

const Demo = () => {
  return (
    <Stat.Root>
      <Stat.Label>Unique </Stat.Label>
      <HStack>
        <Stat.ValueText>
          <FormatNumber value={8456.4} style="currency" currency="USD" />
        </Stat.ValueText>
        <Badge colorPalette="green" gap="0">
          <Stat.UpIndicator />
          12%
        </Badge>
      </HStack>
      <Stat.HelpText>since last month</Stat.HelpText>
    </Stat.Root>
  );
};

export default Dashboard;
