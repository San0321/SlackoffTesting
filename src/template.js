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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </head>
      
      <body>
        <div class="container" id="root">${body}</div>
      </body>
      
      <script src="/assets/bundle.js"></script>
    </html>
  `;
};
