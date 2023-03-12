import * as React from "react"
import '../Gallery/Gallery.scss';

const Gallery= () => {
  return (
      <section className="ftco-gallery">
          <div className="container-wrap">
            <div className="row no-gutters">
              <div className="col-md-3 ftco-animate">
                <a href="/" className="gallery img d-flex align-items-center gallery_image_1">
                </a>
              </div>
              <div className="col-md-3 ftco-animate">
                <a href="/" className="gallery img d-flex align-items-center gallery_image_2">
                </a>
              </div>
              <div className="col-md-3 ftco-animate">
                <a href="/" className="gallery img d-flex align-items-center gallery_image_3">
                  {/* <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-instagram"></span>
                  </div> */}
                </a>
              </div>
              <div className="col-md-3 ftco-animate">
                <a href="/" className="gallery img d-flex align-items-center gallery_image_4">
                </a>
              </div>
            </div>
          </div>
      </section>
  );
}

export default Gallery;