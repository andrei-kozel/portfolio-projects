<template>
  <div id="app">
    <transition-group
      name="tile"
      class="board"
    >
      <div
        :class="{ tile: true, 'tile-empty': !tile, won: solved }"
        v-for="(tile, index) in board"
        :key="tile"
        @click="moveTile(index)"
      >
        {{ tile }}
      </div>
    </transition-group>
    <button
      type="button"
      @click="createBoard"
    >New game</button>
    <transition name="modal-fade">
      <ModalWinner
        v-if="isModalOpen"
        @close="closeModal"
      />
    </transition>
  </div>
</template>

<script>
import ModalWinner from "./components/Modal";

export default {
  data() {
    return {
      board: [],
      answer: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""],
      solved: false,
      isModalOpen: false
    };
  },
  components: {
    ModalWinner
  },
  methods: {
    /**
     * Sets up board, creating tile array and adding tile elements to board
     */
    createBoard() {
      // temporary array to store board
      let tempBoard = [];

      // fills array with number 1 to 15
      for (let i = 1; i < 16; i++) {
        tempBoard.push(i);
      }

      // shuffles tiles on the temporary "board"
      tempBoard = tempBoard.sort(() => {
        return Math.random() - 0.5;
      });

      // assigns temporary board to main board
      this.board = tempBoard;
      this.board.push("");
      this.solved = false;
      this.moves = 0;
    },

    moveTile(index) {
      // saves the current tile and those that it boarders with
      let currentTile = this.board[index];
      let leftTile = this.board[index - 1];
      let rightTile = this.board[index + 1];
      let topTile = this.board[index - 4];
      let bottomTile = this.board[index + 4];

      // looking in which direction to move (looking for an empty tile)
      if (leftTile === "" && index % 4) {
        this.swapTiles(index, index - 1, currentTile);
      } else if (rightTile === "" && 3 !== index % 4) {
        this.swapTiles(index, index + 1, currentTile);
      } else if (topTile === "") {
        this.swapTiles(index, index - 4, currentTile);
      } else if (bottomTile === "") {
        this.swapTiles(index, index + 4, currentTile);
      }

      this.checkStatus();
    },

    // swaps a tile with an empty tile
    swapTiles(currentIndex, emptyTileIndex, currentTile) {
      this.$set(this.board, emptyTileIndex, currentTile);
      this.$set(this.board, currentIndex, "");
    },

    // checks the winner by comparing the arrays, and shows the modal window
    checkStatus() {
      if (JSON.stringify(this.board) === JSON.stringify(this.answer)) {
        this.solved = true;
        this.isModalOpen = true;
      } else {
        this.solved = false;
      }
    },

    closeModal() {
      this.isModalOpen = false;
    }
  },
  created() {
    this.createBoard();
  }
};
</script>

<style>
html,
body {
  font-family: "Open Sans", sans-serif;
  background-color: #32323e;
  height: 100%;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

#app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.board {
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(4, 80px);
  grid-gap: 10px;
  max-width: 470px;
}

.tile {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f44c4e;
  color: #fff;
  font-size: 20pt;
  cursor: pointer;
  z-index: 2;
}

.won {
  background-color: #28a745;
}

.tile-empty {
  background-color: #6c757d;
  z-index: 1;
}

button {
  margin-top: 32px;
  padding: 18px 32px;
  font-size: 16pt;
  cursor: pointer;
  background-color: #fff;
  text-transform: uppercase;
  color: #32323e;
  border-style: none;
  border-color: none;
  transition: filter 0.3s;
}

button:active {
  transform: scale(0.99);
}

button:focus {
  outline: none;
}

button:hover {
  filter: brightness(85%);
}

/* tiles transition animation */
.tile-move {
  transition: transform 0.2s;
}

/* modal window fade animation */
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>
