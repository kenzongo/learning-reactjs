import videoWebm from '../../assets/hero.webm';
import videoMp4 from '../../assets/hero.mp4';
import './HomePage.scss'
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <div className="homepage-video">
                <video autoPlay muted loop width="100%">
                    <source data-testid="currentMp4Video" src={videoMp4} type="video/mp4" />
                    <source data-testid="currentWebmVideo" src={videoWebm} type="video/webm" />
                </video>
            </div>
            <div className="homepage-content">
                <h1 className="title-main">
                    Make forms
                    worth filling out
                </h1>
                <div className="title-detail">
                    Get more data—like signups,
                    feedback, and anything else—with forms
                    designed to be <span style={{ fontWeight: "bold" }}>refreshingly different.</span></div>
                <div>
                    <button className="title-button">
                        Get started—it's free
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;