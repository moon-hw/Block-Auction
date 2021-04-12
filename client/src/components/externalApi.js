import DaumPostCode from "react-daum-postcode";
import { useState } from "react";

export const DaumAddressModal = (props) => {
  const [zipcode, setZipCode] = useState("");
  const [modal, setModal] = useState(false);
  const [fullAddress, setFullAddress] = useState("");

  const modalStyle = {
    display: "block",
    position: "absolute",
    width: "400px",
    height: "500px",
    zIndex: "100",
    overflow: "hidden",
  };

  return (
    <>
      <input type="number" className="zipCode" value={zipcode} readOnly />
      <button
        type="button"
        className="openModalBtn"
        onClick={() => {
          setModal(true);
        }}
      >
        <span> 우편번호 찾기 </span>
      </button>
      {modal ? (
        <DaumPostCode
          onComplete={(data) => {
            let fullAddress = data.address;
            let extraAddress = "";
            let zoneCode = data.zonecode;

            if (data.addressType === "R") {
              if (data.bname !== "") {
                extraAddress += data.bname;
              }
              if (data.buildingName !== "") {
                extraAddress +=
                  extraAddress !== ""
                    ? `, ${data.buildingName}`
                    : data.buildingName;
              }
              fullAddress += extraAddress !== "" ? `(${extraAddress})` : "";
            }

            setZipCode(zoneCode);
            setFullAddress(fullAddress);
            props.setAddress(fullAddress);
            setModal(false);
          }}
          autoClose
          style={modalStyle}
        />
      ) : null}
      <div>
        <input className="address1" value={fullAddress} readOnly />
      </div>
    </>
  );
};
