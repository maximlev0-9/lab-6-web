import React from "react";
import {
  CheckoutWrapper,
  ResetButton,
  SubmitButton,
  InputWrapper,
  LabelForInput,
  DivFlex,
  DivWithBorders,
  DivForButtons,
} from "./Checkout.styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export default function Checkout() {
  const history = useHistory()
  return (
    <CheckoutWrapper>
      <Formik
        initialValues={{
          email: "",
          address: "",
          phone_number: "",
          credit_card_code: "",
          credit_card_date_expired: "",
          credit_card_cvc2: "",
        }}
        onSubmit={async (_) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          history.push('/success')
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Required"),

          phone_number: Yup.string()
            .min(10, "pnohe number must be minimum 10 digits long")
            .max(
              13,
              "pnohe number must be maximum 12 digits long (with leading plus)"
            )
            .notRequired()
            .matches(
              "^(\\+[0-9]{2})?[0-9]{10}$",
              "pnohe number must contain only 10 digits or 12 digits and plus at start"
            ),

          address: Yup.string().required("Please enter your address"),
          credit_card_code: Yup.string()
            .required("Credit card code is required")
            .min(16)
            .max(19)
            .matches(
              "^([0-9]{4}\\s?){4}$",
              'Code should match pattern "4 sets of 4 digits that can be splitted by whitespaces"'
            ),
          credit_card_date_expired: Yup.string()
            .matches("^[0-9]{2}/[0-9]{2}$", "Enter date in format MM/dd")
            .required("Date is required"),
          credit_card_cvc2: Yup.string()
            .matches("^[0-9]{3}$", "Enter date in format MM/dd")
            .required("Cvc2 is required"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <DivWithBorders>
                <p>Enter details of order:</p>
                <br/>
                <p>Enter user details:</p>
                <InputWrapper>
                  <LabelForInput htmlFor="email">Email*</LabelForInput>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                  />

                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <LabelForInput htmlFor="phone_number">
                    Phone number
                  </LabelForInput>
                  <input
                    id="phone_number"
                    placeholder="Enter your phone number"
                    type="text"
                    value={values.phone_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.phone_number && touched.phone_number
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.phone_number && touched.phone_number && (
                    <div className="input-feedback">{errors.phone_number}</div>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <LabelForInput htmlFor="address">Address*</LabelForInput>
                  <input
                    id="address"
                    placeholder="Enter your address"
                    type="text"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.address && touched.address
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.address && touched.address && (
                    <div className="input-feedback">{errors.address}</div>
                  )}
                </InputWrapper>

                <p>Credit card details:</p>
                <br/>
                <InputWrapper>
                  <LabelForInput htmlFor="credit_card_code">
                    Credit card code*
                  </LabelForInput>
                  <input
                    id="credit_card_code"
                    placeholder="Enter your credit card code"
                    type="text"
                    value={values.credit_card_code}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.credit_card_code && touched.credit_card_code
                        ? "text-input error"
                        : "text-input"
                    }
                  />

                  {errors.credit_card_code && touched.credit_card_code && (
                    <div className="input-feedback">
                      {errors.credit_card_code}
                    </div>
                  )}
                </InputWrapper>
                <InputWrapper>
                  <LabelForInput htmlFor="credit_card_date_expired">
                    Credit card date expired*
                  </LabelForInput>
                  <input
                    id="credit_card_date_expired"
                    placeholder="Enter your credit card date"
                    type="text"
                    value={values.credit_card_date_expired}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.credit_card_date_expired &&
                      touched.credit_card_date_expired
                        ? "text-input error"
                        : "text-input"
                    }
                  />

                  {errors.credit_card_date_expired &&
                    touched.credit_card_date_expired && (
                      <div className="input-feedback">
                        {errors.credit_card_date_expired}
                      </div>
                    )}
                </InputWrapper>
                <InputWrapper>
                  <LabelForInput htmlFor="credit_card_cvc2">
                    Credit card cvc2*
                  </LabelForInput>
                  <input
                    id="credit_card_cvc2"
                    placeholder="Enter your credit card cvc2"
                    type="text"
                    value={values.credit_card_cvc2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.credit_card_cvc2 && touched.credit_card_cvc2
                        ? "text-input error"
                        : "text-input"
                    }
                  />

                  {errors.credit_card_cvc2 && touched.credit_card_cvc2 && (
                    <div className="input-feedback">
                      {errors.credit_card_cvc2}
                    </div>
                  )}
                </InputWrapper>

                <DivForButtons>
                  <ResetButton
                    type="button"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </ResetButton>
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    Submit
                  </SubmitButton>
                </DivForButtons>
              </DivWithBorders>
            </form>
          );
        }}
      </Formik>
    </CheckoutWrapper>
  );
}
