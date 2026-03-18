import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import FlexpaySDK from 'react-native-sdk-flexpaie-sms';

const sdk = new FlexpaySDK({
  username: 'flexremit',
  password: 'flexremitinfoset',
});

export default function App() {
  const [phone, setPhone] = useState<string>('');
  const [sms, setSms] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendSms = async () => {
    setIsLoading(true);
    try {
      const response = await sdk.init();

      if (phone && sms) {
        if (response.code == '0') {
          await sdk.sendSms(phone, sms);
          Alert.alert('SMS envoyé!');
        } else {
          Alert.alert(response.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TextInput
          style={{
            height: 50,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
          }}
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />

        <TextInput
          multiline
          style={{
            height: 100,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
          }}
          onChangeText={(text) => setSms(text)}
          value={sms}
        />

        <Pressable
          disabled={isLoading}
          style={{
            backgroundColor: isLoading ? '#7a95ac' : '#2196F3',
            padding: 15,
            borderRadius: 10,
          }}
          onPress={sendSms}
        >
          {!isLoading && (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Send SMS
            </Text>
          )}
          {isLoading && (
            <Text
              style={{ color: 'gray', textAlign: 'center', fontWeight: 'bold' }}
            >
              Loading...
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
  },
});
