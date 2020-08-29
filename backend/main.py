import flask 

app = flask.Flask("__main__")

@app.route("/")
def my_index():
    pass
    # return flask.render_template("index.html", token="Hello flask+react")




if __name__ == "__main__":
    app.run(port=5000, debug=True)

 
