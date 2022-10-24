import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage1 from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';


function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox image={featureimage1} title="development course"/>
            <FeatureBox image={featureimage2} title="development course2"/>
            <FeatureBox image={featureimage3} title="development course3"/>
        </div>
    </div>
  )
}

export default Feature