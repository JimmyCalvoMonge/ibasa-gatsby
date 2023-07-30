import * as React from "react"
import { SEO } from "../components/seo"
import '../pages_styles/Blogs/Blogs.scss';
import Layout from "../components/layout"

var base_url = process.env.REACT_APP_ROOT_URL;
var FullBlogsData = require('../pages_styles/Blogs/FullBlogsData.json');

const Blogs = () => {

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

        <section className="ftco-section bg-light">
            <div className="container">
                <div className="row">
                    {FullBlogsData.map(blog =><div className="col-md-6 col-lg-4 ftco-animate" key={blog.id}>
                    <div className="blog-entry">
                        <a href="blog-single.html" className={`block-20 d-flex align-items-end ${blog.id}`}>
                            <div className="meta-date text-center p-2">
                            <span className="day">{blog.day}</span>
                            <span className="mos">{blog.month}</span>
                            <span className="yr">{blog.year}</span>
                        </div>
                        </a>
                        <div className="text bg-white p-4">
                        <h3 className="heading"><a href="/">{blog.title}</a></h3>
                        <p>{blog.description}</p>
                        <div className="d-flex align-items-center mt-4">
                            <p className="mb-0"><a href={`${base_url}/blogs/${blog.id}`} className="btn btn-primary">Leer más<span className="ion-ios-arrow-round-forward"></span></a></p>
                            <p className="ml-auto mb-0">
                                <a href="/" className="mr-2">{blog.author}</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>)}
                </div>
            </div>
        </section>

    </Layout>
  );
}

export default Blogs;

export const Head = () => (
    <SEO title="IBASA | Informacion Importante" />
  )