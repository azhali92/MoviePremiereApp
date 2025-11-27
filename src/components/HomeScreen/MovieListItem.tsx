import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Movie } from '../../types/Movie';
import { constructImageUrl } from '../../common/imageUtil';

type MovieListItemProps = {
  movie: Movie;
  onPressMovieCard: (movie: Movie) => void;
};

const MovieListItem: React.FC<MovieListItemProps> = ({
  movie,
  onPressMovieCard,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPressMovieCard(movie)}
      style={styles.container}
    >
      <Image
        source={{ uri: constructImageUrl(movie.poster_path) }}
        style={{ width: 200, height: 300 }}
        resizeMode="contain"
      />
      <Text numberOfLines={2} style={styles.title}>
        {movie.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    marginRight: 10,
    padding: 9,
    elevation: 10,
    marginVertical: 20,
    maxWidth: 220,
  },
  title: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: 600,
    minHeight: 40,
  },
});

export default MovieListItem;
