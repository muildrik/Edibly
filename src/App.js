// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import React-router-dom Components
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";

// Import custom Components
// import AddIngredient from "./Components/ingredientNew";
import NewRecipe from "./components/recipeNew";
import EditRecipe from "./components/recipeEdit";
import RecipeList from "./components/recipeList";

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand as={Link} to="/">Recipebook</Navbar.Brand>
                <Navbar.Collapse>
                  <Nav className="justify-content-end">
                    <Nav>
                      <Nav.Link as={Link} to={"/recipe-list"} className="nav-link">Recipe List</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link as={Link} to={"/update-recipe"} className="nav-link">Update Recipe</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link as={Link} to={"new-recipe"} className="nav-link">Add Recipe</Nav.Link>
                    </Nav>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
        
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<NewRecipe />} />
                  <Route path="/new-recipe" element={<NewRecipe />} />
                  <Route path="/update-recipe/:id" element={<EditRecipe />} />
                  <Route path="/recipe-list" element={<RecipeList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;

// // // const [data, setData] = React.useState(null);

// // // React.useEffect(() => {
// // //   fetch("/api")
// // //     .then((res) => res.json())
// // //     .then((data) => setData(data.message));
// // // }, []);

// // /**
// //  * App class renders FilteredList with recipes passed in as items variable 
// //  * TODO: retrieve recipes from database
// //  */
// // class App extends Component {

// //   constructor(props) {
// //     super(props)
// //     this.state = {
// //       found : 0
// //     };
// //   }
// //   updateCounter = (type) => {
// //     let count = this.state.found;
// //     type === 'increment' ? count++ : count-- ;
// //     this.setState({ found : count });
// //   }

// //   render() {
// //     return (
// //       <div className="App">
// //         <FilteredList items={recipes} recipeTypes={recipeTypes} flavors={flavors} updateCounter={this.updateCounter} />
// //         <SystemMsg total={recipes.length} found={this.state.found}></SystemMsg>
// //       </div>
// //     );
// //   }
// // }

// // const recipeTypes = ['meat', 'fish', 'vegetables', 'fruit']
// // // const dietaryPreferences = ['vegan', 'vegetarian', 'pescatarian']
// // const flavors = ['sweet', 'sour', 'savory', 'salty']

// // /** Constant with recipe data to be displayed in FilteredList Component */
// // const recipes = [

// // export default App;