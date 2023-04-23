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