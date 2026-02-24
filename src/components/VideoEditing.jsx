import React from 'react';

const VideoEditing = () => {
    return (
        <section className="section" id="s5">
            <div className="timeline anim-hidden-scale">
                <div className="timeline-head">
                    <div className="tl-dot"></div>
                    <div className="tl-dot"></div>
                    <div className="tl-dot"></div>
                </div>
                <div className="tl-tracks">
                    <div className="tl-track tr1"><div className="tl-track-fill"></div></div>
                    <div className="tl-track tr2"><div className="tl-track-fill"></div></div>
                    <div className="tl-track tr3"><div className="tl-track-fill"></div></div>
                    <div className="tl-track tr4"><div className="tl-track-fill"></div></div>
                </div>
                <div className="playhead"></div>
            </div>

            <div className="big-label anim-hidden">Cinematic <span>Precision</span></div>

            <div className="color-compare anim-hidden-fade">
                <div className="cc-half cc-before">Raw Log</div>
                <div className="cc-half cc-after">Graded</div>
            </div>
        </section>
    );
};

export default VideoEditing;
