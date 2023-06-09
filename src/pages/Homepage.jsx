import React from 'react'

function Homepage() {
  return (
    <div>
        <div className='homepageImg'>
            <p className='center'>Try these recipes <br /> <p className='center2'>Breakfast edition</p></p>
            </div>
            <div className='wrap'>
              <div className='wrapDetail'>
                <a className='noneDec' href="/pancakes"><img className='heightWenig' src="https://i.pinimg.com/564x/1b/40/53/1b40530cc6c6de474bab5b0dabeed17e.jpg" alt="" /></a>
              </div>
              <div className='wrapDetail'>
                <a className='noneDec' href="/eggtoast"><img className='heightWenig' src="https://i.pinimg.com/236x/66/10/1a/66101a9d47421320c33b2188d512b599.jpg" alt="" /></a>
              </div>
              <div className='wrapDetail'>
                <a className='noneDec' href="/granola"><img className='heightWenig' src="https://i.pinimg.com/236x/7c/7d/6a/7c7d6a1b35e4daab6ed0f4ec442245af.jpg" alt="" /></a>
              </div>
              <div className='wrapDetail'>
                <a className='noneDec' href="/smoothie"><img className='heightWenig' src="https://i.pinimg.com/236x/29/eb/47/29eb475cac17073df06a14f6bfe14cc3.jpg" alt="" /></a>
              </div>
            </div>
            <div className='footer'>
              <br />
              <br />

              <p className='bonbon'>Bon Appétit!</p>
            </div>
    </div>
  )
}

export default Homepage 