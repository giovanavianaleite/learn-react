import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
      <Router>
        <ul>
          <li>Menu</li>
          <li>Filmes</li>
          <li>Séries</li>
          <li>O que é o The Critic!?</li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
  )
}

export default App;