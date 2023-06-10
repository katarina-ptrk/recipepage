import React from "react";

function Pancakes() {
  return (
    <div className="body">
      <div className="flexPan">
        <div className="nochCenter">
        <img
          className="imgPan"
          src="https://i.pinimg.com/564x/1b/40/53/1b40530cc6c6de474bab5b0dabeed17e.jpg"
          alt=""
        />
        <div className="overflow">
          <h1 className="fontFam">
            American Pancakes <br />
            <p className="smaller">Old recipe</p>
          </h1>
          </div>
        </div>
        <div className="recipePan">
          <div className="inPan">
            <h4>What you need?</h4>
              <p>1 ½ cups all-purpose flour</p>
              <p>3 ½ teaspoons baking powder</p>
              <p>1 tablespoon white sugar</p>
              <p>¼ teaspoon salt, or more to taste</p>
              <p>1 ¼ cups milk</p>
              <p>3 tablespoons butter, melted</p>
              <p>1 egg</p>
          </div>
          <div className="dirPan">
            <h4>Directions</h4>
            <h6>Step 1</h6>
            <p>
              Sift flour, baking powder, sugar, and salt together in a large
              bowl. Make a well in the center and add milk, melted butter, and
              egg; mix until smooth.
            </p>
            <h6>Step 2</h6>
            <p>
              Heat a lightly oiled griddle or pan over medium-high heat. Pour or
              scoop the batter onto the griddle, using approximately 1/4 cup for
              each pancake; cook until bubbles form and the edges are dry, about
              2 to 3 minutes. Flip and cook until browned on the other side.
              Repeat with remaining batter.
            </p>
            <h6>Step 3</h6>
            <p>Decorate them and Bon Appétit!</p>
          </div>
        </div>
      </div>
      <div className="footerPan"><a href="/">Try other recipes</a></div>
    </div>
  );
}

export default Pancakes;
