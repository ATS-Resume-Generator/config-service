# Configuration Microservice

This project is a Node.js microservice for centralized configuration management. It provides a REST API for managing configuration settings, feature flags, and service discovery. The microservice is built using Express.js and integrates with MongoDB for data storage, Redis for caching, and Joi for input validation.

## Features

- **Configuration Management**: Manage configuration settings with versioning and rollback capabilities.
- **Feature Flags**: Toggle feature flags with real-time updates.
- **Service Discovery**: Register and discover services within the microservice architecture.
- **Health Check**: Monitor the health of the microservice.
- **Environment-based Configuration**: Support for different environments (dev, staging, prod).
- **Encrypted Secret Management**: Securely manage sensitive data.
- **Hot Configuration Reloading**: Reload configurations without restarting the server.
- **Error Handling**: Comprehensive error handling and logging.

## API Endpoints

### Configuration Management

- **GET /config**: Retrieve all configuration settings.
- **GET /config/:service**: Retrieve configuration settings for a specific service.
- **PUT /config/:service**: Update configuration settings for a specific service.
- **POST /config/reload**: Reload configuration from sources.

### Feature Flags

- **GET /features**: Retrieve all feature flags.
- **PUT /features/:flag**: Toggle a specific feature flag.

### Service Discovery

- **GET /services**: Retrieve a list of registered services.
- **POST /services/register**: Register a new service.
- **DELETE /services/:id**: Unregister a service.

### Health Check

- **GET /health**: Check the health status of the microservice.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd config-microservice
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file based on the provided `.env.example` and set your configuration values.

4. Start the server:
   ```
   npm start
   ```

5. Access the API at `http://localhost:3000`.

## Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t config-microservice .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 --env-file .env config-microservice
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.