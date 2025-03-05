import React, { useState,useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js"; // Import Chess.js for move validation and FEN updates
import { Arrow } from "react-chessboard/dist/chessboard/types";
import env from "react-dotenv";

const App: React.FC = () => {
  const [fen, setFen] = useState("start"); // Current FEN for Chessboard
  const [inputFen, setInputFen] = useState(""); // Temporary input field state
  const [bestMoveArrow, setBestMoveArrow] = useState< Arrow[] > ([]);
  const [game, _] = useState(new Chess()); // Chess.js game instance

  // Handle file upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // setImage(file); // Store image file
      console.log("Image uploaded:", file.name);
      alert("Image uploaded! (Now integrate API to extract FEN)");
    }
  };

  // Call the Python backend to get the best move
  const getBestMove = async (currentFen: string) => {
    const baseURI = env.BASE_URL;
    try {
      const response = await fetch(`${baseURI}/api/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fenstring: currentFen }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch best move");
      }
  
      const data = await response.json();
      console.log("Backend response:", data); // Log the response
  
      if (!data.success) {
        throw new Error("Backend returned an error");
      }
  
      var move = data.move;
      const arrow: Arrow = [
        move.slice(0, 2), // Extract the starting square (e.g., "e2")
       move.slice(3, 5),   // Extract the ending square (e.g., "e4")
       "red",              // Arrow color
     ];
     setBestMoveArrow([arrow])
     console.log("new move = ", bestMoveArrow)
     console.log(typeof bestMoveArrow)
      return "arrow set successfully------------------";
    } catch (error) {
      console.error("Error fetching best move:", error);
      return null;
    }
  };

  // Update FEN on button click
  const updateFen = async () => {
    if (inputFen.trim() !== "") {
      setFen(inputFen); // Update the chessboard position
      game.load(inputFen); // Update the Chess.js game instance

      // Get the best move from the Python backend
      const bestMove = await getBestMove(inputFen);
      console.log(bestMove)
    } else {
      // If inputFen is empty, reset to the starting position
      setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
      game.reset(); // Reset the Chess.js game instance
      setBestMoveArrow([]); // Clear the best move arrow
    }
  };

  // Handle piece movement
  const onDrop = (sourceSquare: string, targetSquare: string) => {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // Always promote to a queen for simplicity
      });

      if (move === null) return false; // Invalid move

      setFen(game.fen()); // Update the FEN after a valid move

      // Fetch the best move after the player's move
      getBestMove(game.fen()).then((bestMove) => {
        if (bestMove) {
          console.log(bestMove)
        }
      });

      return true; // Valid move
    } catch (error) {
      console.error("Invalid move:", error);
      return false; // Invalid move

    }
  };

  useEffect(() => {
    console.log("Best move arrow:", bestMoveArrow);
  }, [bestMoveArrow]);

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <h1>Chessboard with Best Move Arrow</h1>

      {/* Upload Image Button */}
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload} 
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      {/* Enter FEN String Manually */}
      <input
        type="text"
        value={inputFen}
        onChange={(e) => setInputFen(e.target.value)}
        placeholder="Enter FEN string"
        style={{ marginBottom: "10px", padding: "5px", width: "300px", textAlign: "center" }}
      />

      {/* Enter Button */}
      <button 
        onClick={updateFen} 
        style={{ padding: "8px 12px", marginBottom: "10px", cursor: "pointer" }}
      >
        Enter
      </button>

      {/* Centered Chessboard */}
      <div 
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        <Chessboard 
          position={fen} 
          boardWidth={400} 
          customArrows= {bestMoveArrow}        
          onPieceDrop={onDrop} 
        />
      </div>
    </div>
  );
};

export default App;