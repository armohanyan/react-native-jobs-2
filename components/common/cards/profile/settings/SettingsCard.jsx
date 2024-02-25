import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from './SettingsCard.style'

const SettingsCard = ({ item }) =>  {
    return (
        <TouchableOpacity>
            <View style={styles.settingListContainer}>
                <View style={styles.iconsContainer(item.bgColor)}>
                    <Image source={item.icon}  style={styles.icons}/>
                </View>

                <Text style={styles.settingLabel}>{item.label}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SettingsCard