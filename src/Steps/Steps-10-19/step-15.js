import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      friends: [
        {
          name: 'Nick Nish',
          handle: '@nickjnish',
          image: 'https://avatars.io/twitter/@nickjnish'
        },
        {
          name: 'Shane Rogers',
          handle: '@shanerogers',
          image: 'https://avatars.io/twitter/@shanedjrogers'
        },
        {
          name: 'Andrew Wen',
          handle: '@andrew.wen',
          image: 'https://cataas.com/c'
        }
      ]
    }
  }

  render() {
    return (
      <div id="container">
        {/* Use our state! */}
        {this.state.friends.map(friend => {
          return (
            <Profile
              name={friend.name}
              handle={friend.handle}
              image={friend.image}
            />
          )
        })}
      </div>
    )
  }
}

function Profile(props) {
  return (
    <div className="profile">
      <img className="avatar" src={props.image} />
      <div className="profile-info">
        <h3 className="name">{props.name}</h3>
        <p className="handle">{props.handle}</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
