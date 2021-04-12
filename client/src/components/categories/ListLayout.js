import React from "react";
import styled from "styled-components";
import electrical_appliances from "../../lib/electrical_appliances.png";

const ListBlock = styled.div`
  border: 1px solid red;
  height: 150px;
  width: 1000px;
  align-items: center;
  position: relative;
  justify-content: center;
  display: inline-block;

  .item_img {
    height: 150px;
    width: 200px;
    display: flex;

    float: left;
  }

  .item_name {
    display: flex;

    float: left;
  }
`;

const ListLayout = () => {
  return (
    <ListBlock>
      <div className="item">
        <item_img>
          <img src={electrical_appliances} height="150px" alt="" />
        </item_img>

        <div class="content">
          <item_name>
            <h3>아이폰 12</h3>
          </item_name>
          <div class="meta">
            <span class="cinema">Union Square 14</span>
          </div>
          <div class="description">
            <p></p>
          </div>
          <div class="extra">
            <div class="ui label">IMAX</div>
            <div class="ui label">
              <i class="globe icon"></i> Additional Languages
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <item_img>
          <img src={electrical_appliances} height="150px" alt="" />
        </item_img>

        <div class="content">
          <item_name>
            <h3>아이폰 12</h3>
          </item_name>
          <div class="meta">
            <span class="cinema">Union Square 14</span>
          </div>
          <div class="description">
            <p></p>
          </div>
          <div class="extra">
            <div class="ui label">IMAX</div>
            <div class="ui label">
              <i class="globe icon"></i> Additional Languages
            </div>
          </div>
        </div>
      </div>
    </ListBlock>
  );
};

export default ListLayout;
