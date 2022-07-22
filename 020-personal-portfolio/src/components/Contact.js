import img1 from '../assets/img1.png';
import '../styles/Contact.css';

function Contact() {

    return (
        <div className='contact'>
            <div className='contact-box'>
                <h1>Contact me</h1>
                <p>Please get in touch if you think our work could be mutually beneficial!</p>
                <div>
                    <p>1234 Random Road </p>
                    <p>Random Town, California 12345</p>
                </div>
                <div>
                    <div className='contact-field'>
                        <i class="fa-solid fa-phone"></i>
                        <span>555-555-5555</span>
                    </div>
                    <div className='contact-field'>
                        <i class="fa-solid fa-envelope"></i>
                        <span>ashleywilliams.is.not.real@gmail.com</span>
                    </div>
                </div>
                
                <div className='social'>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>
            <div className='contact-img-card'>
                <img alt="Project screenshot" src={img1}></img>
            </div>
        </div>
        
    );
}

export default Contact;