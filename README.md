# Parameter Validation Middleware

 This middleware checks if specified parameters in the URL meet certain format requirements and handles errors for missing or invalid parameters.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

### Installation and execution

1. Clone this repository or download the source files.
2. Navigate to the project directory:
   ```bash
   cd parameter-validation
   npm install
   ```
3. Directory Structure
    ```
    validate-req-parameter/
    ├── parameterValidator.js    # Custom middleware 
    ├── server.js            # Main server file with sample routes
    └── README.md            # Project documentation
    ```
4. Running the Server
    ```
    node server.js
    ```  
5. Testing
    - Valid 
        - URL: http://localhost:5000/user/123
        - Response
          ```
          User ID is 123
          ```   
    - InValid 
        - URL: http://localhost:5000/user/abc
        - Response
          ```
          {
            "error": true,
            "message": "id - Invalid parameter!",
          }
          ``` 