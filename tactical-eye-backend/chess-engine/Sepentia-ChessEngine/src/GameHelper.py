import FEN
import ChessAI
import sys
from multiprocessing import Process, Queue

test =  ""

fenstr = test if len(sys.argv) == 1 else sys.argv[1]

fen = FEN.FEN()
game_state = fen.fenToGameState(fenstr)

valid_moves = game_state.getValidMoves()

return_queue = Queue()
move_finder_process = Process(target=ChessAI.findBestMove, args=(game_state, valid_moves, return_queue))
move_finder_process.start()


move_finder_process.join()


if not return_queue.empty():
    ai_move = return_queue.get()

else:
    ai_move = ChessAI.findRandomMove(valid_moves)  

print(ai_move,end="")

sys.stdout.flush()
