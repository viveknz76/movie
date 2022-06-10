import { Form, Formik, FormikHandlers, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import TextField from '../forms/TextField';
import Button from '../utils/Button';
import * as Yup from 'yup';
import { genereCreationDTO } from './genres.model';

export default function GenreForm(props: genreFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('This field is required')
          .firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field="name" displayName="Name" />
          <Button disabled={formikProps.isSubmitting} type="submit">
            Save Changes
          </Button>
          <Link className="btn btn-secondary" to="/genres">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface genreFormProps {
  model: genereCreationDTO;
  onSubmit(
    values: genereCreationDTO,
    action: FormikHelpers<genereCreationDTO>
  ): void;
}