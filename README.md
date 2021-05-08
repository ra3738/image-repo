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

Run `yarn test` to run the tests for the app


https://user-images.githubusercontent.com/34564310/117523153-09c27600-af6c-11eb-9dab-8f4b651e6e21.mov


NOTE: searching by image takes around 1.5min to process. Clip below has been sped up


https://user-images.githubusercontent.com/34564310/117523217-776ea200-af6c-11eb-9dda-176a1b9c4513.mov

