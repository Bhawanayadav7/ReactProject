import cradle from './cradle.png';
export default function Section3(){
    return(
        <section class="about row ">
    <div class="about-left col-md-5">
      <h1>About Us</h1>
      <p>
      Welcome to Build Better, where furniture isn't just a piece of decor; it's a cornerstone of your lifestyle. We believe that the furniture you choose should not only enhance the aesthetics of your living space but also elevate your everyday life. Our mission is to help you create homes that are not just beautiful but also functional, comfortable, and sustainable.
      </p>
      <a href='https://www.wakefit.co/furniture' target="_blank"><button class="about-btn">Read More</button></a>
    </div>
    <div class="about-right col-md-6">
      <img class="img-fluid" src={cradle} alt="" />
    </div>
  </section>
    );
}