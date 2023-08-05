import {createStore} from 'vuex'

export const store =  createStore({
  state() {
    return {
      isDark: false,
      isXturn: false,
      inputArray: [],
      endGame: false,
      endGameMsg: '',
      winningCondition: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ],
      isDraw: false
    }
  },
  mutations: {
    changeMode(state) {
      state.isDark = !state.isDark
    },
    changeTurn(state) {
      state.isXturn = !state.isXturn
    },
    checkWin(state) {
      for(let i = 0; i <= 7; i++) {
        const winCond = state.winningCondition[i]

        const a = state.inputArray[winCond[0]]
        const b = state.inputArray[winCond[1]]
        const c = state.inputArray[winCond[2]]

        if(a == null || b == null || c == null) {
          continue
        }

        if(a == b && b == c) {
          state.endGame = true
          if(a == 'x') {
            state.endGameMsg = 'X wins'
          } else if(a == 'o') {
            state.endGameMsg = 'O wins'
          }
          break
        }
      }
    },
    checkDraw(state) {
      const playerMoves = document.querySelectorAll('i')
      if(playerMoves.length == 9 && !state.endGame) {
        state.isDraw = !state.isDraw
        state.endGame = true
        state.endGameMsg = "It's a draw"
      }

    },
    stopGame(state) {
      if(state.endGame) {
        const squares = document.querySelectorAll('.btn')
        squares.forEach(btn => btn.classList.add('pointer-events-none'))
      }
    }
  }
})