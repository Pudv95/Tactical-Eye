const path = require('path');
const pythonTools = require('../utils/python');

const moveController = {
    makeMove: async (req, res) => {
        const pythonScriptPath = path.resolve(__dirname, "../../chess-engine/Sepentia-ChessEngine/src/FEN.py");
        const result = await pythonTools.executePython(pythonScriptPath, []);
        console.log(result);
        res.json({ message: "Move made successfully" });
    }
};

module.exports = moveController;