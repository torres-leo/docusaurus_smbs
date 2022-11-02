import React from "react";
import { Link } from "react-router-dom";
import Article from "../components/Article";
import Pagination from "../components/Pagination";
import Section from "../components/Section";
import Icon from "../components/Icon";

const Docs = () => {
  return (
    <div className="Docs">
      <Section title="Advanced Tutorials">
        <p className="Section-text">
          This section is not going to be very structured, but we will cover the
          following topics:
        </p>
        <div className="Section-articles">
          <Article
            title="Architecture"
            description="How Docusaurus works to build your app"
          />
          <Article
            title="Plugins"
            description="Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of a bundle via presets."
          />
          <Article
            title="Routing"
            description="Docusaurus' routing system follows single-page application conventions: one route, one component."
          />
          <Article
            title="Static site generation"
            description="Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO."
          />
          <Article
            title="Client architecture"
            description="How the Docusaurus client is structured"
          />
        </div>

        <p className="Section-text">
          We will assume that you have finished the guides, and know the basics
          like how to configure plugins, how to write React components, etc.
          These sections will have plugin authors and code contributors in mind,
          so we may occasionally refer to plugin APIs or other architecture
          details. Don't panic if you don't understand everything😉
        </p>

        <div className="Section-edition">
          <Link className="Section-edit">
            <Icon className="fa-solid fa-pencil Section-icon" />
            <span>Edit this page</span>
          </Link>
          <p className="Section-editedBy">
            Last updated on{" "}
            <span className="Section-editedBy bold">Sep 2, 2022</span> by{" "}
            <span className="Section-editedBy bold">Sébastien Lorber</span>
          </p>
        </div>
        <div className="Pagination-container">
          <Pagination heading="Previous" title="What's next?" path="/" />
          <Pagination heading="Next" title="Architecture" path="/" />
        </div>
      </Section>
    </div>
  );
};

export default Docs;
