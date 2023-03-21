import { IPressableProps, Pressable, HStack, VStack, Box, Text } from "native-base";

export type ClientProps = {
    id: String;
    name: string;
    document: string;
    phone: string;
}

type Props = IPressableProps & {
    data: ClientProps;
}

export function ClientNew({ data, ...rest }: Props) {
    return (
        <Pressable {...rest}>
            <HStack
                bg="gray.600"
                mb={4}
                alignItems="center"
                justifyContent="space-between"
                rounded="sm"
                overflow="hidden"
            >
                <Box h="full" w={2} bg="blue.400" />
                <VStack flex={1} my={5} ml={5}>
                    <Text color="white" fontSize="md">
                        Nome {data.name}
                    </Text>
                    <Text color="white" fontSize="md">
                        Documento {data.document}
                    </Text>
                    <Text color="white" fontSize="md">
                        Telefone {data.phone}
                    </Text>
                </VStack>
            </HStack>
        </Pressable>
    )
}