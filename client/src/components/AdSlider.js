import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import weeker from "../lib/weeker.png";
import sonjamam from "../lib/sonjamam.png";

const OutLine = styled.div`
  height: 300px;
  width: 800px;
  background: grey;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Ads-pic {
    max-height: 300px;
    max-width: 800px;
    padding-left: 2rem;
    padding-right: 2rem;
    align-items: center;
    justify-content: center;
    overflow: "hidden";
  }
`;

const Spacer = styled.div`
  padding-left: 350px;
  padding-right: 350px;
`;
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      appendDots: (dots) => (
        <div
          style={{
            padding: "1px",
          }}
        >
          <ul style={{ margin: "-8%" }}> {dots} </ul>
        </div>
      ),
    };
    return (
      <>
        <Spacer>
          <OutLine>
            <div className="Ads-pic">
              <Slider {...settings}>
                <div>
                  <img src={weeker} alt="index1" height="300px" />
                </div>

                <div>
                  <img src={sonjamam} alt="index2" />
                </div>

                <div>
                  <h3>3</h3>
                </div>
              </Slider>
            </div>
          </OutLine>
        </Spacer>
      </>
    );
  }
}
