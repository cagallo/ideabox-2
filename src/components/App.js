import React, {
  Component
} from 'react';
import Ideas from '../components/Ideas';
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

  render() {
    return ( 
      <main className = 'App'>
      <h1> IdeaBox </h1> 
      <Ideas name='Travis'/>
      </main>
    )
  }
}

export default App;