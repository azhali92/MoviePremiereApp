import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Movie } from '../../types/Movie';
import { constructImageUrl } from '../../common/imageUtil';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

type WatchListItemProps = {
  movie: Movie;
  onPressRemoveFromWatchlist: (movie: Movie) => void;
};

const WatchlistItem: React.FC<WatchListItemProps> = ({
  movie,
  onPressRemoveFromWatchlist,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: constructImageUrl(movie.poster_path) }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text numberOfLines={2} style={styles.title}>
        {movie.title}
      </Text>

      <TouchableOpacity
        style={styles.removecontainer}
        onPress={() => onPressRemoveFromWatchlist(movie)}
      >
        <FontAwesome6
          name={'trash'}
          iconStyle="solid"
          size={22}
          color={'#C76E00'}
        />
        <Text style={styles.removetext}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#E5E4E2',
    padding: 9,
    elevation: 10,
    marginVertical: 10,
    width: '99%',
    flexDirection: 'row',
  },
  title: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: 600,
    minHeight: 40,
    marginLeft: 20,
  },
  image: { width: 150, height: 220 },
  removecontainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    gap: 4,
    flexDirection: 'row',
    borderColor: '#C76E00',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  removetext: {
    color: '#C76E00',
  },
});

export default WatchlistItem;
