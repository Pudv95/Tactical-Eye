
var browser = browser || chrome;
function extractContent() {
    let pagecontent = document.querySelector("wc-chess-board.board");
    if (!pagecontent) {
        browser.storage.local.set({ fen: "Some error" });
        return;
    }

    let pageHTML = pagecontent.outerHTML;
    pageHTML = pageHTML.split("").reverse().join("");

    let match = pageHTML.match(/>--seceiP\/--!<([\s\S]*?)>--stceffE\/--!</);
    if (match && match[1]) {
        let extractedContent = match[1].trim();
        const fenString = htmlToFEN(extractedContent.split("").reverse().join(""));
        return fenString;
    } else {
        browser.storage.local.set({ fen: "Some error" });
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

const observer = new MutationObserver( async (mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const fenString = extractContent();
            const storedFen = await browser.storage.local.get("fen");
            if(fenString !== storedFen.fen) {
                // browser.runtime.sendMessage({ type: "MoveMade", data: fenString });
            }
        }
    }
});

const chessBoard = document.querySelector("wc-chess-board.board");

if (chessBoard) {
    observer.observe(chessBoard, {
        childList: true,
    });
}



browser.runtime.onMessage.addListener((message) => {
    if (message.type === "getFen") {
        extractContent();
    }
});