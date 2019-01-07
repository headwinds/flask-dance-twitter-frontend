import os
import json
from flask import send_file
from flask_restful import Resource
from flask import Response, redirect, url_for
from libraries.responds import respond

from flask_dance.contrib.github import make_github_blueprint, github

github_bp = make_github_blueprint(
    client_id="77781ee12eca70e9ec04",
    client_secret="87bfce21ca96a95b37a9c574ffe486c5321de1d4",
)

class GithubEndPoint(Resource):
    """
    Endpoint for the twiiter auth 
    """
    def get(self):
        if not github.authorized:
            return redirect(url_for("github.login"))
        resp = github.get("/user")
        assert resp.ok
        return "You are @{login} on GitHub".format(login=resp.json()["login"])     