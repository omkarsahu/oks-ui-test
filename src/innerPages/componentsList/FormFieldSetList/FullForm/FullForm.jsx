import React from "react";
import dayjs from "dayjs";
import { Button, Form, FormFieldSet } from "oks-ui";

const FullForm = () => {
  const onSubmit = (formData) => {
    console.log("submit", formData);
  };

  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <Form onSubmit={onSubmit} onError={onError}>
      <div className="w-full h-full grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
        <FormFieldSet
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your name"
          validation={{ rules: { required: true, minLength: 3 } }}
        />
        <FormFieldSet
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          validation={{ rules: { required: true, email: true } }}
        />
        <FormFieldSet
          label="Date of Birth"
          name="datepicker"
          type="datepicker"
          placeholder="Enter your datepicker"
          maxDate={dayjs().toDate()}
          validation={{ rules: { required: true } }}
        />
        <FormFieldSet
          label="Phone"
          name="phone"
          type="phone"
          placeholder="Enter your phone"
          validation={{ rules: { required: true, phone: true } }}
        />
        <FormFieldSet
          label="Country"
          name="country"
          type="select"
          placeholder="Enter your country"
          options={[
            { label: "United States", value: "us" },
            { label: "Canada", value: "ca" },
            { label: "United Kingdom", value: "uk" },
            { label: "Australia", value: "au" },
            { label: "New Zealand", value: "nz" },
          ]}
          validation={{ rules: { required: true } }}
        />
        <FormFieldSet
          label="Gender"
          name="gender"
          type="radio"
          placeholder="Enter your gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          validation={{ rules: { required: true } }}
        />
        <FormFieldSet
          label="Hobby"
          name="hobby"
          type="checkbox"
          placeholder="Enter your hobby"
          options={[
            { label: "Reading", value: "reading" },
            { label: "Traveling", value: "traveling" },
            { label: "Cooking", value: "cooking" },
          ]}
          validation={{ rules: { required: true } }}
        />
        <FormFieldSet
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          validation={{ rules: { required: true, minLength: 6 } }}
        />
        <FormFieldSet
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          validation={{
            rules: {
              required: true,
              confirmPassword: true,
              password: "password",
            },
          }}
        />
        <FormFieldSet
          label="Submit"
          name="submit"
          type="switch"
          placeholder="Submit"
          validation={{ rules: { required: true } }}
        />
        <FormFieldSet
          label="Resume"
          name="resume"
          type="file"
          placeholder="Upload your resume"
          validation={{ rules: { required: true } }}
        />
        <FormFieldSet
          label="Message"
          name="message"
          type="textarea"
          placeholder="Enter your message"
          validation={{ rules: { required: true } }}
        />
      </div>
      <div className="mt-6 w-full">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default FullForm;
