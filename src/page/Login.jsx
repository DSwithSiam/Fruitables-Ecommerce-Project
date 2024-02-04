import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";


export function Login() {

    const navigate = useNavigate()
    const handlelogin = (e)=>{

        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const password = form.password.value;
        const formData = { "username": username, "password":password };
        const csrftoken = getCookie('csrftoken');
        
        fetch('https://fruitables-api.onrender.com/user/login/', {
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

        localStorage.setItem('token', data.token);
        localStorage.setItem('user_id', data.user_id);
        navigate('/')
        window.location.reload();
        // Provide appropriate feedback to the user that signup was successful
        alert('Signup successful!');
    })
    .catch((error) => {
        console.error('Error during signup:', error);
        // Provide appropriate feedback to the user if signup fails
        alert('Signup failed. Please try again later.');
    });
    }

    function getCookie(name) {
      const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
      return cookieValue ? cookieValue.pop() : '';
  }


  return (
    <>
      <form
        method="post"
        onSubmit={handlelogin}
        className="flex w-6/12 my-10 bg-red-200 p-5 rounded-md mx-auto flex-col gap-4"
      >
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
        <Link className="text-blue-600 font-bold" to={"/register"}>
          Have not a acount please Register !
        </Link>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
