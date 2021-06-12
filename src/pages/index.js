import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "PGanme - Música y Tecnología"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Casa"
          keywords={[
            `blog`,
            `pedro ganme`,
            `ib`,
            `música`,
            `tecnología`,
            `ciencia`,
            `matemáticas`,
            `programa del diploma`,
          ]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <h1>
          Hola personas{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Bienvenidos a mi blog. Usted está en la página inicial.</p>
        <p>
          Está pagina futuramiente hablará sobre porque he creado este sitio y
          cual es su objetivo.
        </p>
        <p>Entrés en la categoria que te intereses!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Ir al Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
