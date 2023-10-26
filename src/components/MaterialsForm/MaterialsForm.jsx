import { Field, Form, Formik } from 'formik';

export const MaterialsForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="form">
          <label>
            Опис:
            <Field name="title" type="text" />
          </label>
          <label>
            Посилання:
            <Field name="link" type="text" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Добавити матеріал
          </button>
        </Form>
      )}
    </Formik>
  );
};
