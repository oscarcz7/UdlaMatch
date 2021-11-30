import React from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';

const Card = props => {
  const { name, image, bio, age, career, university } = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.age}>{age}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.university}>{university}</Text>
            <Text style={styles.career}>{career}</Text>
          </View>

          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fefefe',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginEnd: 10
  },
  age: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'normal',
  },
  university: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginEnd: 10
  },
  career: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'normal',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});

export default Card;