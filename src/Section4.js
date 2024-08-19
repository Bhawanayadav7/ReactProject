import tap from './tap.png';
import kitchen from './kitchen.png';
export default function Section4(){
    return(
        <section class="shop">
        <h1>Our Furnitures</h1>
        <p>Our commitment to providing exceptional pieces for your home or office is reflected in every item we offer</p>
       
        <div class="shop-box row">
          <div class="shop-item col-md-5">
            <img class="img-fluid" src={kitchen} alt="" />
            <h3>Craftsmanship</h3>
            <p>
            Each piece of furniture in our collection is a testament to the skill and dedication of our artisans. We believe that quality craftsmanship is the foundation of lasting beauty.
            </p>
          </div>
          <div class="shop-item col-md-5">
            <img class="img-fluid" src={tap} alt="" />
            <h3>Quality Materials</h3>
            <p>
            We understand that furniture is an investment in your living space, which is why we use only the finest materials in our creations.Materials that last long.
            </p>
          </div>
        </div>
      </section>
    );
}