import {
    Box,
    Button,
    Card,
    Center,
    Field,
    Fieldset,
    Icon,
    IconButton,
    Input,
    Stack,
} from '@chakra-ui/react'

import { IconBrandGoogle } from '@tabler/icons-react'
import Image from 'next/image'
import { PasswordInput } from '@/components/ui/password-input'
import companyPict from '../../public/company_bcf.svg'

const Signin = () => {
    return (
        <Center minHeight="100vh">
            <Card.Root width="100%" lg={{ width: '25%' }} margin="auto">
                <Card.Body>
                    <Box padding={5}>
                        <Center>
                            <Image src={companyPict} alt="company logo" width={35} />
                        </Center>
                    </Box>
                    <Fieldset.Root size="lg" maxW="md">
                        <Stack>
                            <Fieldset.Legend>Welcome back !</Fieldset.Legend>
                            <Fieldset.HelperText>
                                Please provide your contact details below.
                            </Fieldset.HelperText>
                        </Stack>
                        <Fieldset.Content>
                            {/* <Alert.Root status="warning" title="This is the alert title">
                                <Alert.Indicator />
                                <Alert.Title>This is the alert title</Alert.Title>
                            </Alert.Root> */}
                            <Field.Root>
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
                        <IconButton variant="outline">
                            <Icon>
                                <IconBrandGoogle />
                            </Icon>
                            Google
                        </IconButton>
                        <Button colorPalette="gray" variant="plain">
                            Need Help ?
                        </Button>
                    </Fieldset.Root>
                </Card.Body>
            </Card.Root>
        </Center>
    )
}

export default Signin
