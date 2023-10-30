import { useState } from "react"
import validate from "../validate";

export function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    phoneType: "Home",
    staffType: "",
    bio: "",
    emailNotification: false
  });

  const handleChange = (incomingKey) => {
    return (e) => {
      const newObj = { ...user, [incomingKey]: e.target.value };
      setUser(newObj);
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(user);

    if (validationErrors) {
      console.log("User data is valid and can be submitted:", validationErrors);
    } else {
      console.log("Validation errors:", user);
    }
  }

    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="name" value={user.name} onChange={handleChange("name")} />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="email" value={user.email} onChange={handleChange("email")} />
          <label htmlFor="phoneNumber">Phone number:</label>
          <input type="text" id="phoneNumber" placeholder="phone-number" value={user.phoneNumber} onChange={handleChange("phoneNumber")} />

          <label htmlFor="phoneType">Phone type:</label>
          <select id="phoneType" name="phoneType" value={user.phoneType} onChange={handleChange("phoneType")}>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Mobile">Mobile</option>
          </select>
          
          <label>Staff:</label>
          <input type="radio" id="instructor" name="staffType" value="Instructor" onChange={handleChange("staffType")} />
          <label htmlFor="instructor">Instructor</label>
          <input type="radio" id="student" name="staffType" value="Student" onChange={handleChange("staffType")} />
          <label htmlFor="student">Student</label>

          <br />
          <label htmlFor="bio">Bio:</label>
          <textarea name="bio" id="bio" cols="30" rows="10" value={user.bio} onChange={handleChange("bio")}></textarea>

          <label htmlFor="emailNotification">Email Notification</label>
          <input type="checkbox" name="emailNotification" id="emailNotification" checked={user.emailNotification} onChange={handleChange("emailNotification")} />
          <input type="submit" />
        </form>
      </>
    )
}