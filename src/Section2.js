import logo_cabinet from './logo_cabinet.png';
import logo_interiordesign from './logo_interiordesign.png';
import logo_interior from './logo_interior.png';
import logo_stairs from './logo_stairs.png'
export default function Section2(){
    return(
        <section class="services">
        <h1>Our Services</h1>
        <p>Select your favourite custom design for the services we provide below</p>
        <div class="service-container row">
    
          <div class="service-items col-md-3">
            <img src={logo_cabinet} alt="" />
            <h2>Furnitures</h2>
            <p>
            Whether you're moving into a new home or just want to give your current space a fresh look, furniture interior design can make all the difference
            </p>
            <a href="https://www.livspace.com/in/magazine/category/furniture" target="_blank"><button class="btn-service">Read More</button></a>
          </div>
          <div class="service-items col-md-3">
            <img src={logo_interiordesign} alt="" />
            <h2>Office</h2>
            <p>
            In today's fast-paced and highly competitive business world, the design of your office space can play a pivotal role in enhancing productivity, creativity,
            </p>
            <a href="https://www.livspace.com/in/design-ideas/home-office" target="_blank"><button class="btn-service">Read More</button></a>
          </div>
          <div class="service-items col-md-3">
            <img src={logo_interior} alt="" />
            <h2>Home</h2>
            <p>
            Your home is not just a place to live it's an expression of your personality and style. The way you design and decorate your interior spaces can have a 
            </p>
            <a href="https://www.livspace.com/in/design-ideas" target="_blank"><button class="btn-service">Read More</button></a>
          </div>
          <div class="service-items col-md-3">
            <img src={logo_stairs} alt="" />
            <h2>Bedroom</h2>
            <p>
            Your bedroom is more than just a place to sleep it's your personal sanctuary, a haven of relaxation and rejuvenation. The way you design your bedroom
            </p>
            <a href="https://www.livspace.com/in/design-ideas/bedrooms" target="_blank"><button class="btn-service">Read More</button></a>
          </div>
        </div>
      </section>
    );
}