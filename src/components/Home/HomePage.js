import videoWebm from '../../assets/hero.webm';
import videoMp4 from '../../assets/hero.mp4';
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source data-testid="currentMp4Video" src={videoMp4} type="video/mp4" />
                <source data-testid="currentWebmVideo" src={videoWebm} type="video/webm" />
            </video>
        </div>
    )
}

export default HomePage;