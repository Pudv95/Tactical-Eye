const path = require('path');
const pythonTools = require('../utils/python');
const { Chess } = require('chess.js');

function getMoveCoordinates(fen, algebraicMove) {
    algebraicMove.replace('x', '');
    try {
        console.log(fen);
        const chess = new Chess(fen);
        const move = chess.move(algebraicMove);
        if (!move) {
            return "Invalid move!";
        }
        const sourceSquare = move ? move.from : null;
        const destination = move ? move.to : null;
        return sourceSquare ? `${sourceSquare} ${destination}` : "Piece not found!";
    } catch (error) {
        console.log(error);
        return error.toString();
    }
}

const moveController = {

    makeMove: async (req, res) => {
        var fenstr = req.body.fenstring;
        if (!fenstr) {
            res.status(400).json({ message: "Fenstring is required" });
            return;
        }
        fenstr = fenstr.split(" ").slice(-6).join(" ");
        const pythonScriptPath = path.resolve(__dirname, "../chess-engine/Sepentia-ChessEngine/src/GameHelper.py");
        const result = await pythonTools.executePython(pythonScriptPath, [fenstr])
        if (!result) {
            res.json({ success: false, message: "Invalid move" });
            return
        }
        if (result == "None") {
            res.json({ success: true, message: "Checkmated" });
            return
        }
        res.json({ success: true, move: getMoveCoordinates(fenstr, result) });
    },

};


module.exports = moveController;