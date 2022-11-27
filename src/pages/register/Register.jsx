import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../config/supabase';

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async e => {
    setLoading(true);
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    const confirmPassword = e.target[2].value;
    // const file = e.target[3].files[0];

    try {
      const { error } = await signUp({ email, password });

      console.log(email, password);
      setLoading(false);
      if (confirmPassword !== password) {
        setErr(true);

        throw error;

        return;
      }
      if (error) throw error;
      toast.success('Account created!\nCheck your email for the login link.', {
        duration: 5000,
      });
    } catch (error) {
      toast.error('Some thing went wrong !', {
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <span className="logo">SMART GRADE 5</span>
          <span className="title" style={{ fontSize: '25px' }}>
            Register
          </span>
          <form onSubmit={handleSubmit}>
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
            <input required type="password" placeholder="confirm password" />
            {/* <input required style={{ display: "none" }} type="file" id="file" /> */}
            {/* <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label> */}
            <button disabled={loading}>Sign up</button>
            {/* {loading && "Uploading and compressing the image please wait..."} */}
            {err && <span>sai mật khẩu vui lòng nhập lại</span>}
          </form>
          <p style={{ fontSize: '15px' }}>
            You do have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
