import { StatusBar } from 'expo-status-bar';
import { Alert, Button, TextInput, View, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const login = () => (     
    <View style={styles.container}>
       <Image source={require('../assets/facebookLogo.png')} style={{width:200, height:50}}></Image> 
        <TextInput
            placeholder={'username'}
            style={styles.input}
        />
        <TextInput
            placeholder={'password'}
            style={styles.input}
        />
        <Button
            title="perfil"
            onPress={() => navigation.navigate('perfil')}
        />
        
    </View>  
)
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3C5996',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        backgroundColor: 'white'
    }
});
export default login;