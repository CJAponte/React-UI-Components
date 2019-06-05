import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle"
import HeaderContent from "./HeaderContent"
import ImageThumbnail from "./ImageThumbnail"

const HeaderContainer = () => {
    return (
        <div className="Header-Container">
            <div className="Header-Grid-Container">
                <ImageThumbnail />
                <div className="Text-Content">
                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </div>
        </div>
    )
            
}


export default HeaderContainer