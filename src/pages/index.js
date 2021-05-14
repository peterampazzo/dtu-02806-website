import * as React from "react";
// import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import classNames from "classnames";

import Links from "../components/links"

const IndexPage = ({ data }) => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        // 'Open Sans',
        "Playfair Display",
      ].join(","),
    },
  });

  const Row = ({ children, className }) => {
    const childClassNames = classNames("mx-auto p-8", className);
    return <div className={childClassNames}>{children}</div>;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="relative bg-yellow-400 bg-opacity-25 overflow-hidden">
        <div className="mx-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-md text-center mt-6 mb-8">
              02806 Social data analysis and visualization
            </h3>
            <h1 className="text-4xl md:text-6xl text-center font-extrabold mb-10 font-serif">
              We created a speaker rider because journalism didn’t have one
            </h1>
            <div className="flex flex-col m-auto w-full md:w-4/6 justify-center">
              <h4 className="text-lg md:text-2xl text-center mb-8 m-auto">
                Organizers, speakers, and attendees need to all work together to
                make events more inclusive.
              </h4>
              <div className="border-yellow-600 border-t-2 border-b-2 py-4 px-6 mb-12">
                <ul className="list-none flex text-center justify-between text-lg font-medium flex-wrap flex-col md:flex-row">
                  <li>Silvia De Sojo</li>
                  <li>Stefan Petrovic</li>
                  <li>Pietro Rampazzo</li>
                </ul>
              </div>
            </div>
          </div>
          <Links />
        </div>
        <main className="font-serif">
          <Row className="mt-0">
            <MDXRenderer>{data.about.body}</MDXRenderer>
          </Row>
          <Row className="bg-yellow-700 text-white">
            <MDXRenderer>{data.districts.body}</MDXRenderer>
          </Row>
          <div className="mx-auto" style={{ height: `450px`, width: `1200px` }}>
            <iframe src="/bokeh.html" className="h-full w-full" title="bokeh" />
          </div>
          <Row className="bg-green-700">
            <MDXRenderer>{data.feelings.body}</MDXRenderer>
          </Row>
          <Row className="bg-green-700">
            <MDXRenderer>{data.satifaction.body}</MDXRenderer>
          </Row>
          <p className="mt-8">
            Nunc et libero est. Vestibulum fringilla, metus in tempus suscipit,
            quam arcu condimentum nunc, nec tincidunt tortor nisi fringilla
            erat. Nullam venenatis, nulla sit amet malesuada tempor, nisl odio
            placerat dui, placerat scelerisque ante felis congue nulla. Proin
            nec ornare ante. Donec sollicitudin nibh eu tellus sodales, eu
            sollicitudin quam euismod. Nullam eget arcu nec nunc auctor
            consequat sed sed nisl. Donec gravida risus in leo vulputate
            sodales. Suspendisse nibh purus, vestibulum nec porta ut, vehicula
            eget urna. Mauris eget imperdiet enim, quis ultrices eros. Quisque
            blandit elementum dolor, in venenatis nibh iaculis et. Sed tincidunt
            ut leo at vehicula. Duis tortor neque, mollis ac condimentum et,
            interdum nec nulla.
          </p>
        </main>
      </div>
    </ThemeProvider>
  );
};

export const pageQuery = graphql`
  query {
    about: mdx(frontmatter: { id: { eq: "about" } }) {
      body
    }
    districts: mdx(frontmatter: { id: { eq: "districts" } }) {
      body
    }
    feelings: mdx(frontmatter: { id: { eq: "feelings" } }) {
      body
    }
    satifaction: mdx(frontmatter: { id: { eq: "satifaction" } }) {
      body
    }
  }
`;

export default IndexPage;
