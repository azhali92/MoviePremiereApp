import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import WatchListScreen from '../screens/WatchListScreen';
import { createStaticNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { Movie } from '../types/Movie';

const icons = {
  Home: 'house',
  Watchlist: 'bookmark',
} as const;

const MainTabs = createBottomTabNavigator({
  screenOptions: ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      const iconName = icons[route.name as keyof typeof icons];
      return (
        <FontAwesome6
          name={iconName}
          iconStyle="solid"
          size={16}
          color={focused ? 'black' : '#bfbfbf'}
        />
      );
    },
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: '#bfbfbf',
    headerShown: false,
  }),
  screens: {
    Home: HomeScreen,
    Watchlist: WatchListScreen,
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Main: {
      screen: MainTabs,
      options: {
        headerShown: false,
      },
    },
    MovieDetail: {
      screen: MovieDetailsScreen,
      options: {
        headerShown: false,
      },
    },
  },
});

export type RootStackParamList = {
  Main: undefined;
  MovieDetail: { data: Movie };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const NavigationController = createStaticNavigation(RootStack);

export default NavigationController;
