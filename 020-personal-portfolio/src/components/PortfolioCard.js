import img1 from '../assets/img1.png';
import '../styles/PortfolioCard.css';

function PortfolioCard(props) {

    return (
        <div className='card'>
            <div className='img-card'>
               <img alt="Project screenshot" src={img1}></img>
            </div>
            <div className='card-info'>
                <div className='first-block'>
                    <h2>{props.name}</h2>
                    <div className='links'>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                </div>
                <p>{props.description}</p>
            </div>
            
        </div>
        
    );
}

export default PortfolioCard;