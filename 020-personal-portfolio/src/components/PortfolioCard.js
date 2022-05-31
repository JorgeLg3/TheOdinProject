import img1 from '../assets/img1.png';
import '../styles/PortfolioCard.css';

function PortfolioCard(props) {

    return (
        <div className='card'>
            <div className='img-card'>
               <img alt="Project screenshot" src={img1}></img>
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
            
        </div>
        
    );
}

export default PortfolioCard;