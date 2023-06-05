import React from 'react';
import { Parallax } from 'react-parallax';

const PageCover = ({ img, title }) => {
    return (
        <div >
            <Parallax
                blur={{ min: -50, max: 40 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[700px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-base-100">
                        <div className="max-w-md bg-black opacity-50 p-4">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>

    );
};

export default PageCover;