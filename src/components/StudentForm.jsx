
import './StudentForm.css'

function StudentForm() {
  return (
    <div className="form-container">
      <h2>Student Registration Form</h2>

      <form>
        <label>First Name</label>
        <input type="text" placeholder="Enter first name" />

        <label>Last Name</label>
        <input type="text" placeholder="Enter last name" />

        <label>Email</label>
        <input type="email" placeholder="Enter email" />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter phone number" />

        <label>Department</label>
        <select>
          <option>Select Department</option>
          <option>Computer Science</option>
          <option>Mathematics</option>
          <option>Physics</option>
        </select>

        <label>Gender</label>
        <select>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>Date of Birth</label>
        <input type="date" />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default StudentForm
