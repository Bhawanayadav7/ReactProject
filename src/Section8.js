import rectangle_9_2 from './rectangle_9_2.jpg';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Section8(){
  const NameRef=useRef();
  const EmailRef=useRef();
  const PhoneNumberRef=useRef();
  const MessageRef=useRef();
  const navigate=useNavigate();
  
  const handleSubmit=()=>{
    const Name=NameRef.current.value;
    const Email=EmailRef.current.value;
    const PhoneNumber=PhoneNumberRef.current.value;
    const Message=MessageRef.current.value;
    

      // axios.post("http://localhost:8080/contactus",{name:Name,email:Email,phone:PhoneNumber,msg:Message}).then(response=>{
      //   var d=response.data;
      //   if(d.msg===1){
      //     window.alert(
      //       "your query has been noted, we will contact you soon"
      //       )
      //       navigate('/Home');
      //   }
      // })
      const newFun=()=>{
        window.alert("form submitted successfully");
        navigate('/Home');
      }
      newFun();


  }
    return(
        <section class=" contact  ">
         
        <div class="container">
    
          <div class="row justify-content-center">
      
            <div class=" col-md-5 text-center" id='contactme'>
              <h1>Contact Us</h1>
              <form action=" ">
                <input type="text" ref={NameRef} id="name" name="name" placeholder="Name" />
        
                <input type="email" ref={EmailRef} id="email" name="email" placeholder="Email" />
        
                <input type="number" ref={PhoneNumberRef} id="phn" name="phn" placeholder="Phone Number" />
        
                <textarea id="message" ref={MessageRef} name="message" placeholder="Message"></textarea>
                <div class="col-12 text-center">
    
                  <button onClick={handleSubmit} class="btn" type="submit" value="submit">SEND</button>
                </div>
              </form>
            </div>
            <div class="col-md-5 my-4">
              <img src={rectangle_9_2} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
}