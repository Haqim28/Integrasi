import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import imgRegister from '../assets/Register.png';
import { Alert } from "react-bootstrap";
import { useMutation } from 'react-query';   
import { API } from '../../config/api';

function Register() {
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    gender : '',
    phone : '',
    role : ''
  });

  const { name, email, password, gender, phone, asUser } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/register", form);

      const alert = (
        <Alert variant="success">Berhasil mendaftarkan akun!</Alert>
      );

      setMessage(alert);

    } catch (e) {
      console.log(e);
      const alert = (
        <Alert variant="danger">Akun Anda Gagal Terdaftar!</Alert>
      );

      setMessage(alert);
    }
  });

  return (
    <>
      
      <Button className="bg-dark text-white mr-3 "  onClick={handleShow}>Register</Button>
      
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <img src={imgRegister} alt="" />
        </Modal.Header>
        <Modal.Body>
        {message && message}
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                 type="email"
                 placeholder="Email"
                 value={email}
                 name="email"
                 onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                 type="text"
                 placeholder="FullName"
                 value={name}
                 name="fullName"
                 onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                 type="text"
                 placeholder="Gender"
                 value={gender}
                 name="gender"
                 onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                value={phone}
                name="phone"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="As User"
                value={asUser}
                name="role"
                onChange = {handleChange}
              />
            </Form.Group>
            <button className="btn  btn-lg btn-brown text-white  m-3 btn-fluid" variant="primary" size="md" type='submit' >
            Register</button>
          </Form>
        </Modal.Body>
        
            <div className=" text-muted text-center mb-3">
                      Already have an account ? Klik Here 
                    </div>
      </Modal>
    </>
  );
}
export default Register;