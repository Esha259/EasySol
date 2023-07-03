import React, { Component, useState } from "react";
import Mappy from "./Existingcomplaintsmap";
import { useQuery } from "react-query";
import { Alert } from "react-bootstrap";

export default function ExistingComplaints() {
  let [gottoken, setgottoken] = useState(false);
  let token;
  let gettoken = function () {
    fetch("http://localhost:5000/api/user/token")
      .then((res) => res.json())
      .then((data) => {
        token = data;
        console.log(token);
        if (token.token == false) {
          setgottoken(false);
        } else {
          setgottoken(true);
        }
      });
  };

  gettoken();

  return (
    <div className="Complaint_body">
      {!gottoken ? (
        <h1>Content not accessible without registration or login</h1>
      ) : (
        <Mappy />
      )}
    </div>
  );
}
