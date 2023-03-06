import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { FormGroup, Button } from "react-bootstrap";
// import NewIngredient from "./ingredientNew";
  
const RecipeForm = props => {
  
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Required"),
        serving_size: Yup.string().required("Required")
        // ingredients: Yup.string().required("Required"),
    })
  
    console.log(props);
    return (
        <div className="form-wrapper">
            <h1>New recipe</h1>
        <Formik {...props} validationSchema={validationSchema}>
            <Form>
            <FormGroup>
                <label htmlFor="title">Title</label>
                <Field name="title" type="text" className="form-control" />
                <ErrorMessage name="title" className="d-block invalid-feedback" component="span"/>
                <label htmlFor="serving_size">Serving size</label>
                <Field name="serving_size" type="number" className="form-control" />
                <ErrorMessage name="serving_size" className="d-block invalid-feedback" component="span"/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="type">Type</label>
                <Field name="type" type="text" className="form-control" />
                <ErrorMessage name="type" className="d-block invalid-feedback" component="span"/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="cooktime_hours">Cooktime</label>
                <Field name="cooktime_hours" type="number" className="form-control" />:
                <ErrorMessage name="cooktime_hours" className="d-block invalid-feedback" component="span"/>
                <Field name="cooktime_minutes" type="number" className="form-control" />:
                <ErrorMessage name="cooktime_minutes" className="d-block invalid-feedback" component="span"/>
                <Field name="cooktime_seconds" type="number" className="form-control" />
                <ErrorMessage name="cooktime_seconds" className="d-block invalid-feedback" component="span"/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="chilltime_hours">Chilltime</label>
                <Field name="chilltime_hours" type="number" className="form-control" />
                <ErrorMessage name="chilltime_hours" className="d-block invalid-feedback" component="span"/>
                <Field name="chilltime_minutes" type="number" className="form-control" />
                <ErrorMessage name="chilltime_minutes" className="d-block invalid-feedback" component="span"/>
                <Field name="chilltime_seconds" type="number" className="form-control" />
                <ErrorMessage name="chilltime_seconds" className="d-block invalid-feedback" component="span"/>
            </FormGroup>
            {/* <NewIngredient></NewIngredient> */}

            <FormGroup>
            {({ values }) => (
                <FieldArray name="ingredients">
                    {({ insert, remove, push }) => (
                    <div>
                        {values.ingredients.length > 0 && values.ingredients.map((ingredient, index) => (
                            <div className="row" key={index}>
                            <div className="col">
                                <label htmlFor={`friends.${index}.name`}>Name</label>
                                <Field name={`friends.${index}.name`} placeholder="Jane Doe" type="text"/>
                                <ErrorMessage name={`friends.${index}.name`} component="div" className="field-error"/>
                            </div>
                            <div className="col">
                                <label htmlFor={`friends.${index}.email`}>Email</label>
                                <Field name={`friends.${index}.email`} placeholder="jane@acme.com" type="email"/>
                                <ErrorMessage name={`friends.${index}.name`} component="div" className="field-error" />
                            </div>
                            <div className="col">
                                <button type="button" className="secondary" onClick={() => remove(index)}>
                                X
                                </button>
                            </div>
                            </div>
                        ))}
                        <button type="button" className="secondary" onClick={() => push({ name: '', email: '' })}>Add ingredient
                        </button>
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
  
export default RecipeForm;