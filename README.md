# Setting up environment

Download the repo and download the following files:
1. [Resnet model](https://drive.google.com/file/d/1EY9VVZKgFTvyOWjvYiqoJCh6VdaS5KuL/view?usp=sharing)
2. [Images](https://drive.google.com/file/d/1GiZvUp_tAZsl7QU3L6BKdkVpDc9eUiFF/view?usp=sharing)

Unzip the images.zip file and place both the images folder and the resnet model in the 'public' directory 

Next open a command-line window and run `yarn install` 
In the public directory run `pip install -r requirements.txt`

Next run `yarn start-flask-api` from the root directory to start the server.

Open a new command-line window and run `yarn start` to run the app.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Search the image repo either through keywords or by uploading an image. Add keywords using the add button and then press the search button to return images which match the keywords. 

NOTE: searching by image takes around 1.5min to process

Run `yarn test` to run the tests for the app