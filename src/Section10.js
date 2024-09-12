import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';

export default function Section10(){
    return(
        <section class="footer2">
        <div class="social">
        {/* <img class="social-img" src={facebook} alt="logo" />
        <img class="social-img" src={twitter} alt="logo" />
        <img class="social-img" src={instagram} alt="logo" />
        <img class="social-img" src={linkedin} alt="logo" /> */}
        <a href="https://www.facebook.com/wakefitco/" target="_blank"><img class="social-img" src={facebook} alt="logo" /></a>
        <a href="https://twitter.com/wakefitco?lang=en" target="_blank"><img class="social-img" src={twitter} alt="logo" /></a>
        <a href="https://www.instagram.com/wakefitco/" target="_blank"><img class="social-img" src={instagram} alt="logo" /></a>
        <a href="https://in.linkedin.com/company/wakefitco" target="_blank"><img class="social-img" src={linkedin} alt="logo" /></a>
        </div>
        <h3> &copy; 2024 All rights reserved | design by bhawana Yadav</h3>
      </section>
    );
}

