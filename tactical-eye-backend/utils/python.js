const { spawn } = require('child_process');

const pythonTools = {
    executePython: async (scriptPath, args) => {
        return new Promise((resolve, reject) => {
            const pythonProcess = spawn('python', [scriptPath, ...args]);
            pythonProcess.stdout.on('data', (data) => {
                resolve(data.toString());
            });
            pythonProcess.stderr.on('data', (data) => {
                reject(data.toString());
            });
            pythonProcess.stderr.on('data', (data) => {
                console.error(`stderr: ${data.toString()}`);
                reject(data.toString());
            });

            pythonProcess.on('error', (err) => {
                console.error(`Failed to start process: ${err.message}`);
                reject(err.toString());

            });
            pythonProcess.on('close', (code) => {
                console.log(`Process exited with code ${code}`);
                reject(code.toString())
            });
        }).catch((err) => {
            return null;
        });
    }
}

module.exports = pythonTools;