import React, { Component } from 'react';
import { DropdownButton, Button } from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import List from './List';

const query = '';
// const servingSize = 4;
// const servingSizeExact = true;

/**
 * # FilteredList
 * This component presents the user's search queries and keeps track of the user's chosen options
 * ### Implements components
 * - List
 * - DropdownButton, Button, Form (react-bootstrap)
 * ### Props
 * - recipes : array of JSON objects with recipe data
 * ### State
 * - searchRecipe (string) : current search terms
 * - type (array) : array of strings with types of recipes
 * - servings (array) : array of integers with number of servings
 * - total (integer) : total recipes passed in via props
 * - found (integer) : total number of recipes found based on search terms
 */
class FilteredList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes : this.props.items,
      searchRecipe : query,
      searchTypes : JSON.parse(JSON.stringify(this.props.recipeTypes)),
      recipeTypes : JSON.parse(JSON.stringify(this.props.recipeTypes)),
      servingSize : 4,
      servingSizeExact : true
    };
    this.default = JSON.parse(JSON.stringify(this.props.recipeTypes));
  }

  render() {

    // Render DOM elements
    return (
      <div className="filterList">
        <h1>My wife's delicious home-made cooking!</h1>
        <div className='utils'>
          <div className='search'>
            <label htmlFor='searchRecipe'>Search for</label>
            <input id="searchRecipe" type="text" placeholder="a delicious recipe from my wife's cookbook..." onChange={this.searchRecipe} />
          </div>
          <div className='filters'>
            <label htmlFor='typeDropdown'>Dietary preferences</label>
            <DropdownButton id="typeDropdown" title="Select">
              <Form id='typeDropdownForm'>
                { this.state.recipeTypes.map(recipeType => <Form.Check defaultChecked key={recipeType} title={recipeType} label={recipeType} onChange={(e, data) => this.updateRecipeType(recipeType)} />) }
              </Form>
            </DropdownButton>
            <Form.Label htmlFor="inputPassword5">Servings</Form.Label>
            <Form.Control
              type="number"
              id="servingSize"
              value={this.state.servingSize}
              // aria-describedby="servingsHelpBlock"
              onChange={this.updateServingSize}
              // onChange={(e, data) => this.updateServingSize()}
            />
            {/* <Form.Text id="servingsHelpBlock" muted> */}
              {/* Please provide the minimum number of servings you are looking for */}
            {/* </Form.Text> */}
            <Form.Check defaultChecked key='findExactServingMatch' label="exactly" onChange={this.updateServingSizeExact} />
            
              {/* <Dropdown.Item eventKey="All" onSelect={this.typeHandler}></Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Meat" onSelect={this.typeHandler}>Meat</Dropdown.Item>
              <Dropdown.Item eventKey="Vegetarian" onSelect={this.typeHandler}>Vegetarian</Dropdown.Item> */}
            
            {/* <label htmlFor='servesDropdown'>How many people are eating?</label>
            <DropdownButton id="servesDropdown" title={this.state.servings}>{this.state.servings}
              {/* <MenuItem eventKey="All" onSelect={this.servingsHandler}>All</MenuItem> */}
              {/* <MenuItem divider /> */}
              {/* <MenuItem eventKey="Two" onSelect={this.servingsHandler}>Two</MenuItem> */}
              {/* <MenuItem eventKey="Four" onSelect={this.servingsHandler}>Four</MenuItem> */}
              {/* <MenuItem eventKey="Six" onSelect={this.servingsHandler}>Six</MenuItem> */}
              {/* <MenuItem eventKey="Eight" onSelect={this.servingsHandler}>Eight</MenuItem> */}
            {/* </DropdownButton> */}
          </div>
          <div className='sortAndReset'>
            <Button onClick={this.sortHandler}>Sort A-Z</Button>
            <Button onClick={this.resetHandler}>Reset</Button>
          </div>
          <div className='recipeDiv'>
            <List items={this.state.recipes.filter(this.filterItem)} />
          </div>
        </div>
      </div>
    )
  }

  updateRecipeType = recipeType => {
    let recipeTypes = this.state.searchTypes;
    let idx = recipeTypes.indexOf(recipeType);
    (idx > -1) ? recipeTypes.splice(idx, 1) : recipeTypes.push(recipeType)
    this.setState({ 'searchTypes' : recipeTypes })
  }

  updateServingSize = e => {
    this.setState({ 'servingSize' : parseInt(e.target.value) })
  }

  updateServingSizeExact = e => {
    this.setState({ 'servingSizeExact' : e.target.checked })
  }

  /**
   * Search function to filter through recipes. This should be replaced with a database query function.
   * @param {string} item 
   * @returns recipes that match the query
   */
  filterItem = item => {
    let foundItem;

    if (item.name.toLowerCase().search(this.state.searchRecipe) !== -1) {
      
      // ONLY RETURN MATCHING RECIPE TYPES
      if (this.state.searchTypes.includes(item.type)) {
        
        // ONLY RETURN EXACT SERVING SIZE MATCHES
        if (this.state.servingSizeExact) {
          
          if (this.state.servingSize === item.servings) {
            // count++
            this.props.updateCounter('increment')
            foundItem = item.name
          }
        
        } else {
          
          if (this.state.servingSize <= item.servings) {
            // count++
            this.props.updateCounter('increment')
            foundItem = item.name
          }
          
        }
      }
    }

    return foundItem
  }

  searchRecipe = event => {
    let query = event.target.value.trim().toLowerCase()
    this.setState({ searchRecipe : query });
  }

  typeHandler = e => {
    let checkboxes = document.getElementById('typeDropdownForm').querySelectorAll();
    let names = checkboxes.values(box => box.id)
    this.setState({ type : names });
    this.searchRecipe()
  }

  servingsHandler = eventKey => {
    let dropdown = document.getElementById('servesDropdown');
    dropdown.title = eventKey;
    dropdown.innerText = eventKey;
    this.setState({ servings : eventKey });
  }

  sortHandler = event => {
    let ul = document.getElementById('recipes');
    let recipes = ul.children;
    let sortedRecipes = [];

    for (let i = 0; i < recipes.length; i++) {
      sortedRecipes.push(recipes[i].getAttribute('name'));
    }

    sortedRecipes.sort();

    for (let i = 0; i < sortedRecipes.length; i++) {
      for (let j = 0; j < recipes.length; j++) {
        let name = recipes[j].getAttribute('name');
        if (sortedRecipes[i] === name) {
          ul.append(recipes[j]);
        }
      }
    }
  }

  unsort = event => {
    let ul = document.getElementById('recipes');
    let recipes = ul.children;
    let original = this.props.items;

    for (let j = 0; j < original.length; j++) {
      let name = original[j].name;
      for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].getAttribute('name') === name) {
          ul.append(recipes[i]);
        }
      }
    }
  }

  resetHandler = event => {
    this.setState(this.default, () => {
      document.getElementById('searchRecipe').value = this.state.searchRecipe;
      // document.getElementById('typeDropdown').title = this.state.type;
      // document.getElementById('typeDropdown').innerHTML = this.state.type;
      // document.getElementById('servesDropdown').title = this.state.servings;
      // document.getElementById('servesDropdown').innerHTML = this.state.servings;
      // document.getElementById('systemMsg').innerHTML = 'Displaying ' + this.state.found + ' out of ' + this.state.total + ' recipes';
      this.unsort();
    });
  }
}

export default FilteredList;