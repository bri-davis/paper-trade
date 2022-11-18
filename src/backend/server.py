from flask import Flask
from flask_cors import CORS
from flask import request
app = Flask(__name__)
CORS(app)

import yfinance as yf
import random
import boto3
import botocore

@app.route('/')
def hello_world():
    return 'Hello World!'