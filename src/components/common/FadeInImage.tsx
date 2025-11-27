import React, { useState } from 'react';
import {
  View,
  Image,
  Animated,
  StyleSheet,
  ImageStyle,
  ViewStyle,
} from 'react-native';

interface FadeInImageProps {
  uri: string;
  fadeDuration?: number;
}

const FadeInImage: React.FC<FadeInImageProps> = ({
  uri,
  fadeDuration = 500,
}) => {
  const [imageOpacity] = useState(new Animated.Value(0));

  const handleLoadEnd = () => {
    Animated.timing(imageOpacity, {
      toValue: 1,
      duration: fadeDuration,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={[styles.container]}>
      <Image
        source={require('./../../assets/react-dark.png')}
        style={[styles.image]}
      />
      <Image
        source={{ uri }}
        style={[styles.image, styles.absoluteFill]}
        onLoadEnd={handleLoadEnd}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'yellow',
  } as ViewStyle,
  image: {
    width: 200,
    height: 300,
    backgroundColor: 'red',
  } as ImageStyle,
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } as ImageStyle,
});

export default FadeInImage;
