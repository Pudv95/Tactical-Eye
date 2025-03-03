const path = require('path');
const pythonTools = require('../utils/python');
const { Chess } = require('chess.js');

function getMoveCoordinates(fen, algebraicMove) {
    console.log(algebraicMove);
    const chess = new Chess(fen);
    const board = chess.board(); // 8x8 matrix of piece objects

    const piece = algebraicMove[0];  // 'Q' from 'Qe5'
    const destination = algebraicMove.slice(1); // 'e5' from 'Qe5'
    const color = piece === piece.toLowerCase() ? "b" : "w";
    let sourceSquare = null;

    // Find the piece's current position
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = board[row][col]; // Get piece object
            if (square && square.type === piece.toLowerCase() && square.color === color) {
                sourceSquare = square.square // Convert row/col to chess notation
                break;
            }

        }
        if (sourceSquare) break;
    }

    return sourceSquare ? `${sourceSquare} ${destination}` : "Piece not found!";
}

const moveController = {

    makeMove: async (req, res) => {
        const fenstr = req.body.fenstring;
        if (!fenstr) {
            res.status(400).json({ message: "Fenstring is required" });
            return;
        }
        const pythonScriptPath = path.resolve(__dirname, "../../chess-engine/Sepentia-ChessEngine/src/GameHelper.py");
        const result = await pythonTools.executePython(pythonScriptPath, [fenstr])
        res.json({ success: true, move: getMoveCoordinates(fenstr, result) });
    }
};

module.exports = moveController;