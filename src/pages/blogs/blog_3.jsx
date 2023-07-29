import * as React from "react"
import Layout from "../../components/layout"
import '../../pages_styles/Blogs/Blogs.scss';

const Blog3 = () => {
  return (
    <Layout>
        <section className="hero-wrap hero-wrap-2 blogs_start_image">
          <div className="overlay"></div>
          <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center">
              <div className="col-md-9 ftco-animate text-center">
                  <h1 className="mb-2 bread">Información Importante </h1>
                  <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Inicio <i className="ion-ios-arrow-forward"></i></a></span> <span>Blogs <i className="ion-ios-arrow-forward"></i></span></p>
              </div>
              </div>
          </div>
        </section>
        <p style={{textAlign:'center', marginTop: '5%'}}> Blog en construcción ...</p>
    </Layout>
  );
}

export default Blog3;