import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import weeker from "../lib/weeker.png";
const Top5ListBlock = styled.div`
  position: relative;
  justify-content: center;
  display: inline-block;

  .first {
    border: 1px solid red;
    flex: 1;
    width: 200px;
    height: 200px;
    float: left;
    box-sizing: border-box;
  }

  .second {
    border: 1px solid green;
    flex: 1;
    width: 200px;
    height: 200px;
    float: left;
    box-sizing: border-box;
  }

  .third {
    border: 1px solid blue;
    flex: 1;
    width: 200px;
    height: 200px;
    float: left;
    box-sizing: border-box;
  }

  .fourth {
    border: 1px solid blue;
    flex: 1;
    width: 200px;
    height: 200px;
    float: left;
    box-sizing: border-box;
  }

  .fifth {
    border: 1px solid blue;
    flex: 1;
    width: 200px;
    height: 200px;
    float: left;
    box-sizing: border-box;
  }
`;

const Spacer = styled.div`
  padding-top: 5rem;
  justify-content: center;
`;

const Top5 = () => {
  return (
    <>
      <Spacer>
        <h1>top 5 List</h1>
        <Top5ListBlock>
          <div className="Top5List">
            <Container className="themed-container" fluid={true}>
              <Row>
                <Col xs="6" sm="5">
                  <div className="first">
                    <img src={weeker} height="170px" alt="" />
                    <div className="content">
                      <p className="caption">Thumbnail label</p>
                    </div>
                  </div>

                  <div className="second">
                    <img src={weeker} height="170px" alt="" />
                    <div className="content">
                      <p className="caption">Thumbnail label</p>
                    </div>
                  </div>

                  <div className="third">
                    <img src={weeker} height="170px" alt="" />
                    <div className="content">
                      <p className="caption">Thumbnail label</p>
                    </div>
                  </div>

                  <div className="fourth">
                    <img src={weeker} height="170px" alt="" />
                    <div className="content">
                      <p className="caption">Thumbnail label</p>
                    </div>
                  </div>

                  <div className="fifth">
                    <img src={weeker} height="170px" alt="" />
                    <div className="content">
                      <p className="caption">Thumbnail label</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Top5ListBlock>
      </Spacer>
    </>
  );
};

export default Top5;
