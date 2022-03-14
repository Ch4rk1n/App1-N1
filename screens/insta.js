import { StatusBar } from 'expo-status-bar';
import { Alert, Button, TextInput, View, StyleSheet, Image, Text, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image = { uri: "https://i.pinimg.com/736x/ac/80/59/ac8059a26f62d2ae04d7b504052d163c.jpg" };

const insta = () => (     
 <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
            <Image source={require('../assets/locked.png')} style={{width:30, height:30}}></Image>
            <Text>
                Enter the code sent to your number ending 8691 or use your Backup Codes.It may take
            </Text>
            <Text>
                few moments to receive SMS
            </Text>
            <TextInput 
                placeholder={'Enter Two-Factor code'}
            >
            </TextInput>
            <Button title="Login With Instagram" style={styles.button} color="gray">  </Button>
            <Button title="What is this?" color="transparent">  </Button>
            <Button title="Back to Login" color="transparent">  </Button>
            <Button title="Or" style={styles.border} color="gray">  </Button>
            <Button title="Repost without login" style={styles.border} color="gray">  </Button>
        </View>
    </ImageBackground>
  </View>
);
    
const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginTop: 0    
    },image: {
        width: '100%',
        flex: 1,
        justifyContent: "center"
      },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        backgroundColor: 'gray'
    },
    button: {
        color: 'black',
        justifyContent: "center",
        alignItems:'center',
    },
    center: {
        alignItems:'center',
    },
    border: {
        borderRadius: 100
    }
});
export default insta;