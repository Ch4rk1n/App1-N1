import { StatusBar } from 'expo-status-bar';
import { Text, Alert, Button, TextInput, View, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const perfil = () => (    
    <View>
        <View
            style={{
            flexDirection: "row",
            height: 30,
            }}>
            <TextInput style={{backgroundColor:"white",width:300}}>Search..</TextInput>
            
            
        </View>
        <View style={{ backgroundColor: "blue", flex: 0.3}} />
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
export default perfil;