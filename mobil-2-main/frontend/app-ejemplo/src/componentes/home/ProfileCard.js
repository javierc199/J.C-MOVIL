import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./ProfileCardStyles";


const twitch = <Icon name={'twitch'} size={30} color={'black'}/>
const twitter = <Icon name={'twitter'} size={30} color={'black'}/>
const Pinterest = <Icon name={'Pinterest'} size={30} color={'black'}/>
const linkedin = <Icon name={'linkedin'} size={30} color={'black'}/>
const tiktok = <Icon name={'sitemap'} size={30} color={'black'}/>
const ProfileCard = () => {
    const user = {
        avatar: "https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-anime-avatars-gif-discord-66.gif",
        coverPhoto: "https://wallpapercave.com/wp/wp2730855.gif",
        name: "Javier Catucuago"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.twitch.tv/')
                }}>
                    {twitch}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://twitter.com/')
                }}>
                    {twitter}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.pinterest.es/')
                }}>
                    {pinterest}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://linkedin.com/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://tiktok.com/')}>
                    {tiktok}
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 20,  
        borderWidth: 5,
        borderColor: 'white'
    },

    name: {
        marginTop: 15,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'purple' 
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '80%', 
        justifyContent: 'space-around',  
    }
});
export default ProfileCard