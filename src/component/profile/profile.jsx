import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../redux/apiSlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as yup from "yup"
import { Toast } from 'react-bootstrap';
import axios from "axios";
export default function Profile() {
  const token = localStorage.getItem("token")
  let { userData } = useSelector((state) => state.apiCall)
  const dispatch = useDispatch()
  const phoneRegExp = /^01[0125][0-9]{8}$/;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      userName: userData.userName,
      gender: userData.gender,
      phone: userData.phone,
      age: userData.age
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .min(3, " must be at least 3 character")
        .max(30, " must be less than 30 character"),
      gender: yup
        .mixed()
        .oneOf(["male", "female"])
        .defined(),
      age: yup.number().positive().integer(),

      phone: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid"),
    }),
    onSubmit: async (values, { resetForm }) => {
      let data = {
        ...values,
      };
      await axios
        .put(
          `https://trello-app-iti.onrender.com/profile/`,
          data,
          {
            headers: { authorization: ` Bearer__${token}` },
          }
        )
        .then(async ({ data }) => {
          Toast.success(data.message);
          await getUserData();
          resetForm();
          setShow(false);
        })
        .catch((err) => {
          const errorMsg = err?.message;
          Toast.error(errorMsg);
        })

    }
  })
  useEffect(() => {
  }, [userData])

  useEffect(() => {
    dispatch(getUserData())
  }, [])
  return (
    <div className='bg-profile'>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 bg-white rounded mt-5">
            <div className="my-4 text-center">
              <img
                className="mx-auto my-4 h-32 w-32 rounded-full border-4 border-white dark:border-gray-800"
                src={
                  userData?.gender === "male"
                    ? "male-avatar.jpg"
                    : "female-avatar.jpg"
                }
                alt="male-avatar"
              />

              <div className="py-2 ms-0">
                <h3 className="mb-1 text-2xl font-bold ">
                  Name: {userData?.userName}
                </h3>
                <div className="inline-flex items-center text-gray-700 dark:text-gray-300">
                  <ul className="flex flex-col list-style-none ms-0 ps-0">
                    <li>
                      <span className="font-bold">
                        Phone:
                      </span>{" "}
                      {userData?.phone}
                    </li>
                    <li>
                      <span className="font-bold">
                        Age:
                      </span>{" "}
                      {userData?.age}
                    </li>
                    <li>
                      <span className="font-bold">
                        Gender:
                      </span>{" "}
                      {userData?.gender}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='form p-4'>
              <div className='w-100 d-flex justify-content-center'>
                <Button variant="primary mb-4 w-50 " onClick={handleShow}>
                  Update Profile
                </Button>
              </div>


              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Updata Profile</Modal.Title>
                </Modal.Header>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3 mx-2" controlId="formBasicUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control value={formik.values.userName} onBlur={formik.handleBlur} onChange={formik.handleChange} name='userName' type="text" placeholder="Enter User Name" />
                  </Form.Group>
                  <Form.Group className="mb-3 mx-2">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select value={formik.values.gender} onBlur={formik.handleBlur} onChange={formik.handleChange} name='gender' aria-label="Default select example">
                      <option value="male">Male</option>
                      <option value="female">Femail</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3 mx-2" controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control value={formik.values.age} onBlur={formik.handleBlur} onChange={formik.handleChange} name='age' type="number" placeholder="Age" />
                  </Form.Group>
                  <Form.Group className="mb-3 mx-2" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} name='phone' type="number" placeholder="Phone" />
                  </Form.Group>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" type='submit' onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Form>

              </Modal>
            </div>

          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

    </div>
  );
};