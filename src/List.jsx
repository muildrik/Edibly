import React, { Component } from 'react';
import ColoredLine from './ColoredLine';

class List extends Component {

  renderList() {
    const items = this.props.items.map(item => {
      return (
        <div className='recipe' name={item.name} key={item.name}>
          <h1>{item.name}</h1>
          <div className='imgDiv'><img src={item.img} alt={item.imgTag}/></div>
          <div className='cookTime'><span className='cookTimeTitle'>Cooking time: </span><span className='cookTimeSpan'>{item.cooktime}</span></div>
          <div className='servings'><span className='servesTitle'>Serves</span><span className='servesSpan'>{item.servings}</span></div>
          <ColoredLine color='white' height={2} />
          <h2>Ingredients</h2>
          <div className='ingredientHeader'><span className='ingredientHeaderKeys'>Name</span><span className='ingredientHeaderKeys'>Type</span><span className='ingredientHeaderKeys'>Amount</span></div>
          <div id={item.id + '_ingredients'} className='ingredients'>
            {
              item.ingredients.map(ingredient => {
                return (
                  <div className='ingredient' key={item.id + ingredient.type + ingredient.name}>
                    <span className='ingredientType' key={ingredient.type}>{ingredient.type}: </span>
                    <span className='ingredientName' key={ingredient.name}>{ingredient.name}</span>
                    <span className='ingredientAmount' key={ingredient.amount}>{ingredient.amount}</span>
                  </div>
                )
              })
            }
          </div>
          <ColoredLine color='white' height={2} />
          <button id={item.id} onClick={this.sortIngredients}>Sort A-Z</button>
        </div>
      )
    });
    return items;
  }

  sortIngredients = (event) => {
    let div = document.getElementById(event.target.id + '_ingredients').childNodes;
    let vals = [];

    for (let i = 0; i < div.length; i++) {
      vals.push(div[i].innerHTML);
    }

    vals.sort();

    for (let i = 0; i < div.length; i++) {
      div[i].innerHTML = vals[i];
    }

  }

  render() {
    return (
      <ul id='recipes' className='recipes'>
        {
          this.renderList()
        }
      </ul>
    );
  }
}

export default List;