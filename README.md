# bookReviews
Node.js express server application to fetch book reviews and details.
Access the heroku deployment of application: https://apoo-bookreview.herokuapp.com/

# Setup
Clone the repo and install dependencies

git clone https://github.com/i-Apoorva/bookReviews.git
cd bookReviews
npm install

Create account on goodreads and get goodreads API Keys.

Create an .env file in the root directory as follows

GOODREADS_KEY= [Goodreads user Key]
GOODREADS_SECRET = [Goodreads user Secret]

To start express server, run the following
npm start
Visit http://localhost:3000/ on your browser to access the application.
