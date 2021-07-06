import * as React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import classNames from "classnames";

import Links from "../components/links";

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

  const title = "Understanding child welfare in Barcelona";
  const desc = `Our objective is to use visualization tools and clustering
  techniques to recognise the effects that the demographic
  characteristics of districts have over child welfare.`;

  const lang = "en";

  return (
    <ThemeProvider theme={theme}>
      <Helmet
        htmlAttributes={{ lang }}
        title={title}
        meta={[
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: desc,
          },
        ]}
      />
      <div className="relative overflow-hidden bg-yellow-600 text-white">
        <div className="mx-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-md text-center mt-6 mb-8">
              02806 Social data analysis and visualization
            </h3>
            <h1 className="text-4xl md:text-6xl text-center font-extrabold mb-10 font-serif">
              {title}
            </h1>
            <div className="flex flex-col m-auto w-full md:w-4/6 justify-center">
              <h4 className="text-lg md:text-xl text-center mb-8 m-auto">
                {desc}
              </h4>
              <div className="border-yellow-400 border-t-2 border-b-2 py-4 px-6 mb-12">
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
        <main className="font-serif text-justify">
          <Row className="mt-0">
            <MDXRenderer>{data.about.body}</MDXRenderer>
          </Row>
          <Row className="bg-yellow-100 text-black">
            <MDXRenderer>{data.intro.body}</MDXRenderer>
          </Row>
          <Row className="bg-yellow-50 text-black">
            <MDXRenderer>{data.districts.body}</MDXRenderer>
          </Row>
          <Row className="bg-yellow-100 text-black">
            <MDXRenderer>{data.feelings.body}</MDXRenderer>
          </Row>
          <Row className="bg-yellow-50 text-black">
            <MDXRenderer>{data.satifaction.body}</MDXRenderer>
          </Row>
          <Row>
            <MDXRenderer>{data.conclusions.body}</MDXRenderer>
          </Row>
          <div className="mb-6">
            <Links />
          </div>
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
    intro: mdx(frontmatter: { id: { eq: "introductory" } }) {
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
    conclusions: mdx(frontmatter: { id: { eq: "conclusions" } }) {
      body
    }
  }
`;

export default IndexPage;
