import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import {
  ArticleCardContainer,
  ArticlesCardsGrid,
  CardAuthorContainer,
  CardContainer,
  CardContentContainer,
  CardImageContainer,
} from "./Styled/ArticlesList";

function ArticleList({ articles }) {
  return (
    <ArticlesCardsGrid>
      {articles.map((article) => (
        <ArticleCardContainer key={article.id}>
          <Link to={`/blog/${article.slug}`}>
            <CardContainer>
              <CardImageContainer>
                <GatsbyImage
                  image={article.image.urlSharp.childImageSharp.gatsbyImageData}
                  alt={article.title}
                />
              </CardImageContainer>
              <CardContentContainer>
                <div className="card-content">
                  <h3 className="card-title">{article.title}</h3>
                  <p className="card-descr">{article.description}</p>

                  <CardAuthorContainer>
                    <div className="author-image">
                      <GatsbyImage
                        image={
                          article.personal.cover?.urlSharp.childImageSharp.gatsbyImageData
                        }
                        alt={article.personal.name}
                      />
                    </div>
                    <div className="author-title">
                      <p className="author-name">
                        {article.personal.name}
                      </p>
                      <p className="author-spec">
                        {article.personal.specialty}
                      </p>
                    </div>
                  </CardAuthorContainer>
                </div>
              </CardContentContainer>
            </CardContainer>
          </Link>
        </ArticleCardContainer>
      ))}
    </ArticlesCardsGrid>
  );
}

export default ArticleList;
