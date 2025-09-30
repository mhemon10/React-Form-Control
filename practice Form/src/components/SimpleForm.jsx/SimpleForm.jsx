import React from 'react';

const SimpleForm = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
}

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="your Name" name="name" />
          <br />
          <input type="email" placeholder="your mail" name="email" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
};

export default SimpleForm;
