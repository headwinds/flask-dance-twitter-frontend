# Tech
* Python, flask & flask-dance
* VueJS & Nuxt 
* Twitter Auth 

## Flow

An example of how to Signin with Twitter using VueJS and Python's flask.

Step 1 - The user clicks Signin with Twitter.

![Alt text](step1.png?raw=true) 

Step 2 - The app is redirected to the Twitter confirmation page.

![Alt text](step2.png?raw=true) 

Step 3 - The user accepts and is redirected back to the app.

![Alt text](step3.png?raw=true) 

## Demo

[https://probe.now.sh](https://probe.now.sh)

## Getting Started

### Build the Vue 

This will create a dist directory with the all static content and will automatically copy the built folder into python folder via gulp.

Please edit the gulpfile in the vue folder.

```
yarn build
```

### Build the Python 

```
pip install -r requirements.txt
python run.py
```

Open to http://127.0.0.1:5000 not localhost:5000 or 0.0.0.0:5000!

### Deploy as a Docker

```
docker build -t probe .
docker run -p 5000:5000 probe
```

To see that the docker is running: `docker image ls`

For this example, I'm using [zeit.co](https://zeit.co/) as the hosting company and you can simply deploy the project like so:

```
now
```

## Twitter Settings

These are the callback urls I've used in my Twitter app settings to test locally and live. 

```
http://127.0.0.1:5000/login/twitter/authorized
https://probe.now.sh/login/twitter/authorized
```

## Saving the Twitter Token 

This demo does not yet implement that [SQL backend recommended by flask-dance](https://flask-dance.readthedocs.io/en/latest/backends.html#sqlalchemy) where you should save the authorization token in database so that the user does not need to authorization again when they return to the app after their flask session has expired. 

# Credit 

* [flask-dance](https://github.com/singingwolfboy/flask-dance)
* [flask-vuejs-template](https://github.com/gtalarico/flask-vuejs-template)

![Alt text](probe.jpg?raw=true)  