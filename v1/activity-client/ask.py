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

is_not_allowed(15, 30, 16, 30, 'STUDY TIME')

questions = question.get()
question.ask(questions)
