import React, { Component } from 'react'

class App extends Component {
  state = {
    drumPad: [
      {
        key: 81,
        keyTitle: 'Q',
        sound: require('./assets/sound/clap.wav'),
        title: 'Clap',
        active: false
      },
      {
        key: 87,
        keyTitle: 'W',
        sound: require('./assets/sound/boom.wav'),
        title: 'Boom',
        active: false
      },
      {
        key: 69,
        keyTitle: 'E',
        sound: require('./assets/sound/hihat.wav'),
        title: 'Hihat',
        active: false
      },
      {
        key: 65,
        keyTitle: 'A',
        sound: require('./assets/sound/openhat.wav'),
        title: 'Openhat',
        active: false
      },
      {
        key: 83,
        keyTitle: 'S',
        sound: require('./assets/sound/ride.wav'),
        title: 'Ride',
        active: false
      },
      {
        key: 68,
        keyTitle: 'D',
        sound: require('./assets/sound/snare.wav'),
        title: 'Snare',
        active: false
      },
      {
        key: 90,
        keyTitle: 'Z',
        sound: require('./assets/sound/tink.wav'),
        title: 'Tink',
        active: false
      },
      {
        key: 88,
        keyTitle: 'X',
        sound: require('./assets/sound/tom.wav'),
        title: 'Tom',
        active: false
      },
      {
        key: 67,
        keyTitle: 'C',
        sound: require('./assets/sound/kick.wav'),
        title: 'Kick',
        active: false
      }
    ]
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyUpHandler)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyUpHandler)
  }

  keyUpHandler = (event) => {
    this.state.drumPad.map((item) => {
      return event.keyCode === item.key ? this.playSound(item, event) : null
    })
  }

  playSound = (item, event) => {
    item.active = true
    this.setState({ ...this.state.drumPad, item })
    const audio = new Audio(item.sound)
    audio.currentTime = 0
    audio.play()
    setTimeout(() => {
      item.active = false
      this.setState({ ...this.state.drumPad, item })
    }, 400)
  }

  render() {
    const drum = this.state.drumPad.map((item) => {
      return (
        <div
          data-key={item.key}
          id={item.title}
          className={['key', item.active ? 'playing' : null].join(' ')}
          key={item.key}>
          <kbd>{item.keyTitle}</kbd>
          <span className="sound">{item.title}</span>
        </div>
      )
    })
    return (
      <div className="App" id="drum-machine">
        <div className="keys" id="display">
          {drum}
        </div>
      </div>
    )
  }
}

export default App
