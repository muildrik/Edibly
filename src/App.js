// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col, NavDropdown } from "react-bootstrap";
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
import Preferences from "./components/preferences";

// App Component
function App() {
  return (
    <Router basename="/">
      <div className="App">
        <header className="App-header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="api/recipes/">Edibly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link as={Link} to={"/at-a-glance"} className="nav-link">At a Glance</Nav.Link>
                    <Nav.Link as={Link} to={"/api/shopping/list"} className="nav-link">Shopping List</Nav.Link>
                    <NavDropdown title="Shopping" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to={"api/shopping/find-product"}>Find product</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"api/shopping/browse"}>Browse</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to={"api/shopping/scan"}>Scan product</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Meal plan" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to={"api/meal-plan/new-plan"}>New meal plan</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to={"api/meal-plan/new-meal"}>New meal</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Recipes" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to={"api/recipes"}>Recipes</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to={"api/recipes/new-recipe"}>New recipe</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to={"/api/preferences"} className="nav-link">Preferences</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
        
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="api/recipes" element={<RecipeList />} />
                  <Route path="api/recipes/new-recipe" element={<NewRecipe />} />
                  {/* <Route path="/update-recipe/:id" element={<EditRecipe />} /> */}
                  {/* <Route path="/recipe-list" element={<RecipeList />} /> */}
                  <Route path="api/preferences" element={<Preferences />} />
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