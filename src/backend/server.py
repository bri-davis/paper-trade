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


@app.route('/read/', methods=['GET', 'POST'])
def getStockList():
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('paper-trade')

    content = request.json

    try:
        response = table.get_item(
            Key={
                    'userId': content['username'],
            }
    )
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] != 'ConditionalCheckFailedException':
            raise Exception('Stocklist Retrieval Error')
    else:
        return response['Item']


@app.route('/add/', methods=['GET', 'POST'])
def add_item():
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('paper-trade')

    content = request.json

    try:
        response = table.update_item(
            Key={
                    'userId': content['username'],
            },
            UpdateExpression="SET stockList = list_append(stockList, :ticker)",
            ExpressionAttributeValues={
                ':ticker': [content['ticker']],
            },
            ReturnValues="UPDATED_NEW"
        )
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] != 'ConditionalCheckFailedException':
            raise Exception('Stocklist Update Error')
    else:
        return response['Attributes']


@app.route('/remove/', methods=['GET', 'POST'])
def remove_item():
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('paper-trade')

    content = request.json

    try:
        stocklist = table.get_item(
            Key={
                    'userId': content['username'],
            }
        )
        ind = stocklist['Item']['stockList'].index(content['ticker'])
        response = table.update_item(
            Key={
                    'userId': content['username'],
            },
            UpdateExpression="REMOVE stockList[{}]".format(ind),
            ReturnValues="ALL_NEW"
        )
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] != 'ConditionalCheckFailedException':
            raise Exception('Stocklist Update-Remove Error')
    else:
        return response['Attributes']

@app.route('/prices/', methods=['GET', 'POST'])
def view_prices():
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('paper-trade')

    content = request.json

    try:
        response = table.get_item(
            Key={
                    'userId': content['username'],
            }
    )
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] != 'ConditionalCheckFailedException':
            raise Exception('Stocklist Retrieval Error')
    else:
        stock_prices = [yf.Ticker(ticker).info['regularMarketPrice'] for ticker in response['Item']['stockList']]
        data = [{"Ticker": ticker, "Price": price} for ticker, price in zip(response['Item']['stockList'], stock_prices)]
        return json.dumps(data)