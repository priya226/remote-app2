The remote-app2 is one remote repository which can be ran independently and imported to other app using its remote entry.js
we configure croca.config.js where
  we define the component which are gonna expose to other  react-app 
  exposes: {
            // Expose your component
            "./App": "./src/App", // Adjust the path based on your folder structure
          },
  we can import App to host-app
  Need to make sure the react version react-dom version which are kept in shared key
