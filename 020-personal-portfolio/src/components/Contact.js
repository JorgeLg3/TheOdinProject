import img1 from '../assets/img1.png';
import '../styles/Contact.css';

function Contact() {

    return (
        <div className='contact'>
            <div>
                <h1>Contact me</h1>
                <p>Please get in touch if you think our work could be mutually beneficial!</p>
                <p>1234 random Road
                    Random Town, California 12345
                </p>
                <div>
                    <span>phone</span>
                    <span>555-555-5555</span>
                </div>
                <div>
                    <span>email</span>
                    <span>ashleywilliams.is.not.real@gmail.com</span>
                </div>
                <div>
                    <span>Github</span>
                    <span>Linkedin</span>
                    <span>Twitter</span>
                </div>
            </div>
            <img alt="potrait" src={img1}></img>
        </div>
        
    );
}

export default Contact;