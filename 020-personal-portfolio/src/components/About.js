import '../styles/About.css';

function About() {

    return (
        <div className='about'>
            <div className='portrait'>
                <h1 className='name'>Jorge Lopez</h1>
            </div>
            <div className='about-me-container'>
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis, magnam ex voluptatibus dolor vel iste sunt doloremque labore fugit obcaecati iure est recusandae error nisi provident, magni culpa eaque!. Saepe fugit totam necessitatibus enim placeat impedit quas debitis vitae. Deleniti animi magnam eos nisi dolores dicta, mollitia quidem odit non amet.</p>
                <div className='social'>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>
            <div className='background'>
                <div className='rectangle'></div>
                <div className='triangle'></div>
            </div>
            
        </div>
        
    );
}

export default About;