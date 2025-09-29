import React, { useState } from "react";

const FromAction = () => {

    const [password, setPassword] = useState('')
    const [error, setError] =useState('');

  const handleAction = (formData) => {
      console.log(formData.get('name'));
      console.log(formData.get('email'));
  }
    
    const handleOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setError('Password must be 6 characters or longer.')
        }
        else {
            setError('');
        }
    }

  return (
    <div>
      <form action={handleAction}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" placeholder="email" required />
        <br />
        <input type="password" name="password" placeholder="password" onChange={handleOnChange} defaultValue={password} />
        <br />
        <input type="submit" value="Submit" />
          </form>
          <p style={{ color:'red'}}>
              <small>{ error}</small>
          </p>
    </div>
  );
};

export default FromAction;
