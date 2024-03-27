import videos from "../assets/videos/data/video.json";
import { AdvancedVideo, lazyload } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { useRef} from 'react';
import ProjectDescript from "./ProjectDescript";

const cld = new Cloudinary({
    cloud: {
      cloudName: 'henryc007'
    }
}); 

const ProfileProjects = () => {

    return (
        <div className="container d-flex align-items-center mt-5">
            <div className="row justify-content-center">
                {videos.map(video => {
                    const playerRef = useRef();
                    function onMouseOver() {
                        playerRef.current.videoRef.current.play()
                    }
                    function onMouseOut() {
                        playerRef.current.videoRef.current.pause()
                    }

                    return (
                        <div className="card mb-5" key={video.id} style={{paddingLeft: '0px', paddingRight: '0px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease'}}>
                            <div key={video.id} className="col">
                                <div className="card-header">
                                    <a href={video.link} target='_blank' style={{textDecoration: 'none', color: 'black'}}><h2 className='card-title mt-2' style={{fontFamily: 'Playfair Display'}}>{video.title}</h2></a>
                                </div>
                                <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                                <a href={video.link} target='_blank' style={{textDecoration: 'none', color: 'black'}}>
                                    <AdvancedVideo
                                        ref={playerRef}
                                        loop
                                        width="100%"
                                        cldVid={cld.video(video.id)}
                                        plugins={[lazyload()]}
                                    />
                                </a>
                                <ProjectDescript videoValue={video.value} videoDescript={video.description}/> 
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProfileProjects;