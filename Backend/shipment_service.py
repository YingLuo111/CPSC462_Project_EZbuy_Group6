# CPSC462 Project: EZBuy

# Professor: Lidia Morrison

# Team members:
#     Ying Luo,            yingluo_holiday@csu.fullerton.edu
#     Gabriel Magallanes,  gabe695@csu.fullerton.edu
#     Juheng Mo,           henrymo@csu.fullerton.edu
#     Mohammad Mirwais,    mirwais.88@csu.fullerton.edu

from flask import Flask, request, g, jsonify
from datetime import datetime
import sqlite3
import json
from utils import jwt_token_required
from flask_cors import CORS

app = Flask(__name__)
app.config.from_envvar('APP_CONFIG')
DATABASE_PATH = app.config.get("DATABASE")
CORS(app)


def get_db():
    """ Get database connection to Sqlite3.

        :returns: database connection

    """
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE_PATH)
    return db


@app.teardown_appcontext
def close_connection(exception):
    """ Close database connection on application finished.
    """
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route('/')
def shipmentService():
    return 'Welcome to Shipment Service!'


@app.route('/shipment/', methods=['POST'])
def addShipment():

    dataDict = json.loads(request.data)

    userID = dataDict['UserID']
    orderID = dataDict['OrderID']
    addr_City = dataDict['Addr_City']
    addr_State = dataDict['Addr_State']
    addr_Street = dataDict['Addr_Street']
    zipCode = dataDict['ZipCode']
    phoneNumber = dataDict['PhoneNumber']

    try:
        db_connection = get_db()

        db_query = f"INSERT INTO Shipments \
                        (UserID, OrderID, Addr_City, Addr_State, Addr_Street, ZipCode, PhoneNumber) \
                        VALUES \
                        ('{userID}','{orderID}', '{addr_City}', '{addr_State}','{addr_Street}', '{zipCode}', '{phoneNumber}')"

        # insert the new user information to database
        cur = db_connection.cursor()
        cur.execute(db_query)
        db_connection.commit()
    except Exception as e:
        # return status code 500 when database operation fails
        return internal_server_error(500, str(e))

    return jsonify({'success': True})


@app.route('/shipment/<orderID>', methods=['GET'])
def getShipment(orderID):

    shipment = None

    try:
        db_connection = get_db()

        db_query = f"SELETE * \
            FROM Shipments \
            WHERE \
            OrderID = '{orderID}'"

        # insert the new user information to database
        cur = db_connection.cursor()
        cur.execute(db_query)
        db_connection.commit()

        rows = cur.fetchall()

        shipment = rows[0]

    except Exception as e:
        # return status code 500 when database operation fails
        return internal_server_error(500, str(e))

    return jsonify({'success': True, 'shipment': shipment})


@ app.errorhandler(401)
def unauthorized(e, message):
    """ Error handler on status code 401
    """
    return jsonify({'success': False, 'message': message}), 401


@ app.errorhandler(400)
def bad_request(e, message):
    """ Error handler on status code 400
    """
    return jsonify({'success': False, 'message': message}), 400


@ app.errorhandler(500)
def internal_server_error(e, message):
    """ Error handler on status code 500
    """
    return jsonify({'success': False, 'message': message}), 500


if __name__ == '__main__':
    app.run()