import React from "react"; //newer syntax of require
import { Jumbotron, Container } from "reactstrap";
import styled from "styled-components";

const StyledHeader = styled(Jumbotron)`
    color: #37908a;
    border-radius: 25px;
`

const PageHeader = (props) => {
    return (
      <div>
        <StyledHeader>
          <Container>
            <h1 className="display-3"><strong>React-YouTube</strong></h1>
            <p className="lead">YouTube search application built with React. Search a keyword to get started.</p>
          </Container>
        </StyledHeader>
      </div>
    );
  };
  
  export default PageHeader;