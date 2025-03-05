from ChessEngine import GameState, CastleRights

class FEN:
    def __init__(self):
        self.reverse_conversion = {
            "r": "bR", "n": "bN", "b": "bB", "q": "bQ", "k": "bK", "p": "bp",
            "R": "wR", "N": "wN", "B": "wB", "Q": "wQ", "K": "wK", "P": "wp"
        }

    def fenToGameState(self, fen):
        parts = fen.split()[-6:]
        try:
            board_part, turn, castling, enpassant, halfmove, fullMoves = parts
        except Exception as e:
            print(e)
            return None
        # Reconstruct board
        board = []
        rows = board_part.split('/')
        for row in rows:
            new_row = []
            for char in row:
                if char.isdigit():
                    new_row.extend(["--"] * int(char))  # Empty squares
                else:
                    new_row.append(self.reverse_conversion.get(char, char))
            board.append(new_row)

        # Initialize GameState
        gameState = GameState(board)
        gameState.white_to_move = (turn == "w")

        # Castling rights
        gameState.current_castling_rights = CastleRights(
            "K" in castling, "Q" in castling,
            "k" in castling, "q" in castling
        )

        # En passant
        if enpassant != "-":
            file = ord(enpassant[0]) - ord('a')
            rank = 8 - int(enpassant[1])
            gameState.enpassant_possible = (rank, file)
        else:
            gameState.enpassant_possible = ()

        # Move counter
        gameState.move_counter = int(halfmove)

        return gameState
    
    def gameStateToFen(self, gameState):
        board = gameState.board
        fen = ""
        
        # Convert board state
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
        
        fen = fen.rstrip('/')  # Remove last slash

        # Active player
        fen += " " + ("w" if gameState.white_to_move else "b")

        # Castling rights
        castling = ""
        if gameState.current_castling_rights.wks: castling += "K"
        if gameState.current_castling_rights.wqs: castling += "Q"
        if gameState.current_castling_rights.bks: castling += "k"
        if gameState.current_castling_rights.bqs: castling += "q"
        fen += " " + (castling if castling else "-")

        # En passant target square
        enpassant = (
            chr(gameState.enpassant_possible[1] + ord('a')) + str(8 - gameState.enpassant_possible[0])
            if gameState.enpassant_possible else "-"
        )
        fen += " " + enpassant

        # Halfmove clock (Moves since last capture or pawn move)
        fen += " " + str(gameState.move_counter)

        # Fullmove number (Starts at 1 and increments after Black’s move)
        fullmove_number = len(gameState.move_log) // 2 + 1
        fen += " " + str(fullmove_number)

        return fen