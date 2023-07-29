import * as React from "react"
import { SEO } from "../components/seo"
import '../pages_styles/Blogs/Blogs.scss';
import Layout from "../components/layout"

var base_url = process.env.REACT_APP_ROOT_URL;
var FullBlogsData = require('../pages_styles/Blogs/FullBlogsData.json');

const Blogs = () => {

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

        <section class="ftco-section bg-light">
            <div class="container">
                <div class="row">
                    {FullBlogsData.map(blog =><div class="col-md-6 col-lg-4 ftco-animate" key={blog.id}>
                    <div class="blog-entry">
                        <a href="blog-single.html" class={`block-20 d-flex align-items-end ${blog.id}`}>
                            <div class="meta-date text-center p-2">
                            <span class="day">{blog.day}</span>
                            <span class="mos">{blog.month}</span>
                            <span class="yr">{blog.year}</span>
                        </div>
                        </a>
                        <div class="text bg-white p-4">
                        <h3 class="heading"><a href="/">{blog.title}</a></h3>
                        <p>{blog.description}</p>
                        <div class="d-flex align-items-center mt-4">
                            <p class="mb-0"><a href={`${base_url}/blogs/${blog.id}`} class="btn btn-primary">Leer más<span class="ion-ios-arrow-round-forward"></span></a></p>
                            <p class="ml-auto mb-0">
                                <a href="/" class="mr-2">{blog.author}</a>
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
    <SEO title="Informacion Importante" />
  )