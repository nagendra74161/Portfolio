import About from '../components/About';

function HomePage({ onViewProjects, onDownload }) {
  return <About onViewProjects={onViewProjects} onDownload={onDownload} />;
}

export default HomePage;
