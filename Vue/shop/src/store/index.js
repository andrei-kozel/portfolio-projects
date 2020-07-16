import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    books: [
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg',
        title: 'The Subtle Art of Not Giving a F*ck',
        rating: 4.5,
        description: `In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be "positive" all the time so that we can truly become better, happier people. 
            

`,
        price: '49',
        id: 1,
        counter: 0
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51Fqn4+UodL._SY344_BO1,204,203,200_.jpg',
        title: 'Atomic Habits',
        rating: 4.5,
        description: `People think that when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions – doing two push-ups a day, waking up five minutes early, or holding a single short phone call.
`,
        price: '65',
        id: 2,
        counter: 0
      },
      {
        image: 'https://m.media-amazon.com/images/I/418NnKr2KKL.jpg',
        title: 'Vue: Step-By-Step ',
        rating: 3,
        description: `Vue JS is is a progressive real time framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.

            Also, Vue is becoming more popular day by day and thousands of jobs are posting each day.
`,
        price: '25',
        id: 3,
        counter: 0
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/I/41iYPb47M-L._SX384_BO1,204,203,200_.jpg',
        title: 'Fullstack Vue',
        rating: 4,
        description: `What if you could master the entire framework - with solid foundations - in less time without beating your head against a wall? Imagine how quickly you could work if you knew the best practices and the best tools?
            Stop wasting your time searching and have everything you need to be productive in one, well-organized place, with complete examples to get your project up without needing to resort to endless hours of research.

`,
        price: '30',
        id: 4,
        counter: 0
      }
    ],
    cart: []
  },
  actions: {
    addToCart(context, id) {
      context.commit('addToCart', id)
    },
    removeFromCart(context, id) {
      context.commit('removeFromCart', id)
    }
  },
  mutations: {
    addToCart(state, id) {
      let book = this.getters.getBookById(id)

      if (state.cart.indexOf(book) === -1) {
        book.counter++
        state.cart.push(book)
      } else {
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i].id === id) {
            state.cart[i].counter++
          }
        }
      }
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter(item => item.id != id)
    }
  },
  getters: {
    getBookById: state => id => {
      return state.books.find(book => book.id === parseInt(id))
    },
    getCart: state => state.cart,
    getAllBooks: state => state.books
  }
})
