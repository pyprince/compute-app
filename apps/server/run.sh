#!/bin/sh

# db migrate
alembic upgrade head

# run fastapi app
python src/main.py