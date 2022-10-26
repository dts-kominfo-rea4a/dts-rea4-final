import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage1 from '../../images/feature_1.png';
import featureimage2 from '../../images/feature_2.png';
import featureimage3 from '../../images/feature_3.png';


function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox image={featureimage1} title="Authentication"  textfeature="Built in with Google Firebase Authentication to Login and Signout and store some Playlist ID from TMDB"/>
            <FeatureBox image={featureimage2} title="Movie Categorized" textfeature="Movie List By Categorized and Stream some Official Movie Trailler, Add Movie to Movie List"/>
            <FeatureBox image={featureimage3} title="Easy Search Filter" textfeature="Search Movie or Series TV or Filter list as you wish"/>
        </div>
    </div>
  )
}

export default Feature