import {View, Text, SafeAreaView, ScrollView, FlatList, ActivityIndicator, TouchableOpacity} from "react-native";
import {COLORS, SIZES} from "../../constants";
import {Nearbyjobs, Popularjobs, Welcome} from "../../components";
import PopularJobCard from "../../components/common/cards/popular/PopularJobCard";
import useFetch from "../../hook/useFetch";
import styles from "./FavoriteScreen.style";
import {useState} from "react";

const FavoriteScreen = ({navigation}) => {
    const {data, isLoading, error} = useFetch("search");
    const [selectedJob, setSelectedJob] = useState();

    const handleCardPress = (item) => {
        setSelectedJob(item.job_id);
        navigation.navigate('JobDetails', { id: item.job_id })
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.cardContainer}>
                        {isLoading ? (
                            <ActivityIndicator size='large' color={COLORS.primary}/>
                        ) : error ? (
                            <Text>Something went wrong</Text>
                        ) : (
                            data?.map((job) => (
                                <View style={styles.card} key={job.job_id}>
                                    <PopularJobCard
                                        item={job}
                                        handleCardPress={handleCardPress}
                                    />
                                </View>
                            ))
                        )}

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FavoriteScreen