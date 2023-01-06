# Instructions to run

- Clone repository
- run "npm install"
- run "npm start"

# Implementation details worth mentioning

- I've made an assumption that top 10 movies/tv shows won't change between two consecutive app openings (so I store them locally).
- Some movies/tv shows have trailer videos which are unavailable through player (for example, youtube private videos). There isn't an easy way available to cover that case so I left it like that. 
- App si fully responsive


# App functionalities overview

- **Application is getting data by TMDB API.**

## View Movies / TV Shows

- Clicking on a tab loads the top 10 MOVIES/TV SHOWS depending on the selected tab.
- The search field is live and reacts to any change in the input field.
- The search fires a request on the search endpoint from TMDB and doesn't filter the top 10 results.
- The search is performed only when there are 3 or more characters in the search bar and it is triggered only one second after the user has stopped typing.
- When there are fewer than 3 characters in the search bar, the content reverts back to the top 10 MOVIES/TV SHOWS.
- Switching between tabs while searching triggers the search again with the same search term for the selected tab and updates the results.


![image](https://user-images.githubusercontent.com/73321593/211110223-74583d80-72fa-4c77-ad5f-dadf1bc6d284.png)


![image](https://user-images.githubusercontent.com/73321593/211110269-c52ddae3-56de-4ed2-8891-7c8fd1228c5e.png)



## View Movie / TV Show details

- When the user clicks on a specific MOVIE/TV SHOW, he is taken to the details view.
- In case of Movies/TV Shows which have a trailer, trailer video is shown instead of the cover image.





![image](https://user-images.githubusercontent.com/73321593/211110306-6a99ea4e-4f50-4afa-9087-5d816e0812a3.png)


![image](https://user-images.githubusercontent.com/73321593/211110320-bbfe641e-ac01-45c7-9f13-1b428fe6770f.png)

