import * as React from "react";
// import Helmet from "react-helmet";
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

  return (
    <ThemeProvider theme={theme}>
      <div className="relative bg-yellow-400 bg-opacity-25 overflow-hidden">
        <div className="mx-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-md text-center mt-6 mb-8">
              02806 Social data analysis and visualization
            </h3>
            <h1 className="text-4xl md:text-6xl text-center font-extrabold mb-10 font-serif">
              Understanding child welfare in Barcelona
            </h1>
            <div className="flex flex-col m-auto w-full md:w-4/6 justify-center">
              <h4 className="text-lg md:text-xl text-center mb-8 m-auto">
                Our objective is to use visualization tools and clustering techniques to recognise the effects that the demographic characteristics of districts have over child welfare.
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
          <Row className="bg-yellow-600 text-white">
            <MDXRenderer>{data.intro.body}</MDXRenderer>
          </Row>
          <Row className="bg-yellow-200">
            <MDXRenderer>{data.districts.body}</MDXRenderer>
          </Row>
          <Row className="bg-yellow-100">
            <MDXRenderer>{data.feelings.body}</MDXRenderer>
          </Row>
          <Row className="bg-yellow-50">
            <MDXRenderer>{data.satifaction.body}</MDXRenderer>
          </Row>
          <p className="mt-8">
            Final Discussion
            
            This report was divided into three sections that aimed to unravel the effects that the demographic characteristics of a district may have on the children of Barcelona.
            
            The first step aimed to understand how the children perceive these characteristics over their own neighbourhood. Initially, their perception of security was studied, and it was possible to understand in which neighbourhoods the children felt less secure. However, it was interesting to compare it with their perception over a more positive element, being the availability of playgrounds.  Certain similarities were identified. The neighbourhoods with lower income being the ones perceived as less secure and with fewer playgrounds. However, this behaviour was not maintained in all instances. It was as well interesting to analyse the differences between districts on the accessibility to materials and their family typologies.

            Having learned a bit more about the districts, it was interesting to evaluate the feelings of children. The vital optimism bias was appreciated since over 50% of kids responded that they felt  _always_ Happy and Energetic over the past two weeks. However, when looking at the differences between districts it was not directly clear how the behaviours changed. By performing a radar plot it was possible to aggregate all information together and identify that there were indeed differences when it came to negative feelings. Different ratios were identified for _Boredom_ and _Stress_ over the districts, but it was difficult to identify a clear pattern. 

            Lastly, in order to define one measure that could be compared against different attributes, "life satisfaction" was evaluated. It was possible to detect clearer distinctions on satisfaction levels when evaluating different income-related attributes. However, other variables were as well contributing, as it was possible to see with kids having learning difficulties or even their age.  These effects made us wonder if a machine learning algorithm could help us identify how the different variables, we had available, contributed to the children satisfaction.  A K-Means clustering was performed but the results obtained were not completely satisfying. Nevertheless, our feeling is that other algorithms might be able to provide better results. Thus our next steps would be to perform more trials and continue our investigation towards, which characteristics contribute to the kids' life satisfaction. When we can answer the question, we would be able to identify which corrective actions could boost children's welfare.
          </p>
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
  }
`;

export default IndexPage;
