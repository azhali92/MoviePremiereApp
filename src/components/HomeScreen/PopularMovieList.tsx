import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAllGenres, getAllPopularMovies } from '../../api/apiService';
import { Movie } from '../../types/Movie';
import { FlashList } from '@shopify/flash-list';
import MovieListItem from './MovieListItem';
import { useCommonStore } from '../../stores/commonStore';
import { getAllMoviesAsPerFilter } from '../../businesslogic/movies';
import { useNavigation } from '@react-navigation/native';

const PopularMoviesList: React.FC = () => {
  const [dataList, setDataList] = useState<Movie[]>([]);

  //THESE WILL BE USED FOR PAGINATION HANDLING
  const totalPageNumber = useRef<number>(0);
  const currentPageNumber = useRef<number>(0);

  const searchText = useCommonStore(state => state.searchText);
  const setGenres = useCommonStore(state => state.setGenres);

  const navigation = useNavigation();

  const getPopularMoviesAndGenre = async () => {
    Promise.all([getAllPopularMovies(), getAllGenres()]).then(values => {
      const popularMoviesListResponse = values[0];
      const genres = values[1];
      setGenres(genres.genres);
      totalPageNumber.current = popularMoviesListResponse.total_pages;
      currentPageNumber.current = 1;
      setDataList(popularMoviesListResponse.results);
    });
  };

  //FOR HANDLING PAGINATION
  const handleEndReached = useCallback(async () => {
    //IF USER IS USING FILTER, WE DON'T TRIGGER PAGINATION
    if (searchText != '') return;

    if (currentPageNumber.current < totalPageNumber.current) {
      let newPageNumber = currentPageNumber.current + 1;
      getAllPopularMovies(newPageNumber).then(data => {
        currentPageNumber.current = newPageNumber;
        setDataList(prev => [...prev, ...data.results]);
      });
    }
  }, [searchText]);

  useEffect(() => {
    getPopularMoviesAndGenre();
  }, []);

  const onPressMovieCard = (movie: Movie) => {
    navigation.navigate('MovieDetail', { data: movie });
  };

  return (
    <View>
      <Text style={styles.heading}>Popular Movies</Text>
      <FlashList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingStart: 10 }}
        horizontal={true}
        data={getAllMoviesAsPerFilter(dataList, searchText)}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <MovieListItem
            key={item.id}
            movie={item}
            onPressMovieCard={onPressMovieCard}
          />
        )}
        onEndReached={handleEndReached}
        onEndReachedThreshold={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    marginLeft: 12,
  },
});

export default PopularMoviesList;
