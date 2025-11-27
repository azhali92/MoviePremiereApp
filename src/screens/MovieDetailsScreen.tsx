import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../navigation/mainNavigator';
import { constructImageUrl } from '../common/imageUtil';
import { useCommonStore } from '../stores/commonStore';
import {
  getGenreNamesOfMovie,
  isMoviePartOfWatchList,
} from '../businesslogic/movies';
import { useUserPrefStore } from '../stores/userPrefStore';
import { useCallback } from 'react';

const MovieDetailsScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'MovieDetail'>>();

  const genres = useCommonStore(state => state.genres);

  const { data } = route.params;

  const navigation = useNavigation();

  const watchList = useUserPrefStore(state => state.watchlist);
  const removeMovieFromWatchlist = useUserPrefStore(
    state => state.removeMovieFromWatchlist,
  );
  const addMovieToWatchlist = useUserPrefStore(
    state => state.addMovieToWatchlist,
  );

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const onAddOrRemoveFromWatchlist = useCallback(() => {
    if (isMoviePartOfWatchList(watchList, data.id)) {
      removeMovieFromWatchlist(data.id);
    } else {
      addMovieToWatchlist(data);
    }
  }, [watchList]);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: constructImageUrl(data.backdrop_path ?? '') }}
      />
      <Text style={styles.title}>{data.title}</Text>
      <Text
        style={styles.releasedate}
      >{`Release Date : ${data.release_date}`}</Text>
      <Text style={styles.description}>{data.overview}</Text>
      <Text style={styles.releasedate}>{`Genre(s) :`}</Text>
      <Text style={styles.genre}>
        {getGenreNamesOfMovie(genres, data.genre_ids)}
      </Text>

      <TouchableOpacity onPress={onAddOrRemoveFromWatchlist}>
        <Text style={styles.button}>
          {isMoviePartOfWatchList(watchList, data.id)
            ? 'Remove from Watchlist'
            : 'Add to Watchlist'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressGoBack}>
        <Text style={[styles.button, styles.buttonBack]}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: '100%',
    minHeight: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 27,
    marginHorizontal: 10,
    marginTop: 10,
  },
  description: {
    padding: 8,
    borderRadius: 6,
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  releasedate: {
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 10,
  },
  genre: {
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 6,
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: '#E49B0F',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
    borderRadius: 5,
    fontWeight: 600,
  },
  buttonBack: {
    marginTop: 20,
    backgroundColor: 'black',
    color: 'white',
  },
});

export default MovieDetailsScreen;
