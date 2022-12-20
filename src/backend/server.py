from flask import Flask
from flask_cors import CORS
from flask import request
app = Flask(__name__)
CORS(app)

import yfinance as yf
import boto3
import botocore
import json

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/create/', methods=['GET', 'POST'])
def createStockList():
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('paper-trade')

    content = request.json

    try:
        table.put_item(
            Item={
                    'userId': content['username'],
                    'stockList': []
            },
            ConditionExpression = 'attribute_not_exists(userId)'
    )
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] != 'ConditionalCheckFailedException':
            raise Exception('User creation error')

    return str(table.item_count)

