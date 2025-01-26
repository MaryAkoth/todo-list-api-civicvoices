# To-Do List REST API

This is a simple REST API for managing a to-do list, built using Node.js, Express, and MySQL.

## Project Setup

### Prerequisites

- Node.js
- MySQL (using XAMPP or any other method)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd todo-list-api
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory with your MySQL database credentials:

    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=
    DB_NAME=todo_list
    ```

4. Ensure MySQL is running and a database named `todo_list` is created.

5. Start the server:

    ```sh
    node server.js
    ```

## API Endpoints

### Create a new to-do

- **Endpoint**: `POST /todos`
- **Body**:

    ```json
    {
      "title": "Buy groceries",
      "completed": false
    }
    ```

- **Example Request**:

    ```sh
    curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title": "Buy groceries", "completed": false}'
    ```

### Get all to-dos

- **Endpoint**: `GET /todos`

- **Example Request**:

    ```sh
    curl -X GET http://localhost:3000/todos
    ```

### Update a to-do

- **Endpoint**: `PATCH /todos/:id`
- **Body**:

    ```json
    {
      "title": "Buy milk",
      "completed": true
    }
    ```

- **Example Request**:

    ```sh
    curl -X PATCH http://localhost:3000/todos/1 -H "Content-Type: application/json" -d '{"title": "Buy milk", "completed": true}'
    ```

### Delete a to-do

- **Endpoint**: `DELETE /todos/:id`

- **Example Request**:

    ```sh
    curl -X DELETE http://localhost:3000/todos/1
    ```

## Notes

- Ensure to replace `<repository-url>` with the actual URL of your GitHub repository.
- Test your API thoroughly to make sure all endpoints are working as expected.

## Author

Mary Odhiambo

