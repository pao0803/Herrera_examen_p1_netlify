/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
          <img
              alt="..."
              className="n-logo"
              src={require("assets/img/Herrera_Ortiz.jpg")}
            ></img>
        
            <h1 className="h1-seo">UNIVERSIDAD TECNOLÓGICA DE DURANGO</h1>
            <h2>ALUMNO: Paola Herrera Ortiz</h2>
            <h3>GESTIÓN DE PROYECTOS DE SOFTWARE</h3>
            <h4>Parcial 1</h4>
          </div>
          <h6 className="category category-absolute">
            SIAC Desarrollos{" "}
            
            . Calidad - Seguridad - Compromiso{" "}
          
            
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
