<a id="readme-top"></a>

<div align="center">
  <a href="https://www.hasibiqbal.dev">
    <img src="public/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">Hasib's Portfolio</h2>

  <p align="center">
    Portfolio website built with React.
    <br />
    <!-- <a href="https://github.com/hasibiqbal207/portfolio"><strong>Explore the docs »</strong></a>
    <br /> -->
    <br />
    <a href="https://www.hasibiqbal.dev">View Demo</a>
    ·
    <a href="https://github.com/hasibiqbal207/portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/hasibiqbal207/portfolio/issues">Request Feature</a>
  </p>
</div>
  
## Portfolio Web Application 

  * [Project Overview](#Project-Overview)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Database](#database)
  * [Getting Started](#getting-started)
      - [Prerequisites](#prerequisites)
      - [Usage Instructions](#usage-instructions)
  * [Contributing](#contributing)
  * [License](#license)

## Project Overview
I developed a personal portfolio website to showcase my work as a software engineer. The site serves as an online resume, highlighting my skills, projects, and professional experience. It provides potential employers, clients, and collaborators with a clear understanding of my expertise in software development. The website is designed to be responsive, user-friendly, and visually appealing, reflecting my technical skills and attention to detail.

### Key Features
The single page web application has the following features:
   - **Hero Section**: A welcoming introduction with a brief summary of my professional background and areas of expertise.
   - **Resume Download**: An option to download my resume in PDF format for easy offline access.
   - **Skills Overview**: A comprehensive list of my technical skills, including programming languages, frameworks, tools, and platforms I am proficient in.
   - **Projects Section**: A curated gallery of my top projects, each with descriptions, technologies used, and links to live demos and GitHub repositories.
   - **About Me Section**: Detailed information about my professional journey, including education, work experience, and personal interests.
   - **Contact Form**: A simple and secure contact form for potential clients or employers to get in touch with me directly.
   - **Responsive Design**: The website is optimized for viewing on various devices, including desktops, tablets, and smartphones.
   - **Multi Language Support**: The portfolio website is equipped with multi-language support, allowing users to seamlessly switch between different languages. This feature enhances accessibility and broadens the audience reach, catering to users from various linguistic backgrounds.
   - **Dark/Light Theme Toggle**: The website includes a dark/light theme toggle, enabling users to switch between themes based on their preference. This feature improves the user experience by providing a comfortable viewing environment in different lighting conditions and aligns with modern UI/UX standards.
   - **Articles**: A section for sharing insights, tutorials, and thoughts on industry trends and best practices [Currently not available].
   
### Technologies used
This project was created using the following technologies.

#### Frontend
- React JS
- Material UI (for User Interface)
- EmailJS ( To send email using Contact Form )
- Dot ENV ( To store secret variables )

#### Database
 - Data is stored in 'Javascript Object' format. No Relational Database is used.

### Containerization Overview

#### Why the App is Containerized

**1. Consistency Across Environments**: Containerizing the app ensures that it runs consistently across different environments (development, testing, staging, and production). By packaging the application and its dependencies into a single Docker image, you eliminate the "it works on my machine" problem, as the container behaves the same regardless of where it is deployed.

**2. Simplified Dependency Management**: Docker containers bundle the application with all its dependencies, libraries, and runtime, making it easier to manage and deploy. This encapsulation prevents issues related to missing dependencies or version mismatches, ensuring that the correct versions of libraries and tools are always used.

**3. Scalability**: Containerization makes scaling the application straightforward. Containers can be easily replicated and distributed across multiple servers or orchestrated using tools like Kubernetes. This allows the app to handle increased load efficiently by simply running more instances of the containers.

**4. Isolation and Security**: Docker containers provide process isolation, which enhances security by keeping the application isolated from the host system and other containers. This reduces the risk of conflicts between applications and minimizes the attack surface.

**5. Streamlined CI/CD Pipeline**: By using Docker, the app can be integrated into a CI/CD pipeline more easily. Containers can be built, tested, and deployed automatically, ensuring that every code change is validated in an environment identical to production.

#### How the App is Containerized
The application is containerized using Docker by creating a `Dockerfile` that defines the environment and dependencies for the app, and a `docker-compose.yml` file that manages multi-container configurations, enabling seamless deployment and scaling.

## Getting Started

### Prerequisites
Before you begin, ensure you have the following software and tools installed on your machine:
   - **Node.js**: Version 14.x or higher. Download Node.js
   - **npm or yarn**: Node.js package managers. npm comes bundled with Node.js. Install npm or Install yarn
   - **Only if you are using Docker**
      - **Docker**: Docker must be installed and running on your system. Install Docker
      - **Docker Compose** : Comes bundled with Docker Desktop, or can be installed separately. Install Docker Compose 	[title](https://www.example.com)


### Usage Instructions
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine. You can also use Docker to build and run the project. 


**1. Clone the Repository** \
Start by cloning the repository to your local machine using git:

```
$ git clone https://github.com/hasibiqbal207/portfolio
$ cd portfolio
```

**2. Set up Environment Variables** \
In this application, you will only need to set up environment variables for Email.js. Email.js is used to send emails using the Contact Form. The following variables are required for Email.js:

```
VITE_EMAIL_SERVICE_ID='value from emailjs'
VITE_EMAIL_TEMPLATE_ID='value from emailjs'
VITE_EMAIL_USER_ID='value from emailjs'
```

**Note**: If you are using Docker, jump to [Running the Application with Docker](#running-the-application-with-docker) section.

**3. Install Dependencies** \
Navigate to the portfolio directory and install the necessary dependencies:

```
cd ../portfolio
npm install
# or if using yarn
yarn install
```

**4. Start the Application** \
To start the application, run the following command:

```
cd ../portfolio
npm run dev
# or
yarn dev
```

The application should start on http://localhost:6002. You can change the port in the `vite.config.js` file. 

To test the production build of the application locally, run the following command:

```
npm run build

npm run preview
```

After you've built your application with the command `npm run build`, running `npm run preview` will start a local server that serves the production-ready files, allowing you to test the final output as it would appear in a live environment.

### Running the Application with Docker
Docker allows you to containerize your application, simplifying deployment across different environments. Below are steps to build, run, and manage your Docker containers for both development and production environments.

**Note**: 
   - The simplest step is to use docker compose. To use docker compose, follow only **step 1**.
   - Alternatively, you can first build and then run the container. To do this, follow **step 2 & 3**.

#### 1. Using Docker Compose**

To containerize your application, start by using docker compose. From the root directory of your project, use the following command to build the image:

To start the portfolio-dev service:

```
docker compose up portfolio-dev --build
```

To start the portfolio-prod service:
```
docker compose up portfolio-prod --build
```

In these commands:
  - By adding the service name (e.g., portfolio-dev or portfolio-prod) after the up command, it will only start that specific service, rather than starting all services defined in the file.
  - --build: This flag forces Docker Compose to rebuild the images before starting the services, even if an image already exists in the cache.

If you want to run the containers in the background, add the -d flag to either command:

```
docker compose up -d portfolio-dev --build
```

To stop and remove the container, use the following command:

```
docker compose down portfolio-dev
```

**2. Build Docker Images**

To containerize your application, start by building Docker images based on your environment. From the root directory of your project, use the following commands to build the image:

**Development Environment:**
```
docker build -f docker/Dockerfile.dev -t portfolio-dev .
```

**Production Environment:**
```
docker build -f docker/Dockerfile.prod -t portfolio-prod .
```

In these commands:
  - -f specifies the path to the Dockerfile.
  - -t tags the image with a name (portfolio-dev or portfolio-prod).


**3. Run Docker Containers** 

After building the images, you can run the containers using the docker run command.

**Development Environment:**
```
docker run -p 6002:6002 portfolio-dev
```

**Production Environment:**
```
docker run -p 6002:6002 portfolio-prod
```

In these commands:
  - -p 6002:6002 maps port 6002 of the container to port 6002 on your machine.
  - -To run the container in the background, add the -d flag (e.g., docker run -d -p 6002:6002 portfolio-dev).

## Contributing
Please Visit [Contributing](CONTRIBUTING.md) file for more details.

## License
The software in this project is licensed under the Apache License 2.0, a permissive open-source license. By using this software, you agree to the following terms:

**Summary of the Apache License 2.0**

1. **Freedom to Use**: You can use the software for any purpose, including commercial use, without paying royalties.
2. **Modification and Distribution**: You can modify the software and distribute it in either its original or modified form, as long as you include the original license and clearly mark any changes you made.
3. **Patent Rights**: The license grants you rights to any patents held by the contributors related to the software, but if you sue anyone over patent issues involving the software, your license and patent rights terminate.
4. **No Trademark Rights**: The license doesn’t grant permission to use the names, trademarks, or logos of the contributors.
5. **No Warranty**: The software is provided "as is," without any warranties, meaning the contributors aren't responsible for any issues or damages that arise from using it.
6. **Optional Support**: If you offer warranties, support, or assume additional liability when redistributing the software, you're responsible for those obligations, not the original contributors.

**Copyright Notice**

    Copyright 2024 Hasib Iqbal

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
