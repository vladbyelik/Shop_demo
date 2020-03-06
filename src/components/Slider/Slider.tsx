import React, {useMemo} from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import './Slider.css';
import { SliderProps } from './type';

const Slider = ({imgUrls}: SliderProps): JSX.Element => {
    const images = useMemo(() => {
        return (imgUrls || []).map(item => ({url: item}));
    }, [imgUrls]);

    const width: number = 300;
    const height: number = 200;

    return (
        <div>
            <div className='slider-flex'>
            <SimpleImageSlider
                    width={width}
                    height={height}
                    images={images}
                />
            </div>
        </div>
    );
};

export default Slider;
