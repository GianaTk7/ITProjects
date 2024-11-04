import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
    
    <div className='Footer-container'>
      <div className="footer-holder">
        <div className='Contact-div'>
     <h1>Don't Miss Out </h1>
     <p>"Style that speaks, quality that lasts."</p>

       <div className='form-div'>
     <form>
      <input type='text' name= 'email' placeholder='email' id='emailbox' />
   <input type='date' name='name' placeholder='Date' id='date'/>
     </form>
       </div>
       <div class="comment-section">
  <label for="comment">Add a Comment:</label>
  <input type="text" id="comment" name="comment" placeholder="Write your comment here.. "/>
  <button type="submit">Submit</button>
</div>

        </div>


        <div className='Credetails-div'></div>

      </div>
      </div>
    </>
  )
}

export default Footer