# CalmEase Backend API

The **CalmEase Backend** is a RESTful API developed in **Node.js** for the **CalmEase** mindfulness mobile application. It is designed to support the features of the **CalmEase** app, such as guided meditations, breathing exercises, live sessions, and user management. The backend also integrates with **Amazon RDS** for data storage.

## Features

- User authentication and profile management
- Session creation and management (Meditations, Breathing Exercises, Live Sessions)
- Content Management for Articles and Blogs
- Integration with **Amazon RDS** for database storage
- Real-time notifications and session updates
- Support for multi-role users (Admin, User)

## Technologies Used

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for building APIs
- **JWT**: JSON Web Tokens for secure authentication
- **AWS RDS**: Relational database service (e.g., MySQL)
- **Bcrypt.js**: Password hashing for secure user credentials

### Prerequisites

Before getting started, ensure you have the following installed on your machine:

- **Node.js**: Version 14 or higher
- **MySQL Database** (AWS RDS or Local MySQL instance)
- **npm** (Node Package Manager)



## Folder Structure For Backend

- backend(Node-Express)
   - src
      - controllers
         - articleController.js
         - authController.js
         - blogController.js
         - breathingController.js
         - goodMemoriesController.js
         - tokenController.js
         - sessionController.js
      - routes
         - articleRoutes.js
         - authRoutes.js
         - blogRoutes.js
         - breathingRoutes.js
         - goodMemoriesRoutes.js
         - sessionRoutes.js
         - tokenRoutes.js
      - config
         - dbConfig.js
         - emailConfig.js
      - utils
         - sendEmail.js
      - app.js
   - .env



### Information about structure and code:
1. For backend as shown in the above structure all the modules are seperated from each other.
2. Removed all the needed dependencies to each other and created modular application structure.
3. All the Routes are stored in routes folder
4. All the Controllers are stored in controllers folder



## Backend API Routes

Here’s a list of all the APIs from the backend application, which we used in out application

### Articles
- **GET /api/articles/list**: Retrieves a list of all articles.
- **POST /api/articles/create**: Creates a new article.
- **PUT /api/articles/update**: Updates an existing article.

### Auth
- **POST /api/auth/register**: Registers a new user.
- **POST /api/auth/login**: Logs in an existing user.
- **POST /api/auth/reset-password**: Resets the password for a user.

### Blogs
- **POST /api/blogs/update**: Updates an existing blog.
- **GET /api/blogs/all**: Retrieves a list of all blogs.
- **POST /api/blogs/blog**: Retrieves a specific blog.

### Breathing
- **GET /api/breathing/list**: Retrieves a list of all breathing exercises.
- **POST /api/breathing/create**: Creates a new breathing exercise.
- **PUT /api/breathing/update**: Updates an existing breathing exercise.

### Session
- **POST /api/sessions/create**: Creates a new session.
- **POST /api/sessions/edit**: Edits an existing session.
- **GET /api/sessions/list**: Retrieves a list of all sessions.
- **POST /api/sessions/contact-us**: Sends a contact message regarding sessions.

### Tokens
- **POST /api/tokens/generate**: Generates a new token.


## Acknowledgments

* The code provided served as a valuable resource, offering insights into the functionality and logic behind various UI components. I deeply appreciate the dedication and effort put into its development.
* Its contribution has been invaluable, shaping my understanding and approach towards learning specific techniques and approaches. I extend my sincere gratitude for the insights it has provided.
