import projects from '../projects';
import PortfolioCard from './PortfolioCard';

function Portfolio() {

    return (
        <div>
            {projects.map((project) => <PortfolioCard name={project.name} description={project.description} code={project.code} live={project.live}></PortfolioCard>)}
        </div>
        
    );
}

export default Portfolio;