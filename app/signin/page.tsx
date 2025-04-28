import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Field,
  Fieldset,
  Flex,
  For,
  Input,
  NativeSelect,
  Stack,
} from "@chakra-ui/react";

import { PasswordInput } from "@/components/ui/password-input";

const Signin = () => {
  return (
    <Center minHeight="100vh">
      <Card.Root
        width="100%"
        lg={{ width: "25%" }}
        sm={{ border: 0 }}
        margin="auto"
      >
        <Card.Body>
          <Flex gap={2}>
            <Avatar.Root size="lg" shape="rounded">
              <Avatar.Image src="https://picsum.photos/200/300" />
              <Avatar.Fallback name="Nue Camp" />
            </Avatar.Root>
          </Flex>
          <Fieldset.Root size="lg" maxW="md">
            <Stack>
              <Fieldset.Legend>Welcome back !</Fieldset.Legend>
              <Fieldset.HelperText>
                Please provide your contact details below.
              </Fieldset.HelperText>
            </Stack>
            <Fieldset.Content>
              <Alert.Root status="warning" title="This is the alert title">
                <Alert.Indicator />
                <Alert.Title>This is the alert title</Alert.Title>
              </Alert.Root>
              <Field.Root invalid>
                <Field.Label>Username</Field.Label>
                <Input name="name" />
                <Field.ErrorText>required</Field.ErrorText>
              </Field.Root>
              <Field.Root>
                <Field.Label>Password</Field.Label>
                <PasswordInput />
              </Field.Root>
            </Fieldset.Content>
            <Button colorPalette="blue">Login</Button>
            <Button colorPalette="gray" variant="plain">
              Need Help ?
            </Button>
          </Fieldset.Root>
        </Card.Body>
      </Card.Root>
    </Center>
  );
};

export default Signin;
