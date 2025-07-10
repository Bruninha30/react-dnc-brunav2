import { useContext, useState, useEffect } from 'react';
import './ProjectsList.css';

/* assets */
import LikeFilled from '../../assets/like-filled.svg';
import LikeOutline from '../../assets/like.svg';

//components 
import Button from '../Button/Button';

//utils
import { getApiData } from '../../services/apiServices';

//context  
import { AppContext } from '../../contexts/AppContext';

function ProjectsList (){
  const [projects, setProjects] = useState([]);
  const [favProjects, setFavProject] = useState([]);
  const appContext = useContext(AppContext);

  const handleSavedProjects = (id) => {
    setFavProject((prevFavProjects) => {
      if (prevFavProjects.includes(id)) {
        const filteredArray = prevFavProjects.filter((projectId) => projectId !== id);
        sessionStorage.setItem('favProjects', JSON.stringify(filteredArray));
        return filteredArray;
      } else {
        const updatedArray = [...prevFavProjects, id];
        sessionStorage.setItem('favProjects', JSON.stringify(updatedArray));
        return updatedArray;
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData('projects');
        setProjects(projectsResponse);
      } catch {
        setProjects([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'));
    if (savedFavProjects) {
      setFavProject(savedFavProjects);
    }
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>{appContext.languages[appContext.language].projects.subtitle}</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="projects-card d-flex jc-center al-center fd-column" key={project.id}>
            <div
              className="thumb tertiary-background"
              style={{ backgroundImage: `url(${project.thumb})` }}
            ></div>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            <Button buttonStyle="unstyled" onClick={() => handleSavedProjects(project.id)}>
              <img
                src={favProjects.includes(project.id) ? LikeFilled : LikeOutline}
                alt="Like button"
                height="20px"
              />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
