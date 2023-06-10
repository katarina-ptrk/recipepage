import React from 'react'

function Eggtoast() {
  return (
    <div className="body">
      <div className="flexPan">
        <div className="nochCenter">
        <img
          className="imgPan"
          src="https://i.pinimg.com/236x/66/10/1a/66101a9d47421320c33b2188d512b599.jpg"
          alt=""
        />
        <div className="overflow">
          <h1 className="fontFam">
          Egg & Bread Toast <br />
            <p className="smaller">with vegetables</p>
          </h1>
          </div>
        </div>
        <div className="recipePan">
          <div className="inPan">
            <h4>What you need?</h4>
              <p>eggs</p>
              <p>spices</p>
              <p>vegetbles</p>
              <p>crumbled feta cheese</p>
              <p>parsley</p>
              <p>extra virgin olive oil</p>
              <p>bread</p>
          </div>
          <div className="dirPan">
            <h4>Directions</h4>
            <h6>Step 1</h6>
            <p>
            Prepare the egg and vegetable mixture. To a medium mixing bowl, add 4 to 5 large eggs, kosher salt, ½ teaspoon paprika, and ½ teaspoon red pepper flakes or Aleppo-style pepper. Whisk, then add 1 chopped bell pepper, ½ cup halved or chopped cherry tomatoes, green onions, ¼ cup crumbled feta cheese, 2 tablespoons chopped parsley, and a drizzle of extra virgin olive oil. 
            </p>
            <h6>Step 2</h6>
            <p>
            Add eggs and vegetables to the bread. Brush a sheet pan lightly with olive oil and arrange 4 slices of bread in it. Divide the egg mixture among the bread, making sure all the slices have some vegetables and feta cheese on top. 
            </p>
            <h6>Step 3</h6>
            <p>Bake the bread. Bake on the center rack of your oven heated to 375°F for about 15 minutes. The eggs should be cooked and the vegetables should have softened slightly.</p>
          </div>
        </div>
      </div>
      <div className="footerPan"><a href="/">Try other recipes</a></div>
    </div>
  )
}

export default Eggtoast