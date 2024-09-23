#!/bin/sh

# db migrate
alembic upgrade head

# run fastapi app
python3 src/main.py