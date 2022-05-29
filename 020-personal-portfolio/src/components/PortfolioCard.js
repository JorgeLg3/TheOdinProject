import img1 from '../assets/img1.png';

function PortfolioCard(props) {

    return (
        <div>
            <img alt="Project screenshot" src={img1}></img>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
        
    );
}

export default PortfolioCard;