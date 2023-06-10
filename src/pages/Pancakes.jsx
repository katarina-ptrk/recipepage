import React from "react";

function Pancakes() {
  return (
    <div className="flexPan">
      <div>
        <img
          className="imgPan"
          src="https://images.unsplash.com/photo-1612182062633-9ff3b3598e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
          alt=""
        />
      </div>
      <div>
        <h1 className="fontFam">American Pancakes</h1>
        <hr className="blackPan" />
        <br />
        <h4>What you need?</h4>
        <ul>
          <li>1 ½ cups all-purpose flour</li>
          <li>3 ½ teaspoons baking powder</li>
          <li>1 tablespoon white sugar</li>
          <li>¼ teaspoon salt, or more to taste</li>
          <li>1 ¼ cups milk</li>
          <li>3 tablespoons butter, melted</li>
          <li>1 egg</li>
        </ul>
        <h4>Directions</h4>
        <h6>Step 1</h6>
        <p>Sift flour, baking powder, sugar, and salt together in a large bowl. Make a well in the center and add milk, melted butter, and egg; mix until smooth.</p>
        <h6>Step 2</h6>
        <p>Heat a lightly oiled griddle or pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake; cook until bubbles form and the edges are dry, about 2 to 3 minutes. Flip and cook until browned on the other side. Repeat with remaining batter.</p>
        <h6>Step 3</h6>
        <p>Decorate them and Bon Appétit!</p>
      </div>
    </div>
  );
}

export default Pancakes;
