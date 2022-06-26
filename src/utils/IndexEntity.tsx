import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { Link } from 'react-router-dom';
import Button from './Button';
import customConfirm from './customConfirm';
import GenericList from './GenericList';
import Pagination from './Pagination';
import RecordsPerPage from './RecordsPerPage';

export default function IndexEntity<TRead>(props: indexEntityProps<TRead>) {
  const [entities, setEntities] = useState<TRead[]>();
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, recordsPerPage]);

  function loadData() {
    axios
      .get(props.url, { params: { page, recordsPerPage } })
      .then((response: AxiosResponse<TRead[]>) => {
        const totalAmountOfRecords = parseInt(
          response.headers['totalamountofrecords'],
          10
        );
        setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
        setEntities(response.data);
      });
  }

  async function deleteEntity(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      loadData();
    } catch (error) {
      if (error && error.response) {
        console.error(error.response.data);
      }
    }
  }

  const buttons = (editURL: string, id: number) => (
    <>
      <Link className="btn btn-success" to={editURL}>
        Edit
      </Link>
      <Button
        className="btn btn-danger"
        onClick={() => customConfirm(() => deleteEntity(id))}
      >
        Delete
      </Button>
    </>
  );
  return (
    <>
      <h3>{props.title}</h3>
      <Link className="btn btn-primary" to={props.createURL}>
        Create {props.entityName}
      </Link>
      <RecordsPerPage
        onChange={(amountOfRecords) => {
          setPage(1);
          setRecordsPerPage(amountOfRecords);
        }}
      />
      <Pagination
        currentPage={page}
        totalAmountOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
      />
      <GenericList list={entities}>
        <table className="table table-striped">
          {props.children(entities!, buttons)}
        </table>
      </GenericList>
    </>
  );
}

interface indexEntityProps<TRead> {
  url: string;
  createURL: string;
  title: string;
  entityName: string;
  children(
    entities: TRead[],
    buttons: (editUrl: string, id: number) => ReactElement
  ): ReactElement;
}
