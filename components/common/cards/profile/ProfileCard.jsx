import {View ,Image, Text} from "react-native";
import styles from './ProfileCard.style'

const ProfileCard = ({ avatar, profileName, email }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    source={avatar}
                    resizeMode='cover'
                    style={styles.avatar}
                />
            </View>


            <View style={styles.textContainer}>
                <Text style={styles.textName}>{profileName}</Text>
                <Text style={styles.textEmail}>{email}</Text>
            </View>
        </View>
    )
}

export default ProfileCard