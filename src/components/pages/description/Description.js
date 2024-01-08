import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { descriptionById } from "../../ReduxSection/home/HomeSlice";
const Description = () => {
  const { id } = useParams();
  const productDes = useSelector((state) => state.Home);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(descriptionById({ id }));
  }, [id, dispatch]);

  console.log(productDes);

  return (
    <div>
      <div>
        <p>hello</p>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default Description;
