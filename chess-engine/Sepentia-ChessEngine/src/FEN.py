class FEN:
    def __init__(self):    
        self.conversion = {
            "bR" : "r", "bN" : "n",
            "bB" : "b", "bQ" : "q",
            "bK" : "k", "bp" : "p",
            "wR" : "R", "wN" : "N",
            "wB" : "B", "wQ" : "Q",
            "wK" : "K", "wp" : "P",
            "p" : "bp", "r" : "bR",
            "n" : "bN", "b" : "bB",
            "q" : "bQ", "k" : "bK",
            "P" : "wp", "R" : "wR",
            "N" : "wN", "B" : "wB",
            "Q" : "wQ", "K" : "wK"
        }
    def boardToFen(self, board):
        fen = ""
        for row in board:
            empty = 0
            for square in row:
                if square == "--":
                    empty += 1
                else:
                    if empty > 0:
                        fen += str(empty)
                        empty = 0
                    fen += self.conversion.get(square, square)
            if empty > 0:
                fen += str(empty)
            fen += "/"
        return fen.rstrip('/')
    
    def fenToBoard(self, fen):
        board = []
        rows = fen.split("/")
        for row in rows:
            boardRow = []
            for square in row:
                if square.isdigit():
                    for i in range(int(square)):
                        boardRow.append("--")
                else:
                    boardRow.append(self.conversion.get(square, square))
            board.append(boardRow)
        return board
    
board = [
            ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
            ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
            ["--", "--", "--", "--", "--", "--", "--", "--"], 
            ["--", "--", "--", "--", "--", "--", "--", "--"],
            ["--", "--", "--", "--", "--", "--", "--", "--"],
            ["--", "--", "--", "--", "--", "--", "--", "--"],
            ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
            ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"]]