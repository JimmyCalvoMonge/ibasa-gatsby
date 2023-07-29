import * as React from "react"
import './Blogs.scss';
var base_url = process.env.REACT_APP_ROOT_URL;
var BlogsData = require('./BlogsData.json');

const Blogs= () => {
  return (
    <div>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
                <h2 className="mb-4"><span>Información</span> Importante</h2>
                <p> Poner una descripción de los blogs</p>
            </div>
          </div>
          <div className="row">
              {BlogsData.map(blog =><div className="col-md-6 col-lg-4 ftco-animate" key={blog.id}>
              <div className="blog-entry">
                <a href="blog-single.html" className={`block-20 d-flex align-items-end blog_1 ${blog.id}`}>
                  <div className="meta-date text-center p-2">
                    <span className="day">{blog.day}</span>
                    <span className="mos">{blog.month}</span>
                    <span className="yr">{blog.year}</span>
                  </div>
                </a>
                <div className="text bg-white p-4">
                  <h3 className="heading"><a href={`${base_url}`}>{blog.title}</a></h3>
                  <p>{blog.description}</p>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mb-0"><a href={`${base_url}`} className="btn btn-primary"> Leer más <span className="ion-ios-arrow-round-forward"></span></a></p>
                    <p className="ml-auto mb-0">
                      <a href={`${base_url}`} className="mr-2">{blog.author}</a>
                      {/* <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;