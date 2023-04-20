import './Register.css'
import Header from '../component/header';
function Register(){
    return(
        <div>
            <Header/>
     
        <div className="container">
		<form action="" method="POST">
            <div className="head">
            <h1>Student Registration Form</h1>
            </div>
			

			<label for="name">Full Name:</label>
			<input type="text" id="name" name="name" placeholder="Enter your full name" required/>

			<label for="email">Email:</label>
			<input type="email" id="email" name="email" placeholder="Enter your email" required/>

			<label for="phone">Phone:</label>
			<input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>

			<label for="dob">Date of Birth:</label>
			<input type="date" id="dob" name="dob" required/>

			<label for="gender">Gender:</label>
			<select id="gender" name="gender" required>
				<option value="" selected disabled hidden>Select your gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="other">Other</option>
			</select>
			<label for="name">Programme:</label>
			<input type="text" id="name" name="name" placeholder="Enter your programme name" required/>

			<label for="address">Address:</label>
			<textarea id="address" name="address" placeholder="Enter your address" required></textarea>

			<button type="submit">Register</button>
		</form>
	</div>
    </div>
    )
}
export default Register;