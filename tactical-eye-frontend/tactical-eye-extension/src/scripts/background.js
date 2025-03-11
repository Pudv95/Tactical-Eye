var previousFen = "";

async function getFen() {

    function updatedFen(oldFen, newFen) {
        let [oldBoard, oldTurn, oldCastling, oldEnPassant, oldHalfmove, oldFullmove] = oldFen.split(" ");
        let newBoard = newFen.split(" ")[0];

        let activeColor = oldTurn === "w" ? "b" : "w";

        // Convert boards to arrays for comparison
        let oldRows = oldBoard.split("/");
        let newRows = newBoard.split("/");

        let movedFrom = null, movedTo = null, isCapture = false, isPawnMove = false;
        let oldPieces = oldBoard.replace(/\d/g, "").length;
        let newPieces = newBoard.replace(/\d/g, "").length;

        // Find the difference between old and new board positions
        for (let rank = 0; rank < 8; rank++) {
            let oldRow = oldRows[rank].replace(/\d/g, (d) => ".".repeat(d));
            let newRow = newRows[rank].replace(/\d/g, (d) => ".".repeat(d));

            for (let file = 0; file < 8; file++) {
                if (oldRow[file] !== newRow[file]) {
                    if (oldRow[file] !== ".") movedFrom = `${String.fromCharCode(97 + file)}${8 - rank}`;
                    if (newRow[file] !== ".") movedTo = `${String.fromCharCode(97 + file)}${8 - rank}`;
                }
            }
        }

        if (movedFrom && movedTo) {
            let movedPiece = oldBoard.includes(movedFrom) ? oldBoard.match(/[Pp]/) : null;
            isPawnMove = movedPiece !== null;
            isCapture = oldPieces > newPieces;
        }

        // Update castling rights
        let castling = oldCastling;
        if (movedFrom === "e1" || movedTo === "e1") castling = castling.replace(/[KQ]/g, "");
        if (movedFrom === "e8" || movedTo === "e8") castling = castling.replace(/[kq]/g, "");
        if (movedFrom === "a1" || movedTo === "a1") castling = castling.replace("Q", "");
        if (movedFrom === "h1" || movedTo === "h1") castling = castling.replace("K", "");
        if (movedFrom === "a8" || movedTo === "a8") castling = castling.replace("q", "");
        if (movedFrom === "h8" || movedTo === "h8") castling = castling.replace("k", "");
        if (castling === "") castling = "-";

        // Handle en passant
        let enPassant = "-";
        if (isPawnMove && Math.abs(movedFrom[1] - movedTo[1]) === 2) {
            enPassant = movedFrom[0] + (activeColor === "w" ? "6" : "3");
        }

        // Update halfmove clock (reset if pawn move or capture, otherwise increment)
        let halfMoveClock = isPawnMove || isCapture ? "0" : (parseInt(oldHalfmove) + 1).toString();

        // Update fullmove number (increment after Black's move)
        let fullMoveNumber = oldFullmove;
        if (activeColor === "w") fullMoveNumber = (parseInt(oldFullmove) + 1).toString();
        var newFen = `${newBoard} ${activeColor} ${castling} ${enPassant} ${halfMoveClock} ${fullMoveNumber}`;
        console.log("new Updated fen = " + newFen);
        // Construct the new FEN
        return newFen;
    }
    function removeHighlights() {
        const highlights = document.querySelectorAll(".highlight");
        highlights.forEach(highlight => highlight.remove());
    }
    function getSquaresBetween(from, to) {
        const files = "abcdefgh";
        const ranks = "12345678";
    
        function toSquareId(square) {
            let file = files.indexOf(square[0]) + 1;
            let rank = ranks.indexOf(square[1]) + 1;
            if (file === -1 || rank === -1) return null;
            return `square-${file}${rank}`;
        }
    
        let fromFile = files.indexOf(from[0]);
        let fromRank = ranks.indexOf(from[1]);
        let toFile = files.indexOf(to[0]);
        let toRank = ranks.indexOf(to[1]);
    
        if (fromFile === -1 || fromRank === -1 || toFile === -1 || toRank === -1) return [];
    
        let squares = [];
    
        // Handle knight moves separately
        if ((Math.abs(fromFile - toFile) === 2 && Math.abs(fromRank - toRank) === 1) ||
            (Math.abs(fromFile - toFile) === 1 && Math.abs(fromRank - toRank) === 2)) {
            squares.push(toSquareId(from));
            squares.push(toSquareId(to));
            return squares;
        }
    
        // Handle straight or diagonal paths
        let fileStep = fromFile === toFile ? 0 : (fromFile < toFile ? 1 : -1);
        let rankStep = fromRank === toRank ? 0 : (fromRank < toRank ? 1 : -1);
    
        let currentFile = fromFile;
        let currentRank = fromRank;
    
        while (currentFile !== toFile || currentRank !== toRank) {
            squares.push(toSquareId(files[currentFile] + ranks[currentRank]));
            currentFile += fileStep;
            currentRank += rankStep;
        }
    
        squares.push(toSquareId(to));
    
        return squares.filter(Boolean);
    }
    function highlightPath(fromSquare, toSquare) {
        // Find the chess board
        const board = document.querySelector("wc-chess-board.board");
        if (!board) {
            console.error("Chess board not found!");
            return;
        }

        // Locate the <!--/coordinates--> comment
        let coordinatesComment = null;
        for (const node of board.childNodes) {
            if (node.nodeType === Node.COMMENT_NODE && node.nodeValue.trim() === "/Coordinates") {
                coordinatesComment = node;
                break;
            }
        }

        if (!coordinatesComment) {
            console.error("Coordinates comment not found!");
            return;
        }

        // Convert square names (like "e4", "d4") to square IDs (like "square-28", "square-27")
        const squareClasses = getSquaresBetween(fromSquare, toSquare);

        if (!squareClasses.length) {
            console.error("Invalid squares or move:", fromSquare, toSquare);
            return;
        }

        // Create highlight divs for all squares in the path
        squareClasses.forEach(squareClass => {
            const highlightDiv = document.createElement("div");
            highlightDiv.classList.add("highlight");
            highlightDiv.style.backgroundColor = "rgba(80, 85, 235, 0.5)";
            highlightDiv.dataset.testElement = "highlight";
            highlightDiv.classList.add(squareClass);

            // Insert the highlight **after** the coordinates comment
            board.insertBefore(highlightDiv, coordinatesComment.nextSibling);
        });

    }

    let pagecontent = document.querySelector("wc-chess-board.board");
    if (!pagecontent) {
        return;
    }

    let storedData = await browser.storage.local.get("fen");
    previousFen = storedData.fen || "";

    let pageHTML = pagecontent.outerHTML.split("").reverse().join("");
    let match = pageHTML.match(/>--seceiP\/--!<([\s\S]*?)>--stceffE\/--!</);
    if (match && match[1]) {
        let oldStatus = " w KQkq - 0 1";
        if (previousFen.split(" ").length > 1) {
            oldStatus = " " + previousFen.split(" ").slice(1).join(" ");
        } else {
            console.log("No previous status found:", previousFen);
        }
        let extractedContent = match[1].trim();
        var fenString = htmlToFEN(extractedContent.split("").reverse().join("")) + oldStatus;
        if (previousFen !== fenString) {
            fenString = updatedFen(previousFen, fenString);
            fetch('https://tactical-eye-api.pudv95.me/api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fenstring: fenString })
            })
                .then(response => response.json())
                .then(data => {
                    var move = data.move.split(" ");
                    removeHighlights();
                    highlightPath(move[0], move[1]);
                })
                .catch(error => console.error('Error:', error));
        } else {
            console.log("No new Move is made");
        }
        await browser.storage.local.set({ fen: fenString });
        return fenString;
    }
}


