import brooke from './brooke.png';
import ky from './ky.png'
export default function Section7(){
    return(
        <section>
    <div class="client">
        <div class="c2">
            <h1>WHAT IT SAYS OUR CLIENTS</h1>
            <p>Reviews of our clients from all over the world.</p>
        </div>
        <div class="client-items">

          <div class="row" id='disp-11' >

            <div class="client-item client-item1  col-md-6 " id='disp-1'>
              <img src={brooke} alt="" />
              <p>I recently purchased a dining table and chairs from Build Better, and I couldn't be happier. The quality of the furniture is exceptional, and it has transformed our dining area into a stylish and functional space.</p>
            </div>
          
          </div>
          <div class="row justify-content-end" id='disp-22'  >

            <div class="client-item client-item2 col-md-6" id='disp-2'>
              <img src={ky} alt="" />
              <p>I was pleasantly surprised by the wide range of furniture options at Build Better. We were looking for a specific style to match our new home, and we found just what we were looking for.</p>
            </div>
          </div>


        </div>
     
    </div>
  </section>
    );
}