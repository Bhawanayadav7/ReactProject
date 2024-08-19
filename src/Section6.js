import rectangle12 from './rectangle12.jpg';
import rectangle12copy from './rectangle12copy.jpg';
import rectangle12copy2 from './rectangle12copy2.jpg';
export default function Section6(){
    return(
        <section class="design">
        <h1>Our Projects</h1>
        <p>Our passion for furniture goes beyond crafting individual pieces</p>
        <div class="design-box row">
          <div class="design-item col-md-3">
            <img class="img-fluid" src={rectangle12} alt="" />
    
          </div>
          <div class="design-item col-md-3">
            <img class="img-fluid" src={rectangle12copy} alt="" />
            
          </div>
          <div class="design-item col-md-3">
            <img class="img-fluid" src={rectangle12copy2} alt="" />
          </div>
        </div>
      </section>
    );
}