function htmlToFEN(htmlString) {
    const pieceMap = {
        'wp': 'P', 'wn': 'N', 'wb': 'B', 'wr': 'R', 'wq': 'Q', 'wk': 'K',
        'bp': 'p', 'bn': 'n', 'bb': 'b', 'br': 'r', 'bq': 'q', 'bk': 'k'
    };

    let board = Array.from({ length: 8 }, () => Array(8).fill(null));
    const regex = /class="piece (\w+) square-(\d{2})"/g;
    let match;
    while ((match = regex.exec(htmlString)) !== null) {
        let [_, piece, square] = match;
        let file = parseInt(square[0]) - 1;
        let rank = 8 - parseInt(square[1]);
        board[rank][file] = pieceMap[piece];
    }

    let fen = board.map(row => {
        let emptyCount = 0;
        return row.map(cell => {
            if (!cell) {
                emptyCount++;
                return null;
            } else {
                let result = emptyCount > 0 ? emptyCount + cell : cell;
                emptyCount = 0;
                return result;
            }
        }).join('') + (emptyCount > 0 ? emptyCount : '');
    }).join('/');

    return fen;
}






async function detectFENChange() {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id || !tab.url?.includes("chess.com")) return;

    var result = await browser.scripting.executeScript({
        target: { tabId: tab.id },
        func: getFen,
    });
    console.log(result);
    if (!result || !result[0]?.result) return;
    const currentFen = result[0].result;
    if (!previousFen) {
        console.log("here");
        previousFen = currentFen;
        return;
    }

    // if (currentFen.split(" ")[0] === previousFen.split(" ")[0]) {
    //     console.log("No move detected");
    //     return;
    // }
    console.log("Current FEN:", currentFen);
    // console.log("Previous FEN:", previousFen);
    // const newFen = updatedFen(previousFen, currentFen);
    previousFen = currentFen;
}

setInterval(detectFENChange, 1000);
