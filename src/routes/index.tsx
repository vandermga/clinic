import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Signin } from '../screens/Signin';
import { AppRoutes } from './app.routes';
import { useState, useEffect } from 'react';
import { Loading } from '../components/Loading';
import { HStack, Text, Center } from 'native-base';
import { MainMenu } from '../components/MainMenu';
import { Home } from '../screens/Home';
import { Client } from '../screens/Client';
import { ClientList } from '../screens/ClientList';


export function Routes() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User>();

    useEffect(() => {
        const subscriber = auth()
            .onAuthStateChanged(response => {
                setUser(response);
                setIsLoading(false);

            });
        return subscriber;
    }, []);

    if (isLoading) {
        return <Loading />
    }

    return (
        // <NavigationContainer>
        //     <Center flex={1} px="3">
        //         <MainMenu />
        //     </Center>
        //   </NavigationContainer>
        <NavigationContainer>
            <ClientList/>
            
            {/* {user ? <AppRoutes /> : <Signin />} */}
        </NavigationContainer>
    )
}