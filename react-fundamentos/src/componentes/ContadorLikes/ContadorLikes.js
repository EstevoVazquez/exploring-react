import React from 'react'
class ContadorLikes extends React.Component {
    
    state = {
      author: "Estevo",
      video: {
        title: 'Super Video',
        likes: 0
      }
    }
    add = () => {
      this.setState(state => ({
        video: {
          ...state.video,
          likes: state.video.likes + 1
        }
      }))
    }

    render () {
        return (
          <div>
            <h1>
              { this.state.video.title } by {this.state.author}
            </h1>
            <button
              onClick={this.add}
            >
              Likes: ({ this.state.video.likes })
            </button>
          </div>
        )
      }
}

export default ContadorLikes