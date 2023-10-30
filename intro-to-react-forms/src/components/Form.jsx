import { useState } from "react"

export function Form(props){

  const [user, setUser] = useState({
      name: "",
      email:"",
      phoneNumber:"",
      phoneType:"Home",
      staffType:"",
      bio:"",
      emailNotification: false
  });

  const handleChange = (incomingKey)=>{
      return (e)=>{
          console.log(e)
          const newObj = Object.assign({},user, {[incomingKey]: e.target.value })
          setUser(newObj)
      }
  }

  function handleSubmit() {
    console.log(user)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input type="text" placeholder="name" value={user.name} onChange={handleChange("name")}/>
        <input type="text" placeholder="email" value={user.email} onChange={handleChange("email")}/>
        <input type="bigInt" placeholder="phone-number" value={user.phoneNumber} onChange={handleChange("phone-number")}/>

        <label for="phoneType">Phone type:</label>
        <select id="phoneType" name="phoneType">
            <option value={user.phoneType} onChange={handleChange("phoneType")}>Home</option>
            <option value={user.phoneType} onChange={handleChange("phoneType")}>Work</option>
            <option value={user.phoneType} onChange={handleChange("phoneType")}>Mobile</option>
        </select>

        <label for="staffType">Staff:</label>
        <input type="radio" id="instructor" name="staffType" value={user.staffType} onChange={handleChange("staffType")}/>
        <label for="instructor">Instructor</label>
        <input type="radio" id="student" name="staffType" value={user.staffType} onChange={handleChange("staffType")}/>
        <label for="student">Student</label>

        <br />
        <label for="bio">Bio:</label>
        <textarea name="bio" id="bio" cols="30" rows="10" value={user.bio}></textarea>

        <label for="emailNotification">Email Notification</label>
        <input type="checkbox" name="emailNotification" id="emailNotification" value={user.emailNotification}/>
        <input type="submit" />
      </form>
    </>
  )
}