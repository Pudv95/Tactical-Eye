const path = require('path');
const pythonTools = require('../utils/python');

const moveController = {
    makeMove: async (req, res) => {
        const fenstr = req.body.fenstring;
        if (!fenstr) {
            res.status(400).json({ message: "Fenstring is required" });
            return;
        }
        const pythonScriptPath = path.resolve(__dirname, "../../chess-engine/Sepentia-ChessEngine/src/GameHelper.py");
        const result = await pythonTools.executePython(pythonScriptPath, [fenstr]);
        res.json({ success: true, move: result });
    }
};

module.exports = moveController;