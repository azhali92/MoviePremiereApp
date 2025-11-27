import { StyleSheet, Text, View } from 'react-native';
import { useUserPrefStore } from '../stores/userPrefStore';
import { FlashList } from '@shopify/flash-list';
import WatchlistItem from '../components/WatchlistScreen/WatchlistItem';
import { Movie } from '../types/Movie';

const WatchListScreen: React.FC = () => {
  const watchList = useUserPrefStore(state => state.watchlist);

  const removeMovieFromWatchlist = useUserPrefStore(
    state => state.removeMovieFromWatchlist,
  );

  const onPressRemoveFromWatchlist = (movie: Movie) => {
    removeMovieFromWatchlist(movie.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Watchlist</Text>
      <FlashList
        showsVerticalScrollIndicator={false}
        data={watchList}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <WatchlistItem
            key={item.id}
            movie={item}
            onPressRemoveFromWatchlist={onPressRemoveFromWatchlist}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
});

export default WatchListScreen;
