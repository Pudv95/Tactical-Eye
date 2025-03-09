import { useEffect, useState } from "react";
import "./App.css";
import { browser } from "webextension-polyfill-ts";

const App = () => {
  const [castling, setCastling] = useState<string>("KQkq");
  const [enPassant, setEnPassant] = useState<string>("-");
  const [halfmoveClock, setHalfmoveClock] = useState<number>(0);
  const [fullmoveNumber, setFullmoveNumber] = useState<number>(1);
  const [fen, setFen] = useState<string>("");


  useEffect(() => {
    const handleMessage = (message: { type: string; data: string }) => {
        if (message.type === "fen") {
            setFen(message.data);
        }
    };

    browser.runtime.onMessage.addListener(handleMessage);
    return () => {
        browser.runtime.onMessage.removeListener(handleMessage);
    };
}, []);

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("it is pressed");
    e.preventDefault();
  const storedFen = await browser.storage.local.get("fen");
      if (storedFen.fen) {
        setFen(`${storedFen.fen} ${castling} ${enPassant} ${halfmoveClock} ${fullmoveNumber}`)
      } else {
          browser.runtime.sendMessage({ type: "getFen" });
      }
  };



  return (
    <div className="container">
      <h1>FEN String Input</h1>
      <form onSubmit={handleSubmit}>
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
