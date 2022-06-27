import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { useHistory, useParams } from 'react-router-dom';
import DisplayErrors from './DisplayErrors';
import Loading from './Loading';

export default function EditEntity<TCreate, TRead>(
  props: editEntityProps<TCreate, TRead>
) {
  const { id }: any = useParams();
  const [entity, setEntity] = useState<TCreate>();
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(`${props.url}/${id}`).then((response: AxiosResponse<TRead>) => {
      setEntity(props.transform(response.data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function edit(entityToEdit: TCreate) {
    try {
      if (props.transformFormData) {
        const formData = props.transformFormData(entityToEdit);
        await axios({
          method: 'put',
          url: `${props.url}/${id}`,
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.put(`${props.url}/${id}`, entityToEdit);
      }
      history.push(props.indexURL);
    } catch (error) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  return (
    <>
      <h3>Edit {props.entityName}</h3>
      <DisplayErrors errors={errors} />
      {entity ? props.children(entity, edit) : <Loading />}
    </>
  );
}

interface editEntityProps<TCreate, TRead> {
  url: string;
  entityName: string;
  indexURL: string;
  transform(entity: TRead): TCreate;
  transformFormData?(model: TCreate): FormData;
  children(entity: TCreate, edit: (entity: TCreate) => void): ReactElement;
}

EditEntity.defaultProps = {
  transform: (entity: any) => entity,
};
