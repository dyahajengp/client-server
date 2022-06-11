FROM node:14

RUN apt-get update || : && apt-get install python -y
RUN apt-get update || : && apt-get install python3-pip -y

WORKDIR /app

COPY package*.json /app
COPY requirements.txt /app

RUN npm install
RUN pip3 install -r requirements.txt

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]