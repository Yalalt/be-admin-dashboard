import { useRef, useState } from "react";

const AddUser = () => {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [role, setRole] = useState(null);
  const [password1, setPassword1] = useState(null);

  const [allValues, setAllValues] = useState(false);

  const submitHandler = () => {
    console.clear();
    console.count("REPORT");
    console.log("Firstname: ", firstname);
    console.log("Lastname: ", lastname);
    console.log("Password: ", password1);
    console.log("Role: ", role);
    console.log("Phone: ", phone);
    console.log("Email: ", email);
    console.log("Address: ", address);

    if (
      firstname &&
      lastname &&
      password1 &&
      role &&
      phone &&
      email &&
      address
    ) {
      setAllValues(true);
    }
  };
  if (allValues) {
    console.log("Successfull save...");
    const data = new FormData();
    data.append({
        "user"
    })
  }

  return (
    <div>
      <h3 className="text-secondary fs-4">Хэрэглэгч нэмэх</h3>
      <div className="mb-3">
        <label for="formFirstname" className="form-label">
          Нэр
        </label>
        <input
          className="form-control"
          type="text"
          id="formFirstname"
          name="firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="formLastname" className="form-label">
          Овог
        </label>
        <input
          className="form-control"
          type="text"
          id="formLastname"
          name="lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="formPhoneNumber" className="form-label">
          Утасны дугаар
        </label>
        <input
          className="form-control"
          type="number"
          id="formPhoneNumber"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="formEmail" className="form-label">
          И-Мэйл хаяг
        </label>
        <input
          className="form-control"
          type="email"
          id="formEmail"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="formAddress" className="form-label">
          Хаяг
        </label>
        <input
          className="form-control"
          type="text"
          id="formAddress"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="formRole" className="form-label">
          Хэрэглэгчийн төрөл
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="formRole"
          name="role"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="client" selected>Хэрэглэгч</option>
          <option value="moderator">Худалдагч</option>
          <option value="admin">Админ</option>
        </select>
      </div>
      <div className="mb-3">
        <label for="formPassword1" className="form-label">
          Нууц үг
        </label>
        <input
          className="form-control"
          type="password"
          id="formPassword1"
          name="password1"
          onChange={(e) => setPassword1(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="formPassword2" className="form-label">
          Нууц үгээ дахин оруулна
        </label>
        <input
          className="form-control"
          type="password"
          id="formPassword2"
          name="password2"
        />
      </div>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={submitHandler}
        >
          Хадгалах
        </button>
      </div>
    </div>
  );
};

export default AddUser;
