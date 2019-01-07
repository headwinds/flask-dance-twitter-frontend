import os
from flask import Flask, current_app, send_file, redirect, url_for, json
from flask_dance.contrib.twitter import make_twitter_blueprint
from flask_dance.contrib.github import make_github_blueprint
from flask_cors import CORS
from werkzeug.contrib.fixers import ProxyFix
from flask_restful import Api as API
from flask_cors import CORS
from routes import route_dict

from api import api_bp
# from .client import client_bp

app = Flask(__name__)

app = Flask(__name__, static_folder='./dist/static')
app.wsgi_app = ProxyFix(app.wsgi_app)

CORS(app)
app.register_blueprint(api_bp)

# from flask import session
# session.clear()

app.secret_key = "viper-probe2" # change the secret to clear the session!

# app.register_blueprint(client_bp)

# from .config import Config
# app.logger.info('>>> {}'.format(Config.FLASK_ENV))

from routes.twitter import twitter_bp
from routes.github import github_bp

app.register_blueprint(twitter_bp, url_prefix="/login")
app.register_blueprint(github_bp, url_prefix="/login")

api = API(app)

# Add routes from /routes/__init__.py
for route, resource in route_dict.items():
    api.add_resource(resource, route)

@app.route("/hello")
def hello_world():
    return 'Hello, World!'    

app.run(host='0.0.0.0')
app.run(port=5000)

# To Run:
# python app.py
# or
# python -m flask app
