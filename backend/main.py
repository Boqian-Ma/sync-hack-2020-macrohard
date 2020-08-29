import flask 
import json

from data import *

app = flask.Flask("__main__")
@app.route("/")
def index():
    pass
    # return flask.render_template("index.html", token="Hello flask+react")

@app.route("/login", methods=[POST, GET])
def login():
    
    pass

@app.route("/home", methods=[GET])
def home():
    # dump user company list 
    companies = DATA['users'] 
    # dump past 7 day data for piechart

    # (optional) live update of 
    pass


@app.route("/accounts", methods=[GET])
def accounts():
    # dump whole list of companies 
    pass

@app.route("/accounts/<company>", methods=[GET])
def company(company):
    # dump company data usage

    # dump indivisual comoany past 7 days data usage
    pass



if __name__ == "__main__":
    app.run(port=5000, debug=True)

 
