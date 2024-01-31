import React from "react";
import { View, Text, Image, Linking, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import externalStyles from "./ProfileCardStyles";

const twitch = <Icon name={'twitch'} size={40} color={'purple'} />; 
const codepen = <Icon name={'codepen'} size={40} color={'blue'} />;  
const pinterest = <Icon name={'Pinterest'} size={40} color={'red'} />; 
const linkedin = <Icon name={'linkedin'} size={40} color={'blue'} />;  


const ProfileCard = () => {
    const user = {
        avatar: "https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-anime-avatars-gif-discord-66.gif",
        coverPhoto: "https://wallpapercave.com/wp/wp2730855.gif",
        name: "Javier Catucuago",
        facebookProfile: "https://www.facebook.com/javi.pxul"  
    }


    return (
        <View style={externalStyles.container}>
            <Image source={{uri: user.coverPhoto}} style={externalStyles.coverPhoto}/>
            <View style={externalStyles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={externalStyles.avatar}/>
                <Text style={externalStyles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={externalStyles.buttonContainer}>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.twitch.tv/javiercat1')}>
                    {twitch}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://codepen.io/javier-catucuago')}>
                    {codepen}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.pinterest.es/javiercatucuago/')}>
                    {pinterest}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.linkedin.com/in/javier-catucuago-510022266/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default ProfileCard
