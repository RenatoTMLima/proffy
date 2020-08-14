import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/49873623?s=460&u=9899fe9d9c921a010e08ad0d8878cacf123920cd&v=4' }}
        />
        <View style={styles.profileInfo} >
          <Text style={styles.name} >Renato Takao</Text>
          <Text style={styles.subject} >Literatura</Text>
        </View>
      </View>

      <Text style={styles.bio} >Gosto de ler pra caralho</Text>

      <View style={styles.footer} >
        <Text style={styles.price} >
          Preço/hora {'   '}
          <Text style={styles.priceValue} >R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer} >
          <RectButton style={[styles.favoriteButton, styles.favorited]} >
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton} >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;