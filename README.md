
# Tactical-Eye

## Overview
This project integrates a **chess engine, a backend, a frontend, and a browser extension** to analyze chess positions and make intelligent decisions. The website allows users to **upload a FEN string and play the rest of the game**, while the browser extension enhances the Chess.com experience with move visualization.

## Features
- **FEN-based gameplay**: Users can input a FEN string and continue playing the game.
- **Chess engine integration**: Provides best moves and evaluation.
- **Backend processing**: Handles FEN input and engine computations.
- **Frontend interface**: Allows users to play against the chess engine.
- **Chess Browser Extension**: Automatically adds arrows to Chess.com by generating SVG arrows from given squares.

## Tech Stack
- **Chess Engine**: [Sepentia-ChessEngine](https://github.com/EuclidStellar/Sepentia-ChessEngine)
- **Backend**: Node.js with Express
- **[Frontend](https://tactical-eye.pudv95.me/)**: React + Vite
- **Containerization**: Docker
- **[Browser Extension](https://addons.mozilla.org/en-US/firefox/addon/tactical-eye/)**: React + Vite, `webextension-polyfill-ts`

## Extension
![image](https://github.com/user-attachments/assets/433e0457-6762-4f67-953b-eee1091d1931)
![image](https://github.com/user-attachments/assets/da973973-b504-49f8-bcf7-b9d4b9a46cf1)
<video src="https://github.com/user-attachments/assets/924f9fad-97cd-4890-8ef6-2b157770db52"></video>


## Website
![image](https://github.com/user-attachments/assets/1a54289b-c928-403b-8c5c-d90ed2b1e6ee)
![image](https://github.com/user-attachments/assets/67eb4d8c-7349-454e-a62c-d14def495092)
<video src="https://github.com/user-attachments/assets/3f749c13-7cc0-4df3-b2c9-654ff55acb79"></video>



## Directory Structure
```
tactical-eye-backend/   # Backend (Node.js)
tactical-eye-frontend/
  ├── tactical-eye/        # Website (React + Vite)
  ├── tactical-eye-extension/  # Browser extension (React + Vite)
```

## Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Pudv95/Tactical-Eye.git
   cd Tactical-Eye
   ```
2. Install dependencies:
   ```bash
   cd tactical-eye-backend
   npm install  # Install backend dependencies
   ```
   ```bash
   cd ../tactical-eye-frontend/tactical-eye
   npm install  # Install frontend dependencies
   ```
3. Run the backend:
   ```bash
   cd ../../tactical-eye-backend
   node server.js
   ```
4. Start the frontend:
   ```bash
   cd ../tactical-eye-frontend/tactical-eye
   npm run dev
   ```
5. Install and run the browser extension:
   ```bash
   cd ../tactical-eye-extension
   npm install
   npm run build
   ```
   - Load the extension manually in Chrome/Firefox via developer mode.

## Usage
- **Website**: Enter a FEN string, play against the engine, and receive best-move suggestions.
- **Backend**: Processes FEN input and queries the chess engine.
- **Browser Extension**: Adds arrows to Chess.com based on move recommendations.

## Architecture
```
[FEN Input] --> [Backend] --> [Chess Engine] --> [Best Move]
                                       --> [Browser Extension]
```
- **Backend**: Processes FEN and queries the chess engine.
- **Frontend**: Add FEN string displays the board and allows users to play.
- **Browser Extension**: Adust FEN string work with it. (There are some bugs suggesting wrong players move... but move your pieces a little and it'll work just fine)

## Future Improvements
- Improve frontend UI/UX.
- Support additional chess variants.
- Add move history tracking.
- Fix and optimize browser extension bugs.

## Contributing
- Fork the repository.
- Create a new branch for your feature.
- Submit a pull request.

## License
[MIT License](LICENSE)

---
