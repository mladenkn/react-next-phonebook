import { WithStyles, withStyles, Icon, IconButton, Button } from "@material-ui/core";
import { Contact } from "../../models";
import style from "./ContactEditor-style";
import { ContactFieldLabel, Divider, Emptiness } from "../reusables";
import React from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field, ErrorMessage, FieldArray  } from 'formik';
import { compose } from "lodash/fp";


type Props = WithStyles<typeof style> & FormikProps<Contact>; 

const ContactEditor = (p: Props) => 
{
    console.log(p);
    const {values, classes} = p;
    console.log(values);
    return (
        <Form>
          <label>
            <ContactFieldLabel icon="person_outlined" text="full name" className={classes.label} />
            <Field type="text" name="fullName" className={classes.input + ' ' + classes.singleValueInput} />
            <ErrorMessage name="fullName" component="div"/>
          </label>
          
          <Divider className={classes.divider} margin={18} />
          
          <label>
            <ContactFieldLabel icon="email" text="email" className={classes.label} />
            <Field type="email" name="email" className={classes.input + ' ' + classes.singleValueInput} />
            <ErrorMessage name="email" component="div"/>
          </label>
          
          <Divider className={classes.divider} margin={18} />

          <FieldArray
            name="numbers"
            render={arr => (
              <div>                        
                <ContactFieldLabel icon="phone" text="numbers" />
                {values.numbers.map((_, index) => (
                  <div className={classes.phoneNumber} key={index}>
                    <Field name={`numbers[${index}].value`} className={classes.input + ' ' + classes.phoneNumberInput} />
                    <Field name={`numbers.${index}.label`} className={classes.input + ' ' + classes.phoneNumberLabelInput} />
                    <IconButton className={classes.labelRemover} onClick={() => arr.remove(index)}>
                      <span className={classes.labelRemoverIcon}>x</span>
                    </IconButton>
                  </div>
                ))}
                <Button className={classes.numberAdder} onClick={() => arr.push({ value: undefined, label: '' })}>
                  <Icon color="primary">add_circle_outline</Icon>
                  <Emptiness width={5} />
                  Add number
                </Button>
              </div>
            )}
          />
        </Form>
      );
}

const withForm = withFormik<{contact: Contact} & Props, Contact>({

  mapPropsToValues: props => props.contact,
  
  validate: (values) => {
    let errors: FormikErrors<Contact> = {};

    if(!values.email.includes('@') || !values.email.includes('.'))
        errors.email = "Email not valid."

    return errors;
  },

  handleSubmit: values => {}
});
 
export default compose(withForm, withStyles(style))(ContactEditor);