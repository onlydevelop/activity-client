import base64
import re
import os
import requests
import json
import datetime

def repeat(c, n):
    r = ""
    for i in range(n):
        r = r + c
    return r

def encode(data):
    encodedBytes = base64.b64encode(data.encode("utf-8"))
    encodedStr = str(encodedBytes, "utf-8")
    return encodedStr

def banner(text):
    print(text)
    print(repeat("-", len(text)))

def post_activity(response):
    url = os.getenv('url')
    data = json.dumps(response)
    try:
        requests.post(url = url, data = data)
    except:
        print("Internet connection is down. Please check the Wifi modem!")
        sys.exit(1)

def is_within(from_hour, from_min, to_hour, to_min):
    now = datetime.datetime.now()
    current_date = now.strftime('%Y-%m-%d-%H:%M:%S')
    from_date = datetime.datetime(now.year, now.month, now.day, from_hour, from_min).strftime('%Y-%m-%d-%H:%M:%S')
    to_date = datetime.datetime(now.year, now.month, now.day, to_hour, to_min).strftime('%Y-%m-%d-%H:%M:%S')
    return current_date >= from_date and current_date <= to_date
