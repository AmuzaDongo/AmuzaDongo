import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./social.css"

export default function Social() {
    
    return (
        <>
            <span className="link">
                <SocialIcon className="topIcon"url="https://facebook.com/dongoamuza/" style={{ height: 25, width: 25 }} />
                <SocialIcon className="topIcon" url="https://twitter.com/dongoamuza/" style={{ height: 25, width: 25 }}/>
                <SocialIcon className="topIcon" url="https://www.linkedin.com/in/dongo-amuza-64981a148/" style={{ height: 25, width: 25 }}/>
            </span>
            
        </>
    )
}
