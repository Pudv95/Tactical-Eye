import React, { useState } from "react";
import { Chessboard } from "react-chessboard";

const App: React.FC = () => {
  const [fen, setFen] = useState("start"); // Current FEN for Chessboard
  const [inputFen, setInputFen] = useState(""); // Temporary input field state
  const [image, setImage] = useState<File | null>(null); // Image file state
  const [bestMoveArrow, setBestMoveArrow] = useState<{ start: string; end: string; color: string } | null>(null);

  // Handle file upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file); // Store image file
      console.log("Image uploaded:", file.name);
      alert("Image uploaded! (Now integrate API to extract FEN)");
    }
  };

  // Call the Python backend to get the best move
  const getBestMove = async (currentFen: string) => {
    try {
      const response = await fetch("http://localhost:5000/best-move", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fen: currentFen }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch best move");
      }

      const data = await response.json();
      return data.bestMove; // Assuming the backend returns { bestMove: "e2e4" }
    } catch (error) {
      console.error("Error fetching best move:", error);
      return null;
    }
  };

  // Update FEN on button click
  const updateFen = async () => {
    if (inputFen.trim() !== "") {
      setFen(inputFen); // Update the chessboard position

      // Get the best move from the Python backend
      const bestMove = await getBestMove(inputFen);
      if (bestMove) {
        // Convert the best move to arrow format
        const arrow = {
          start: bestMove.slice(0, 2), // Extract the starting square (e.g., "e2")
          end: bestMove.slice(2, 4),   // Extract the ending square (e.g., "e4")
          color: "green",              // Arrow color
        };
        setBestMoveArrow(arrow); // Set the best move arrow
      }
    } else {
      // If inputFen is empty, reset to the starting position
      setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
      setBestMoveArrow(null); // Clear the best move arrow
    }
  };

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
          customArrows={bestMoveArrow ? [bestMoveArrow] : []} // Pass the best move arrow
          arePiecesDraggable={false} // Disable piece movement
        />
      </div>
    </div>
  );
};

export default App;