import { ScrollView, StyleSheet } from 'react-native';
import PopularMovieList from '../components/HomeScreen/PopularMovieList';
import TopFilterBar from '../components/HomeScreen/TopFilterBar';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <TopFilterBar />
      <PopularMovieList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
});

export default HomeScreen;
