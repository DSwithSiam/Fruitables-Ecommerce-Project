import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { Link } from "react-router-dom";

export function SignUp() {

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value; 
    
        if (password !== confirm_password) {
            alert('Passwords do not match');
            return;
        }
    
        const formData = { "username": username, "first_name": firstname, "last_name":lastname, "email": email, "password":password ,"confirm_password":confirm_password};
        const csrftoken = getCookie('csrftoken'); // Get CSRF token from cookie
        fetch("https://fruitables-api.onrender.com/user/register/", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                'X-CSRFToken': csrftoken, // Include CSRF token in headers
            },
            body: JSON.stringify(formData)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Signup successful:', data);
            // Provide appropriate feedback to the user that signup was successful
            alert('Signup successful!');
        })
        .catch((error) => {
            console.error('Error during signup:', error);
            // Provide appropriate feedback to the user if signup fails
            alert('Signup failed. Please try again later.');
        });
    };
    
    // Function to get the value of a specific cookie
    function getCookie(name) {
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : '';
    }




    return (
        <>
           <form method="post" onSubmit={handleSignup} className="flex w-6/12 my-10 bg-red-200 p-5 rounded-md mx-auto flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="User Name" />
              </div>
              <TextInput
                id="email1"
                type="text"
                name="username"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="First Name" />
              </div>
              <TextInput
                id="email1"
                type="text"
                name="firstname"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Last Name" />
              </div>
              <TextInput
                id="email1"
                type="text"
                name="lastname"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                name="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your password" />
              </div>
              <TextInput
                id="email1"
                type="password"
                name="password"
                placeholder="Your password"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your confirm" />
              </div>
              <TextInput
                id="email1"
                type="password"
                name="confirm_password"
                placeholder="Confirm password"
                required
              />
            </div>
            <Link className="text-blue-600 font-bold" to={'/login'}>
                Have a acount please Login !
            </Link>

            <Button type="submit">Submit</Button>
          </form>
        </>
    )
}
