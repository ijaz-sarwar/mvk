import * as React from "react"
import { View } from "react-native"
import Slider from "react-native-hook-image-slider"
import { Picker } from '@react-native-picker/picker';

const Slider_home = () => {
    return (
        <View>
            <Slider
                images={[
                    "../assets/images/asd.png",
                    "../assets/images/mc.png",
                    "../assets/images/jjj.png",

                ]}
            />
        </View>
    )
}
export default Slider_home;