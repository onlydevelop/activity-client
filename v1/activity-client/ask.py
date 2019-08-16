#!/usr/bin/env python3

from os.path import join, dirname
from dotenv import load_dotenv

from util import question

# Create .env file path.
dotenv_path = join(dirname(__file__), '.env')

# Load file from the path.
load_dotenv(dotenv_path)

questions = question.get()
question.ask(questions)
