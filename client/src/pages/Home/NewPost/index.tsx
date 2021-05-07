import React from 'react';
import { Formik, Form } from 'formik';
import { MenuItem, Select, TextField, Button, Box, makeStyles} from '@material-ui/core';
import * as yup from 'yup';
import { PostModel } from '../../../models/app.model';

const schema = yup.object().shape({
    content: yup.string().required('Content is required'),
    status: yup.string().required('status is required')
});

const INITIAL_VALUE: PostModel = {
    content: '',
    status: 'public',
    createdAt: new Date(),
    user: 'this is should be userID'
};

const useFormStyles = makeStyles({
    formButtomSpacing : {
        marginBottom: '1rem'
    }
})

interface NewPostPros{
    hadleClose : () => void;
}
const NewPost: React.FC<NewPostPros> = ({hadleClose}) => {
    const classes = useFormStyles();

    const submitHandler = (values: PostModel, resetForm: () => void) => {
        console.log(values);
        resetForm();
    };

    return (
        <React.Fragment>
            <Formik initialValues={INITIAL_VALUE} validationSchema={schema}
                onSubmit={(values, {resetForm}) => submitHandler(values, resetForm)}>
                {
                    ({ values, touched, errors, handleBlur, handleChange, handleSubmit }) => (
                        <Form>
                            <TextField
                                type="text"
                                name="content"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Add Content here..."
                                value={values.content}
                                error={touched.content && !!errors.content}
                                label = "POST CONTENT"
                                variant = "outlined"
                                className = {classes.formButtomSpacing}
                                fullWidth
                            />

                            <Select onChange={handleChange} onBlur= {handleBlur}
                            placeholder="post's status here.." value = {values.status}
                            error = {touched.status && !!errors.status}
                            name = "status"
                            label = "STATUS"
                            fullWidth
                            variant = "outlined"
                            >
                                <MenuItem value="public">Public</MenuItem>
                                <MenuItem value="private">Private</MenuItem>
                            </Select>

                            <Box textAlign="right" pt = {2}>
                                <Button type="button" onClick= {hadleClose}>
                                    Close
                                </Button>
                                <Button variant="contained" type="submit" color= "primary" >Save</Button>
                            </Box>
                        </Form>
                    )
                }
            </Formik>
        </React.Fragment>
    )
}

export default NewPost
