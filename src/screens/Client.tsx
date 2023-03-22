import { Alert } from 'react-native';
import { VStack, Heading, Center } from 'native-base';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useForm, Controller } from 'react-hook-form';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export type Person = {
    name: string,
    document: string,
    phone: string,
    email: string
}

export function Client() {
    const { control, handleSubmit } = useForm();



    function handleSignin() {
        auth()
            .signInWithEmailAndPassword('vander@email.com', '123456')
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

    function handleClient(person: Person) {
        firestore()
            .collection('person')
            .add({
                phone: person.phone,
                name: person.name,
                document: person.document
            })
            .then(() => {
                Alert.alert("Informação", "Cliente cadastrado com sucesso")
            })
            .catch((error) => {
                console.log(error);
                Alert.alert("Atenção", "Erro ao cadastrar cliente");

            })
    }

    return (
        <VStack bgColor="gray.300" flex={1} px={10}>
            <Center>
                <Heading my={24}>
                    Cadastro de Clientes
                </Heading>

                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange } }) => (
                        <Input placeholder="Nome" onChangeText={onChange} />
                    )}
                />

                <Controller
                    control={control}
                    name="phone"
                    render={({ field: { onChange } }) => (
                        <Input placeholder="Telefone" onChangeText={onChange} />
                    )}
                />

                <Controller
                    control={control}
                    name="document"
                    render={({ field: { onChange } }) => (
                        <Input placeholder="Documento" onChangeText={onChange} />
                    )}
                />

                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange } }) => (
                        <Input placeholder="email" onChangeText={onChange} />
                    )}
                />

                {/* <Button title="Conectar" onPress={handleSubmit(handleSignin)} /> */}

                <Button title="Cadastrar" onPress={handleSubmit(handleClient)} />
            </Center>
        </VStack>
    )
}