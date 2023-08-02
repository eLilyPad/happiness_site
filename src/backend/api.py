from flask import Flask, render_template

import data

api = Flask(__name__)

@api.route('/list')
def list():
    return {'list': [1, 2, 3, 4]}

@api.route('/countries')
def countries():
    return {'countries': data.get_countries()}