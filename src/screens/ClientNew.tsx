import { IPressableProps, Pressable, HStack, VStack, Box, Text, Avatar } from "native-base";

export type ClientProps = {
    id: String;
    name: string;
    document: string;
    phone: string;
    email: string;
}

type Props = IPressableProps & {
    data: ClientProps;
}

export function ClientNew({ data, ...rest }: Props) {
    return (
        <Pressable {...rest}>
            <HStack
                bg="gray.600"
                mb={2}
                alignItems="center"
                justifyContent="space-between"
                rounded="sm"
                overflow="hidden"
            >
                <Avatar bg="indigo.500" source={{
                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }}></Avatar>

                <VStack flex={1} ml="2">
                    <Text color="white" fontSize="md">
                        {data.name}
                    </Text>
                    <HStack>
                        <Text w={"50%"} color="white" fontSize="md">
                            {data.document}
                        </Text>
                        <Text color="white" fontSize="md">
                            {data.phone}
                        </Text>
                    </HStack>
                    <Text color="white" fontSize="md">
                        {data.email}
                    </Text>
                </VStack>
            </HStack>
        </Pressable>
    )
}