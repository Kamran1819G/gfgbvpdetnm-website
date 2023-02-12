import React from "react";
import Post from "./Post";

function BlogsSection() {
  return (
      <section className="section h-100vh" id="blogs">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h2 className="section-title">
                Our{" "}
                <span style={{ color: "var(--secondary-color)" }}>Blogs</span>
              </h2>
              <p className="section-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="item">
              <Post
                url=""
                title="Will Web3 technology have an impact in coming years?"
                date="12 January 2023"
              />
            </div>
            <div className="item">
              <Post
                url=""
                title="Will Web3 technology have an impact in coming years?"
                date="13 January 2023"
              />
            </div>
            <div className="item">
              <Post
                url=""
                title="Will Web3 technology have an impact in coming years?"
                date="14 January 2023"
              />
            </div>
            <div className="item">
              <Post
                url=""
                title="Will Web3 technology have an impact in coming years?"
                date="15 January 2023"
              />
            </div>
          </div>
        </div>
      </section>
  );
}

export default BlogsSection;
