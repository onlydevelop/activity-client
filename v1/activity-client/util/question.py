import os
import sys
import requests
import json
import random
import time

from util import util

def download():
    url = os.getenv('s3url')
    try:
        r = requests.get(url, allow_redirects=True)
        open('questions.json', 'wb').write(r.content)
    except:
        print("Internet connection is down. Please check the Wifi modem!")
        sys.exit(1)

# Structure of the data
# [
#   {
#     "subject": "Science",
#     "disabled": "yes",
#     "topics": [
#       {
#         "topic": "Houses",
#         "questions": [
#           {
#             "question": "House on wheels is called ____",
#             "type": "choice",
#             "answer": {
#               "options": ["caravan", "houseboat", "stilt house", "building"],
#               "correct": "caravan"
#             }
#           }
#         ]
#       }
#     ]
#   },
#   {
#     "subject": "Maths",
#     "topics": [
#       {
#         "topic": "AddSubtract",
#         "questions": [
#           {
#             "question": "23 + 4 = ____",
#             "type": "choice",
#             "answer": {
#               "options": ["25", "26", "27", "28"],
#               "correct": "27"
#             }
#           }
#         ]
#       }
#     ]
#   }
# ]
def get():
    download()
    with open('questions.json') as json_file:
        try:
            data = json.load(json_file)
        except:
            print("There is an error parsing the questions!")
            sys.exit()
        finally:
            return data

def ask(data):
    random.shuffle(data)
    for item in data:
        if "disabled" in item:
            continue
        util.banner(item["subject"])
        for topic in item["topics"]:
            if "disabled" in topic:
                continue
            util.banner(topic["topic"])
            questions = topic["questions"]
            random.shuffle(questions)
            for question in questions:
                if "disabled" in question:
                    continue
                print("")
                util.banner(question["question"])
                options = question["answer"]["options"]
                random.shuffle(options)
                for i, option in enumerate(options, start=1):
                    print(f"{i}: {option}")
                res = check(item["subject"], topic["topic"], question)
                print(res)

def prepare(subject, topic, start_time, request, response, correct, delta):
    data = {
        "sub_topic": f"{subject}-{topic}",
        "start_time": start_time,
        "request": request,
        "response": response,
        "correct": correct,
        "delta": delta
    }
    util.post_activity(data)
    return data

def check(subject, topic, question):
    start_time = int(time.time())
    res = input("Answer: ")
    if res == question["answer"]["correct"]:
        correct = 'yes'
        print("You are correct!")
    else:
        correct = 'no'
        print("That's not correct!")
    end_time = int(time.time())
    return prepare(subject, topic, start_time, util.encode(question["question"]), util.encode(res), correct, (end_time - start_time))
