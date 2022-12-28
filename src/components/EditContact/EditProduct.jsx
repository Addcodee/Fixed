import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../ProductContextProvider";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();
  const { oneProductInfo, getOneProductInfo, updateProductInfo } =
    useContext(productContext);

  const { id } = useParams();

  useEffect(() => {
    getOneProductInfo(id);
  }, []);

  useEffect(() => {
    if (oneProductInfo) {
      setTitle(oneProductInfo.title);
      setDescr(oneProductInfo.descr);
      setPrice(oneProductInfo.price);
    }
  }, [oneProductInfo]);

  const handleValues = () => {
    if (!title || !descr || !price) {
      alert("заполните поля");
      return;
    }
    const editedProduct = {
      title,
      descr,
      price,
    };

    updateProductInfo(id, editedProduct);
  };

  return (
    <div className="container d-flex flex-column mt-5 align-items-center">
      <h1>EDIT PRODUCT</h1>
      <Form.Control
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 w-50"
        placeholder="title"
        value={title}
      />
      <Form.Control
        onChange={(e) => setDescr(e.target.value)}
        className="mb-2 w-50"
        placeholder="descr"
        value={descr}
      />
      <Form.Control
        onChange={(e) => setPrice(e.target.value)}
        className="mb-2 w-50"
        placeholder="price"
        type="number"
        value={price}
      />
      <Button
        onClick={() => {
          handleValues();
          navigate("/");
        }}
        className="w-50"
        variant="dark"
      >
        save changes
      </Button>
    </div>
  );
};

export default EditProduct;
