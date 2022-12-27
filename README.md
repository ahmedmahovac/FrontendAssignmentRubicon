# Instructions to run

- node_modules are not in repository, they have to be installed with "npm install"
- App can be run with "npm start"

# Implementation details worth mentioning

- I've made an assumption that top 10 movies/tv shows won't be changed between two consecutive app openings (so I store them locally). That's how I understood assignment description. 
- Some movies/tv shows have trailer videos which are unavailable through player (for example, youtube private videos). There isn't available an easy way to cover that case so i left it like that. 
- Context is used for state management
- Only functional components are used (including stateful components)
- ESLint was used throughout development process
- App si fully responsive
- No tests were made


