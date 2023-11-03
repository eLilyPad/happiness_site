FROM python:3

WORKDIR /app

ENV FLASK_APP=main.py

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . ./src/backend

CMD [ "python" , "src/backend/main.py"]