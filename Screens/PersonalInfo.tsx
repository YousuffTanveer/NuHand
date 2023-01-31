import {Text, View} from 'react-native';
import Footer from '../components/Footer'
const PersonalInfo = ({navigation}) => {
    return (
    <View>
    <Text>Personal Info</Text>
    <View>
        <Footer navigation={navigation} />
      </View>
     </View>
    )
}

export default PersonalInfo