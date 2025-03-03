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

    // Add event listener to remove highlights when any piece is clicked
    board.addEventListener("click", removeHighlights);
}

// Convert algebraic notation (e4, d4) to square classes
function getSquaresBetween(from, to) {
    const files = "abcdefgh";
    const ranks = "12345678";

    function toSquareId(square) {
        let file = files.indexOf(square[0]) + 1;
        let rank = ranks.indexOf(square[1]) + 1;
        if (file === -1 || rank === -1) return null;
        console.log(`square-${file}${rank}`)
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

function removeHighlights() {
    const highlights = document.querySelectorAll(".highlight");
    highlights.forEach(highlight => highlight.remove());
}

let lastFen = ""; // Store the last FEN to detect changes
function checkForMove() {
    // Inject a script to extract the FEN and send it via postMessage
    const script = document.createElement('script');
    script.textContent = `
        window.postMessage({ type: "FEN_DATA", fen: window.game.getFEN() }, "*");
    `;
    document.documentElement.appendChild(script);
    script.remove();
}

// Listen for the extracted FEN
window.addEventListener("message", (event) => {
    if (event.source !== window) return; // Ensure it's from the same page
    if (event.data && event.data.type === "FEN_DATA") {
        const currentFen = event.data.fen;

        if (currentFen !== lastFen) { // Detect a new move
            lastFen = currentFen; // Update last known FEN
            console.log(currentFen);

            // Send FEN to API
            fetch('http://localhost:5000/api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fenstring: currentFen })
            })
                .then(response => response.json())
                .then(data => {
                    console.log("API Response:", data);
                    afterMoveProcessing(data);
                })
                .catch(error => console.error('Error:', error));
        }
    }
});




// Function to process API response
function afterMoveProcessing(apiResponse) {
    console.log("Processing API response...", apiResponse);
}

// Run the check every second (adjust as needed)
checkForMove();
// Example usage
highlightPath("d1", "h5");


