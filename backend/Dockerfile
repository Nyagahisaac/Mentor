FROM python:3.8

RUN mkdir /mentor
WORKDIR /mentor

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt


COPY . .