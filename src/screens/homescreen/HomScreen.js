import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Slider_home from '../../components/Slider_home';
import Styles from '../../styles/home_styles';

const { height } = Dimensions.get('window')
function HomeScreen(props) {
    return (
        <View style={Styles}>
            <Slider_home />
        </View>
    );
}

export default HomeScreen;