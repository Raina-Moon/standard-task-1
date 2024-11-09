import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  console.log("ID =>", id);

  return <div>Detail</div>;
};

export default Detail;
