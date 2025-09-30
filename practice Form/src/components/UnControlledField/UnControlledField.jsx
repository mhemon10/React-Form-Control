import React, { useRef } from "react";

const UnControlledField = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} placeholder="Email" type="email" name=" " />
        <br />
        <input ref={passwordRef} placeholder="Passsword" type="password" name=" " />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;
