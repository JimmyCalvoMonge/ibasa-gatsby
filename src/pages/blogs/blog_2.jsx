import * as React from "react"
import Layout from "../../components/layout"
import '../../pages_styles/Blogs/Blogs.scss';

const Blog2 = () => {
  return (
    <Layout>
        <section class="hero-wrap hero-wrap-2 blogs_start_image">
          <div class="overlay"></div>
          <div class="container">
              <div class="row no-gutters slider-text align-items-center justify-content-center">
              <div class="col-md-9 ftco-animate text-center">
                  <h1 class="mb-2 bread">Información Importante </h1>
                  <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Inicio <i class="ion-ios-arrow-forward"></i></a></span> <span>Blogs <i class="ion-ios-arrow-forward"></i></span></p>
              </div>
              </div>
          </div>
        </section>
        <p style={{textAlign:'center', marginTop: '5%'}}> Blog en construcción ...</p>
    </Layout>
  );
}

export default Blog2;