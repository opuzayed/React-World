import React from "react";

const LoginBootstrap = () => {
  return (
    <div className='w-50 mx-auto'>
      <h3 className='text-success'>Please Log In!!!!</h3>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
         Email
        </label>
        <input
          type="email"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter a valid email"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter a password"
        />
      </div>
    </div>
  );
};

export default LoginBootstrap;
