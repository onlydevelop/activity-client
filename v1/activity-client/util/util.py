import base64
import re
import os
import requests
import json

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
