import React from "react";
import { Input, Modal } from "antd";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import { StyledContactContent } from "./styles";

/*
  Format the contact content.
  After contact submission, close modal and show green toasts that says,
  "Thank you! We'll be in touch soon"
*/

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  message: yup.string().required(),
});

const ContactModal = ({ visible, setVisible, onContactSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(values);
          actions.setSubmitting(false);
          setVisible(false);
          actions.resetForm();
          onContactSubmit();
        }, 1000);
      }}
    >
      {(formProps) => (
        <Modal
          title="Contact us"
          visible={visible}
          onOk={formProps.handleSubmit}
          onCancel={() => {
            setVisible(false);
            formProps.resetForm();
          }}
          okButtonProps={{ disabled: !formProps.dirty || !formProps.isValid }}
          confirmLoading={formProps.isSubmitting}
        >
          <StyledContactContent>
            <Form>
              <Field
                className="field"
                name="name"
                as={Input}
                placeholder="Name"
              />
              <Field
                className="field"
                name="email"
                as={Input}
                placeholder="Email"
              />
              <Field
                className="field"
                name="message"
                as={Input.TextArea}
                rows={4}
                placeholder="Message"
              />
            </Form>
          </StyledContactContent>
        </Modal>
      )}
    </Formik>
  );
};

export default ContactModal;
