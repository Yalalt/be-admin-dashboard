import { useState } from "react";
import {fill} from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const AddProduct = () => {
const [image, setImage] = useState();
const [received, setReceived] = useState();

const myImage = new CloudinaryImage('sample', {cloudName: 'dhirtao9q'}).resize(fill().width(150).height(100));


const uploadHandler = () => {
    console.log("Uploading...");

    fetch("http://localhost:9000/upload", {
        method: "POST",
        body: image,
    }).then((res) => console.log("RESPONSE CLIENT  ", res));
}

const changeHandler = (e) => {
    console.log(e.target.files[0]);

    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("text", "This is test text");
    setImage(data);
}

console.log("State in Add Product image... ", image);

  return (
    <div>
      <h3 className="text-secondary fs-4">Бүтээгдэхүүн нэмэх</h3>
      <div className="mb-3">
        <label for="formFileName" className="form-label">
          Нэр
        </label>
        <input className="form-control" type="text" id="formFileName" name="name" onChange={changeHandler}/>
      </div>
      <div className="mb-3">
        <label for="formFilePrice" className="form-label">
          Үнэ
        </label>
        <input className="form-control" type="text" id="formFilePrice" name="price" onChange={changeHandler}/>
      </div>
      <div className="mb-3">
        <label for="prodQuantity" className="form-label">
          Тоо
        </label>
        <input className="form-control" type="number" id="prodQuantity" name="image1" onChange={changeHandler}/>
      </div>
      <div className="mb-3">
        <label for="formFileImage" className="form-label">
          Нэг зураг оруулах
        </label>
        <input className="form-control" type="file" id="formFileImage" name="image2" onChange={changeHandler}/>
      </div>
      <div className="mb-3">
        <label for="formFileMultiple" className="form-label">
          Олон зураг зэрэг оруулах
        </label>
        <input
          className="form-control"
          type="file"
          id="formFileMultiple"
          onChange={changeHandler}
          multiple
        />
      </div>
      <div className="mb-3">
        <button type="button" className="btn btn-outline-primary" onClick={uploadHandler}>Upload image</button>
      </div>
      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
    </div>
  );
};

export default AddProduct;
