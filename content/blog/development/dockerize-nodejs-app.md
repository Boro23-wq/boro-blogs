---
title: Simple NodeJS REST API dockerized.
description: Steps to Dockerize a Node.js application easily.
date: 2020-08-29
category: 'development'
draft: false
---

![](https://d6vdma9166ldh.cloudfront.net/media/images/c403b138-fb43-44a3-8789-4bc1236b2d93.jpg)

#### ⦾ **_Source - [Zeo Learn](https://www.zeolearn.com/magazine/how-to-dockerize-a-nodejs-app)_**

Today we have a beginner friendly tutorial, where we will look to dockerize a very simple NodeJS application and understand the benefits of using Docker.

We’ll build a Docker image that automates any changes to the simple NodeJS application, recompiles the build file and re-runs the entire application without any manual intervention.

Before we move ahead and build the application right away, there's something that we need to understand and that is why do we even need Docker.

## Why we need Docker?

Docker automates and eases the development lifecycle by allowing developers to not bother about specific ecosystem and work in standardized environments.

![Docker Growth](https://apiumhub.com/wp-content/uploads/2017/04/docker-growth.png)

#### ⦾ **_Source - [Apium Hub](https://apiumhub.com/tech-blog-barcelona/top-benefits-using-docker/)_**

Docker containers are very effective for continuous integration and continuous delivery (CI/CD) workfows.

**_Consider the following example scenario:_**

- A developer writes code locally on his machine and shares the work with its peers using Docker containers.
- They use Docker to push their applications into a test environment which then execute any automated and manual test scripts written by the developers.
- When developers bump into a bug, they can pull the code, make changes, fix them in the development environment and redeploy them to the test environment for further testing and validation.
- When testing is complete, the application is then pushed as an updated image to the production environment.

</br>

Now that we understand the importance of Docker let us go ahead and build our Node application.

## NodeJS Application

We have a simple Node and Express application that serves a static Hello Docker! content when the only '/' endpoint is hit by a `GET` request.

The application listens on local host port 3000 for any incoming requests.

First, create a new file called `index.js` within any directory of your choice, call it `rest-api-docker`. Inside the `index.js` file which resides in our `rest-api-docker` directory, include the code below:

```javascript
// index.js
const express = require('express')
const app = express()

// PORT
const PORT = 3000

app.get('/', (req, res) => res.send('Hello Docker!'))

app.listen(PORT, () => {
  console.log(`My REST API running on PORT ${PORT}`)
})
```

Since we are building an Express app we need to include the Express library into the Docker Container as well. The way we do it is initialize a `package.json` file first.

To initialize a `package.json` file just type `npm init` on the terminal inside the project directory.

Once you follow the instructions your `package.json` should look something like this after installing ExpressJS library.

```javascript
// package.json
{
  "name": "rest-api-docker",
  "version": "1.0.0",
  "description": "REST API DOCKER USING NODE AND EXPRESS",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

To test the application on your local machine type `npm start` to launch the application on your localhost. Navigate to http://localhost:3000/ and there you go, you can see Hello Docker! on your browser.

## Dockerizing NodeJS Application

We now create a lightweight docker image, for this project we use the Alpine based -slim image which is fairly lightweight. The ‘-slim’ image is built from Debian Linux.

```javascript
//  The ‘-slim’ image
FROM node:9-slim
//  WORKDIR defines the working directory
// our app will reside at
WORKDIR /app
// Copy the package.json file to our
// app directory for installing neccessary packages
COPY package.json /app
//  Run `npm install` to run packages
// specified in the package.json file
RUN npm install
//  Copy the rest of our application
//  to the app directory
COPY . /app
//  Run the application
CMD ["npm", "start"]
```

Docker is intelligent enough to cache the outcome of each individual commands so everytime we build a Docker image we don't have to re-run the same command twice.

This effective process reduces massive time and resource drain from overdoing things.

## Build the Docker Image

Build the Docker Image by running through the following docker command on your terminnal.

```bash
> docker build -t rest-api-docker .
```

This command will run through all the steps mentioned within your Dockerfile and build a Docker image for us.

## Running our Docker Image

Once we have successfully built the Docker Image, we can now run multiple docker containers based on the Docker image that we created by running the following command:

```bash
> docker run -d -p 9000:3000 rest-api-docker
```

This starts up our Docker container based off our rest-api-docker docker image and expose it on port 9000 on our machine.

The `-d` flag specifies we are running the container on detached mode. This ensures that the applications that are running within your container are able to run unattended, much in the same way as a daemonized service.

The `-p 9000:3000` essentially maps any request from port 9000 from our local machine to the internal docker port that listens on port 3000;

## Viewing running Docker Containers

The `docker ps` command shows all running containers by default. If you wish to see all the running and stopped containers, use the -a (or --all) flag:

Now, you probably notice our rest-api-docker container running.

## Daemon Service

Now we look to introduce the automated service for our running Docker container to pick up any changes and re-run the container.

We do this by installing `nodemon` using the following command.

```javascript
$ npm install --save nodemon
```

Note that nodemon has been added to our package.json as a dependency, and now we can update our start command to run nodemon as:

```javascript
package.json
{
  "name": "rest-api-docker",
  "version": "1.0.0",
  "description": "REST API DOCKER USING NODE AND EXPRESS",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

Now with this changes we can go ahead and rebuild our docker image using the following:

```javascript
$ docker build -t rest-api-docker .
```

We can then run this with the `-v` flag as mentioned before like so:

```javascript
$ docker run -it -p 9000:3000 -v $(pwd):/app rest-api-docker
```

Navigate to http://localhost:9000, and now you should see the application up and running, and any further changes will be reflected and automatically run by the nodemon service.

There you go we have successfully dockerized a very simple NodeJS application and understood the concept of Docker.

Happy Coding!

---

### References

- Original post by [Tutorial Edge](https://tutorialedge.net/docker/working-with-docker-nodejs/)
- Reference Book - [Docker Docs](https://docs.docker.com/get-started/overview/#:~:text=other%20virtualization%20technologies.-,Containers,based%20on%20its%20current%20state.)
