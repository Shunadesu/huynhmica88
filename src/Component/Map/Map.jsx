import React from "react";
import './map.css'


const Map = () => {
    return (
        <section className="map">
            <div className="mapDiv">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.5467326441676!2d106.6866081!3d10.7693737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f22bfd8da23%3A0xca2f3159c2799713!2zNjEgTMawxqFuZyBI4buvdSBLaMOhbmgsIFBoxrDhu51uZyBQaOG6oW0gTmfFqSBMw6NvLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1691700554386!5m2!1svi!2s" width="100%" height="400" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Map