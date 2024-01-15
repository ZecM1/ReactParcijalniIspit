import React from 'react';
import PropTypes from 'prop-types';

function Form(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    props.onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' name='name' />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
