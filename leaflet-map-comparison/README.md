# Leaflet Map Comparison Project

This project implements two synchronized Leaflet maps with a divider bar for comparison. Users can draw on the maps using Geoman, and all edits are synchronized between both maps.

## Project Structure

```
leaflet-map-comparison
├── src
│   ├── index.html        # HTML structure of the web page
│   ├── styles.css       # CSS styles for the web page
│   └── scripts
│       └── main.js      # JavaScript code for map functionality
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd leaflet-map-comparison
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the project:**
   You can use a local server to view the project. For example, you can use `live-server`:
   ```bash
   npx live-server src
   ```

## Usage Guidelines

- Open the web page in your browser to view the two synchronized maps.
- Use the divider bar to adjust the view of each map.
- Utilize the Geoman drawing tools to create shapes and markers on either map. Changes will be reflected on both maps in real-time.

## Dependencies

- Leaflet: A JavaScript library for interactive maps.
- Geoman: A plugin for Leaflet that provides drawing tools.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project. 

## License

This project is licensed under the MIT License.