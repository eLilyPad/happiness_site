FROM python:3.9
WORKDIR /app/src/backend

ENV FLASK_APP=main.py

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . ./src/backend
EXPOSE 5000

CMD [ "python" , "src/backend/main.py"]