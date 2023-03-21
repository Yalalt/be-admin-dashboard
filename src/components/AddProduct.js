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

    fetch("http://localhost:9000/uploads/file", {
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
      <div class="mb-3">
        <label for="formFileName" class="form-label">
          Нэр
        </label>
        <input class="form-control" type="text" id="formFileName" name="name" onChange={changeHandler}/>
      </div>
      <div class="mb-3">
        <label for="formFilePrice" class="form-label">
          Үнэ
        </label>
        <input class="form-control" type="text" id="formFilePrice" name="price" onChange={changeHandler}/>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">
          Нэг зураг оруулах
        </label>
        <input class="form-control" type="file" id="formFile" onChange={changeHandler}/>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">
          Нэг зураг оруулах
        </label>
        <input class="form-controcl" type="file" id="formFile" onChange={changeHandler}/>
      </div>
      <div class="mb-3">
        <label for="formFileMultiple" class="form-label">
          Олон зураг зэрэг оруулах
        </label>
        <input
          class="form-control"
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
