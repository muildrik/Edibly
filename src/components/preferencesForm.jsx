import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { FormGroup, Button } from "react-bootstrap";
  
const PreferencesForm = props => {
  
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        email: Yup.string('email').required("Required"),
        // ingredients: Yup.string().required("Required"),
    })
  
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <h1>Personal details</h1>
                    <FormGroup>
                        <label htmlFor="firstname">First name</label>
                        <Field name="firstname" type="text" className="form-control" />
                        <ErrorMessage name="firstname" className="d-block invalid-feedback" component="span"/>
                        <label htmlFor="lastname">Last name</label>
                        <Field name="lastname" type="number" className="form-control" />
                        <ErrorMessage name="lastname" className="d-block invalid-feedback" component="span"/>
                        <label htmlFor="email">Email*</label>
                        <Field name="email" type="email" className="form-control" />
                        <ErrorMessage name="email" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <h1>Your stores</h1>
                    <h2>New store</h2>
                    <FormGroup>
                        <label htmlFor="newStore">Name</label>
                        <Field name="newStore" placeholder="Aldi" type="text"/>
                        <ErrorMessage name="newStore" component="div" className="field-error"/>
                        <label htmlFor="newStoreStreetAddress">Street address</label>
                        <Field name="newStoreStreetAddress" type="text"/>
                        <ErrorMessage name="newStoreStreetAddress" component="div" className="field-error"/>
                        <label htmlFor="newStoreCity">City</label>
                        <Field name="newStoreCity" type="text"/>
                        <ErrorMessage name="newStoreCity" component="div" className="field-error"/>
                        <label htmlFor="newStoreState">State</label>
                        <Field name="newStoreState" type="text"/>
                        <ErrorMessage name="newStoreState" component="div" className="field-error"/>
                        <label htmlFor="newStoreZip">Zip code</label>
                        <Field name="newStoreZip" type="number"/>
                        <ErrorMessage name="newStoreZip" component="div" className="field-error"/>
                        <label htmlFor="newStoreURL">URL</label>
                        <Field name="newStoreURL" type="url"/>
                        <ErrorMessage name="newStoreURL" component="div" className="field-error"/>
                    </FormGroup>
                    <FormGroup>
                    <h2>Saved stores</h2>
                    {({ stores }) => (
                        <FieldArray name="stores">
                            {({ insert, remove, push }) => (
                            <div>
                                {stores.length > 0 && stores.map((store, index) => (
                                    <div className="row" key={index}>
                                    <div className="col">
                                        <label htmlFor={`store.${index}.name`}>Name</label>
                                        <Field name={`store.${index}.name`} placeholder="Jane Doe" type="text"/>
                                        <ErrorMessage name={`store.${index}.name`} component="div" className="field-error"/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor={`store.${index}.city`}>City</label>
                                        <Field name={`store.${index}.city`} placeholder="jane@acme.com" type="email"/>
                                        <ErrorMessage name={`store.${index}.name`} component="div" className="field-error" />
                                    </div>
                                    <div className="col">
                                        <button type="button" className="secondary" onClick={() => remove(index)}>X</button>
                                    </div>
                                    </div>
                                ))}
                            </div>
                            )}
                        </FieldArray>
                    )}
                    </FormGroup>
                <Button variant="danger" size="lg" block="block" type="submit">
                    {props.children}
                </Button>
                </Form>
            </Formik>
        </div>
    );
};
  
export default PreferencesForm;