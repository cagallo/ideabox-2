import React, {
  Component
} from 'react';
import Ideas from '../components/Ideas';
import Form from '../components/Form';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [{
          id: 1,
          title: 'Hug Dingo',
          description: 'My boy could use a big hug right now'
        },
        {
          id: 2,
          title: 'Walk Teddy',
          description: 'Must walk my demon so he does not hurt me'
        },
        {
          id: 3,
          title: 'Kiss Travie',
          description: 'Wanna kisss zaddy'
        },
      ]
    }
  }

  addIdea = (newIdea) => {
    this.setState({ideas: [...this.state.ideas, newIdea]})
  }

  deleteIdea = (id) => {
    console.log(id);
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ideas: filteredIdeas});
  }

  render() {
    return ( 
      <main className = 'App'>
      <h1> IdeaBox </h1> 
      <Form addIdea={this.addIdea} />
      {!this.state.ideas.length && <h2>No ideas yet--add some!</h2> }
      <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </main>
    )
  }

}

export default App;