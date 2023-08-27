from flask import Flask, jsonify, render_template

import data

api = Flask(__name__)

@api.route('/list')
def list():
    return {'list': [1, 2, 3, 4]}

@api.route('/countries')
def countries():
    return {'countries': data.get_countries()}

@api.route('/table')
def table():
    table_data = data.get_table_data(
        year = 2015, 
        sort_by = 'happiness_score', 
        columns = ['Country', 'happiness_score']
    )
    
    # if table_data is None:
    #     return 501

    return jsonify(table_data)
