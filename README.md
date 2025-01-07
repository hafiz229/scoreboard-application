# Scoreboard Application

A simple scoreboard application built using vanilla JavaScript, HTML, and CSS. This application allows users to dynamically manage matches, track scores, and reset data. It uses Redux for state management.

---

## Features

- **Dynamic Match Management**: Add or delete matches dynamically.
- **Increment/Decrement Scores**: Adjust scores using numeric inputs and confirm with the `Enter` key.
- **Reset Scores**: Reset all match scores to zero without deleting the matches.
- **Unique Match Identification**: Matches are uniquely identified using a generated ID, and titles are based on the match's order.
- **Responsive Design**: Adaptable to various screen sizes.

---

## Technologies Used

- **HTML**: For structuring the application.
- **CSS**: For styling the user interface.
- **JavaScript**: For logic and interactivity.
- **Redux**: For state management.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/hafiz229/scoreboard-application.git
   ```

2. Navigate to the project directory:
   ```bash
   cd scoreboard-application
   ```

3. Install a live server for local development (optional):
   ```bash
   npm install -g live-server
   ```

4. Start the application:
   ```bash
   live-server
   ```
   The application will open in your default browser at `http://127.0.0.1:8080/` (or another port).

---

## Deployment

This project can be deployed to **Netlify** or any other static hosting platform. To deploy to Netlify:

1. Push the project to a Git repository (e.g., GitHub).
2. Log in to Netlify and import your repository.
3. Configure deployment settings:
   - **Build Command**: Leave it blank.
   - **Publish Directory**: Set to `/`.
4. Deploy the site.

Netlify will provide a live URL for the application.

---

## Folder Structure
```
/project-folder
  ├── index.html        # Main HTML file
  ├── style.css         # CSS for styling
  ├── script.js         # JavaScript logic
  ├── /images           # Images
```

---

## Usage

1. **Add Matches**: Click the "Add Another Match" button to add a new match.
2. **Adjust Scores**:
   - Enter a value in the "Increment" or "Decrement" field.
   - Press `Enter` to apply the change.
3. **Delete Matches**: Click the delete icon next to a match to remove it.
4. **Reset Scores**: Click the "Reset" button to reset all scores to zero.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

[Hafiz] - [hasnathafiz229@gmail.com]
