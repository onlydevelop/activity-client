#!/usr/bin/env python3

import sys

from os.path import join, dirname
from dotenv import load_dotenv

from util import question, util

# Create .env file path.
dotenv_path = join(dirname(__file__), '.env')

# Load file from the path.
load_dotenv(dotenv_path)

def is_not_allowed(from_hour, from_min, to_hour, to_min, message):
    if util.is_within(from_hour, from_min, to_hour, to_min):
        util.banner(f'It is {message}. Please shutdown the computer.')
        sys.exit(0)

# Marked the time which are not allowed
is_not_allowed(0, 0, 4, 59, 'SLEEPING TIME')
is_not_allowed(5, 0, 6, 30, 'READING TIME')
is_not_allowed(6, 31, 8, 30, 'EXERCISE TIME')
is_not_allowed(8, 31, 9, 0, 'BREAKFAST TIME')
is_not_allowed(10, 0, 11, 30, 'STUDY TIME')
is_not_allowed(11, 31, 1, 0, 'PLAY TIME')
is_not_allowed(13, 0, 14, 30, 'LUNCH TIME')
is_not_allowed(15, 31, 16, 30, 'STUDY TIME')
is_not_allowed(16, 31, 18, 0, 'PLAY TIME')
is_not_allowed(18, 1, 20, 0, 'STUDY TIME')
is_not_allowed(20, 30, 21, 0, 'DINNER TIME')
is_not_allowed(21, 1, 21, 30, 'READING TIME')
is_not_allowed(21, 31, 23, 59, 'SLEEPING TIME')

questions = question.get()
question.ask(questions)
