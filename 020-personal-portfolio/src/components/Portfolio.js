import projects from '../projects';
import PortfolioCard from './PortfolioCard';
import '../styles/Portfolio.css';

function Portfolio() {

    return (
        <div>
            <h1>My Work</h1>
            <div className='portfolio-grid'>
                {projects.map((project) => <PortfolioCard name={project.name} description={project.description} code={project.code} live={project.live}></PortfolioCard>)}
            </div>
        </div>
        
        
    );
}

export default Portfolio;