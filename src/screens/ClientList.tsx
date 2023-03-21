import { VStack, Text, HStack, FlatList, Center } from "native-base";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import firestore from '@react-native-firebase/firestore';
import { ClientNew, ClientProps } from './ClientNew'


export function ClientList() {

    const [clientNew, setClientNew] = useState<ClientProps[]>([]);

    useEffect(() => {
        const subscriber =
            firestore()
                .collection('person')
                .onSnapshot(snapshot => {
                    const data = snapshot.docs.map(doc => {
                        const { name, document, phone } = doc.data();
                        return {
                            id: doc.id,
                            name,
                            document,
                            phone
                        }
                    })
                    setClientNew(data)
                })
        return subscriber
    }, [])

    return (
        <VStack flex={1} pb={6} bg={"blue.200"}>
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.600"
                pt={9}
                pb={5}
                px={6}>
            </HStack>
            <Text> MARIA MAE DE DEUS</Text>
            <FlatList
                data={clientNew}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ClientNew data={item} onPress={() => Alert.alert(item.name)} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListEmptyComponent={() => (
                    <Center>
                        <Text>
                            JESUS FILHO DE DEUS
                        </Text>
                    </Center>
                )}
            />
        </VStack>
    )
}