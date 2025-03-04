const path = require('path');
const pythonTools = require('../utils/python');
const { Chess } = require('chess.js');

function getMoveCoordinates(fen, algebraicMove) {
    console.log(fen);
    const chess = new Chess(fen);
    const move = chess.move(algebraicMove);
    const sourceSquare = move ? move.from : null;
    const destination = move ? move.to : null;
    console.log("sourceSquare = ", sourceSquare);
    console.log("destination = ", destination);
    return sourceSquare ? `${sourceSquare} ${destination}` : "Piece not found!";
}

const moveController = {

    makeMove: async (req, res) => {
        const fenstr = req.body.fenstring.split(" ").slice(-6).join(" ");
        if (!fenstr) {
            res.status(400).json({ message: "Fenstring is required" });
            return;
        }
        const pythonScriptPath = path.resolve(__dirname, "../../chess-engine/Sepentia-ChessEngine/src/GameHelper.py");
        const result = await pythonTools.executePython(pythonScriptPath, [fenstr])
        if (!result) {
            res.json({ success: false, message: "Invalid move" });
            return
        }
        res.json({ success: true, move: getMoveCoordinates(fenstr, result) });
    }
};

module.exports = moveController;