import { useState } from "react";
import "./App.css";
import { browser } from "webextension-polyfill-ts";

const App = () => {
  const [turn, setTurn] = useState<string>("w");
  const [castling, setCastling] = useState<string>("KQkq");
  const [enPassant, setEnPassant] = useState<string>("-");
  const [halfmoveClock, setHalfmoveClock] = useState<number>(0);
  const [fullmoveNumber, setFullmoveNumber] = useState<number>(1);
  const [fen, setFen] = useState<string>("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const storedData = await browser.storage.local.get("fen");
    if (storedData.fen) {
      const completeFen = `${storedData.fen.split(" ")[0]} ${turn} ${castling} ${enPassant} ${halfmoveClock} ${fullmoveNumber}`;
      await browser.storage.local.set({ fen: completeFen });
      console.log("Complete FEN:", completeFen);
      setFen(completeFen);
    }
  };

  // async function _(newFen: String){
  //   console.log("called detectMove with newFen:", newFen);
  //   if (chess == null) return;
  //   let previousFen = chess.fen()

  //   if (previousFen && newFen && previousFen !== newFen) {
  //     const chess = new Chess(previousFen);
  //     const moves = chess.moves({ verbose: true });

  //     let detectedMove = null;
  //     for (const move of moves) {
  //       const tempChess = new Chess(previousFen);
  //       tempChess.move(move.san);
  //       if (tempChess.fen().split(" ")[0] === newFen.split(" ")[0]) {
  //         detectedMove = move;
  //         break;
  //       }
  //     }

  //     if (detectedMove) {
  //       console.log(`Move detected: ${detectedMove.from} → ${detectedMove.to}`);
  //     }

  //     await browser.storage.local.set({ completeFen: newFen });
  //   }
  // }


  return (
    <div className="container">
      <h1>FEN String Input</h1>
      <form onSubmit={handleSubmit}>
        <label>Turn:</label>
        <select
          value={turn}
          onChange={(e) => setTurn(e.target.value)}
          required
        >
          <option value="w">White</option>
          <option value="b">Black</option>
        </select>
        <label>Castling Rights:</label>
        <input
          type="text"
          value={castling}
          onChange={(e) => setCastling(e.target.value)}
          placeholder="KQkq"
          required
        />

        <label>En Passant Target Square:</label>
        <input
          type="text"
          value={enPassant}
          onChange={(e) => setEnPassant(e.target.value)}
          placeholder="e3 or -"
          required
        />

        <label>Halfmove Clock:</label>
        <input
          type="number"
          value={halfmoveClock}
          onChange={(e) => setHalfmoveClock(Number(e.target.value))}
          required
        />

        <label>Fullmove Number:</label>
        <input
          type="number"
          value={fullmoveNumber}
          onChange={(e) => setFullmoveNumber(Number(e.target.value))}
          required
        />

        <button type="submit">Generate FEN</button>
      </form>

      <h2>Generated FEN:</h2>
      <p className="fen-output">{fen}</p>
    </div>
  );
};

export default App;
