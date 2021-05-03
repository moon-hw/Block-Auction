import React from "react";
import Dropzone from "react-dropzone";
import { PlusOutlined } from "@ant-design/icons";

function Fileupload(props) {
  const dropHandler = (files) => {
    props.onChange(files);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: 300,
              height: 240,
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <PlusOutlined style={{ fontsize: "3rem" }} />
          </div>
        )}
      </Dropzone>
    </div>
  );
}

export default Fileupload;
