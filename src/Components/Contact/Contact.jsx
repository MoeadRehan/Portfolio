import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        for (let [key, value] of formData.entries()) {
            if (!value) {
              alert(`${key} field is empty`);
              return; 
            }
          }
    
        formData.append("access_key", "324bc4c5-eddd-4df5-b679-0bd130717113");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try{
            const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
          event.target.reset();
        }
        else{
            alert("There was an Error", res.message);
        }
        }catch(error){
            console.log("There was an Error", error);
            alert("There was an error submitting the form");
        }
        
      };

  return (
    <div id='contact' className='contact'>
        <dir className='contact-title'>
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </dir>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let`s Talk</h1>
                <p>I am currently available for front-end development projects, specializing in creating responsive and visually appealing user interfaces.Lets collaborate to bring your vision to life with modern web technologies.You can contact anythime</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt="" />
                        <p>moeadrehan124125@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt="" />
                        <p>+93 305 5127989</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt="" />
                        <p>Rawalpindi, Pakistan</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={linkedin_icon} alt="" />
                        <a href='https://www.linkedin.com/in/moead-rehan-076949275/'>Linkedin</a>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type='email' placeholder='Enter your Email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter Your message'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact