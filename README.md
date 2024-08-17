<a id="readme-top"></a>

<div align="center">
  <a href="https://www.hasibiqbal.dev">
    <img src="https://github.com/tuzup/SplitApp/blob/master/client/public/static/logo.png?raw=true" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">Hasib's Portfolio</h2>

  <p align="center">
    Portfolio website built with React.
    <br />
    <a href="https://github.com/hasibiqbal207/portfolio"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.hasibiqbal.dev">View Demo</a>
    ·
    <a href="https://github.com/hasibiqbal207/portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/hasibiqbal207/portfolio/issues">Request Feature</a>
  </p>
</div>
  
<!-- ![SplitApp](https://raw.githubusercontent.com/tuzup/SplitApp/master/Screenshots/dashboard-main-transparent.png) -->

## Portfolio Web Application 

  * [Project Overview](#Project-Overview)
  * [Getting Started](#Getting-Started)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [Configuration and Setup](#configuration-and-setup)
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

**Prerequisites:** Before you begin, ensure you have the following software and tools installed on your machine:
   - **Node.js**: Version 14.x or higher. Download Node.js
   - **npm or yarn**: Node.js package managers. npm comes bundled with Node.js. Install npm or Install yarn
   - **Only if you are using Docker**
      - **Docker**: Docker must be installed and running on your system. Install Docker
      - **Docker Compose** : Comes bundled with Docker Desktop, or can be installed separately. Install Docker Compose 	[title](https://www.example.com)


**Installation Instructions:**  
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine. You can also use Docker to build and run the project. 

**Note**: 
   - If you are not using Docker, only use step 1 to 4.
   - If you are using Docker, skip step 3 & 4.

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

**5. Build and Run Containers** \
Docker allows you to containerize your application and run it with ease.

1. Build and Run Containers
From the root directory of the project, run the following command to build the image:

```
## Choose either one of the following commands.

# Build the Docker image for Development environment
docker build -t portfolio-dev -f Dockerfile.dev .

# Build the Docker image for Production environment
docker build -t portfolio-prod -f Dockerfile.prod .
```

To run the containers, run the following command:

```
## Choose either one of the following commands. Add -d to run the containers in the background.

# Run the container from the Docker image for Development environment
docker run -p 6002:6002 portfolio-dev

# Run the container from the Docker image for Production environment
docker run -p 6002:6002 portfolio-prod
```

<!-- This command will:
   - Build the Docker images for both the frontend and backend.
   - Start the containers.
   - The backend will be accessible on http://localhost:5000.
   - The frontend will be accessible on http://localhost:3000. -->

**2. Stop and Remove Containers** \
To stop the running containers:

```
docker-compose down
```
This will stop and remove the containers, but the volumes (like database data) will persist.