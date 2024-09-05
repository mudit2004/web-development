# JSON Data Viewer App

This project is a simple web-based JSON Data Viewer that fetches data from a backend Express server and displays it in a table format on the frontend. It uses basic web technologies like HTML, CSS, and JavaScript, along with Node.js for the backend.

## Folder Structure

- **Front-end**
  - `index.html`: The main HTML file that structures the webpage and connects to the `script.js`.
  - `styles.css`: Stylesheet for designing the webpage layout and making it visually appealing.
  - `script.js`: JavaScript file that fetches JSON data from the backend and displays it in a table on the frontend.

- **Back-end**
  - `index.js`: Backend server using Node.js and Express. It serves JSON data from the `data.json` file to the frontend via an API.
  - `data.json`: Contains the mock JSON data to be displayed on the webpage.

## Project Details

### Front-end

The front-end consists of a simple HTML page that displays data in a table format. It includes:
- A header with the title "JSON Data"
- A table where the keys and values from the JSON object are displayed.
- The `script.js` file fetches the JSON data from the server and dynamically inserts it into the table.

### Back-end

The backend is an Express server that reads and serves data from the `data.json` file. When the client makes a GET request to `/read-json`, the server responds with the JSON content.

### Data Example
The data displayed on the webpage is fetched from `data.json`, which has the following structure:

```json
{
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com"
}
```

### How to Run

1. **Backend Setup**:
    - Install Node.js if you haven't already.
    - Run `npm install express cors` to install dependencies.
    - Start the server by running `node index.js`.

2. **Frontend**:
    - Open the `index.html` file in a browser.
    - The page will fetch and display data from the backend.

## Example Output

On loading the page, the table will display the following:

| Name    | Age | Email                  |
|---------|-----|------------------------|
| John Doe| 30  | john.doe@example.com    |

## Additional Information

- The project is meant for demonstration purposes and showcases basic CRUD functionality between a front-end and back-end server.
- The `styles.css` file styles the page with a clean, minimalist design.
- A `read.txt` file is also included for basic text content that could be displayed if needed.
