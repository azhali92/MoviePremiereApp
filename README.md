# MyTheres Movie Premiere App 🎥

This App is created by **Azhar Ali** for MyTheresa's internal evaluation

### Quick Glance on Main Features :

- List to Show Most Popular Movies
- **Search bar** to search for movies from the list based on **title**
- View more details of each movie via Movie Detail Screen
- Ability to add movies to Watchlist which can be accessed from the **bottom tab**
- The movies added to Watchlist are **fully persisted across consecutive app launches**

<br/>

#### Details on Framework, Libraries etc. used

- **Language**: Typescript
- **React Native Version**: 0.82.1
- **Node**: v25.2.1
- **npm**: 10.5.2
- **State Management and Persistance**: Zustand 5.0.8
- **Icons**: Font Awesome 6
- **Navigation Library**: React Navigation v7
- **Optimized Flatlist**: Flashlist 2.2.0
- **Android Compile SDK**: 36

## How to build and run the project on Windows OS on Android Emulator

Pre-requisite : Please ensure you have the following installed.

- Node
- npm
- JDK 17
- Android Studio. You'll also need to setup an emulator to run the build. See here for a guide :

Once you have the above installed and setup, the proceed with the following : https://developer.android.com/studio/run/emulator#avd

- Clone the repo locally
- The project relies on a `.env` file with the following content. Create it at the root of the project. ⚠️ Your project won't work without this! :

```markdown
API_BASEURL="https://api.themoviedb.org/3"
IMAGE_BASEURL="https://image.tmdb.org/t/p"
API_KEY="abcd"
```

1. API_BASEURL is the baseUrl of the TMDB API service
2. IMAGE_BASEURL is the baseUrl of the TMDB Image CDN which we user
3. API_KEY is your TMDB API Key for accessing their APIs

- cd into the root of the project via a terminal and run the following :
  `npm i`
- Assuming you have setup an emulator, run the following to build your App and run on the emulator : `npm run android`

## Brief description of the main features of the App

#### Home Screen :

- This screen contains a ScrollView as the main container. There is a horizontal list for showing "Popular Movies"
- The horizonal list supports **pagination**. When user is about to reach the end of the list, the next set of data is fetched and appended to the list, thus giving a seamless experience to the user
- At the top of the screen, there is a simple search bar. It allows to seach based on title of the movie

  ![alt text](https://i.postimg.cc/7YnNSVC4/Screenshot-2025-11-28-005039.png)

  <br><br>

#### Movie Detail Screen :

- This screen shows the main banner along with important data like release date, genres and synopsis
- There is a button to Add the movie to user watchlist. If a specific movie is already in the watchlist, the button changes 'Remove from Watchlist'

  ![alt text](https://i.postimg.cc/65fhC07T/Screenshot-2025-11-28-005307.png)
  <br>

#### Watchlist :

- All the movies added to watchlist is seen here in a neat vertical list. User can see thumbnail and title
- There is a button to remove from watchlist
- This list is **persisted across launches**

  ![alt text](https://i.postimg.cc/gkHK3DwJ/Screenshot-2025-11-28-005217.png)

<br>
<br>
<br>
