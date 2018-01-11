export default ({ body, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
        <script>
          // Initialize Firebase
          var config = {
            apiKey: "AIzaSyDBeT6tORtwV6FE-6tN9S4t13j4m8eTQ-k",
            authDomain: "slackoff-37e72.firebaseapp.com",
            databaseURL: "https://slackoff-37e72.firebaseio.com",
            projectId: "slackoff-37e72",
            storageBucket: "slackoff-37e72.appspot.com",
            messagingSenderId: "678929575073"
          };
          firebase.initializeApp(config);
        </script>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      
      <script src="/assets/bundle.js"></script>
    </html>
  `;
};
