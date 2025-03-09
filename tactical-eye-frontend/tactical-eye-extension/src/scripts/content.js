
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
        browser.storage.local.set({ fen: fenString });
        browser.runtime.sendMessage({ type: "fen", data: fenString });
        console.log("FEN:", fenString);
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


browser.runtime.onMessage.addListener((message) => {
    if (message.type === "getFen") {
        extractContent();
    }
});