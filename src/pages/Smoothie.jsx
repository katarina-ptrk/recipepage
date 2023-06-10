import React from 'react'

function Smoothie() {
  return (
    <div className="body">
      <div className="flexPan">
        <div className="nochCenter">
        <img
          className="imgPan"
          src="https://i.pinimg.com/236x/29/eb/47/29eb475cac17073df06a14f6bfe14cc3.jpg"
          alt=""
        />
        <div className="overflow">
          <h1 className="fontFam">
          Breakfast Smoothie <br />
            <p className="smaller">super-shake</p>
          </h1>
          </div>
        </div>
        <div className="recipePan">
          <div className="inPan">
            <h4>What you need?</h4>
              <p>100ml full-fat milk</p>
              <p>2 tbsp natural yogurt</p>
              <p>1 banana</p>
              <p>150g frozen fruits of the forest</p>
              <p>50g blueberries</p>
              <p>1 tbsp goji berries</p>
          </div>
          <div className="dirPan">
            <h4>Directions</h4>
            <h6>Step 1</h6>
            <p>
            Put the ingredients in a blender and blitz until smooth. Pour into a glass and enjoy!
            </p>
          </div>
        </div>
      </div>
      <div className="footerPan"><a href="/">Try other recipes</a></div>
    </div>
  )
}

export default Smoothie