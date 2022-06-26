import { useEffect, useState } from 'react';

export default function Pagination(props: paginationProps) {
  // setting the state of the link buttons...1,2,3 that links to the pages
  const [linkModels, setLinkModels] = useState<linkModel[]>([]);

  function selectPage(link: linkModel) {
    if (link.page === props.currentPage) {
      return;
    }

    if (!link.enabled) {
      return;
    }
    props.onChange(link.page);
  }

  function getClass(link: linkModel) {
    if (link.active) {
      return 'active pointer';
    }
    if (!link.enabled) {
      return 'disabled';
    }

    return 'pointer';
  }

  useEffect(() => {
    const links: linkModel[] = [];

    // Set the previous page button
    // Previous page is enabled when it isn't equal to page 1
    const previousPageEnabled = props.currentPage !== 1;
    // Previous page is current page - 1
    const previousPage = props.currentPage - 1;

    links.push({
      text: 'Previous',
      enabled: previousPageEnabled,
      page: previousPage,
      active: false,
    });

    // Loop through all total number of pages to set up the link to all pages
    for (let i = 1; i <= props.totalAmountOfPages; i++) {
      if (
        i >= props.currentPage - props.radio &&
        i <= props.currentPage + props.radio
      ) {
        links.push({
          text: `${i}`,
          active: props.currentPage === i,
          enabled: true,
          page: i,
        });
      }
    }

    // Set the next page button
    const nextPageEnabled =
      props.currentPage !== props.totalAmountOfPages &&
      props.totalAmountOfPages > 0;

    const nextPage = props.currentPage + 1;

    links.push({
      text: 'Next',
      page: nextPage,
      enabled: nextPageEnabled,
      active: false,
    });

    setLinkModels(links);
  }, [props.currentPage, props.totalAmountOfPages, props.radio]);
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {linkModels.map((link) => (
          <li
            key={link.text}
            onClick={() => selectPage(link)}
            className={`page-item cursor ${getClass(link)}`}
          >
            <span className="page-link">{link.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

//data for each representation of the button
interface linkModel {
  page: number;
  enabled: boolean;
  text: string;
  active: boolean;
}

interface paginationProps {
  currentPage: number;
  totalAmountOfPages: number;
  radio: number; // how many pages are we going to display
  onChange(page: number): void;
}

Pagination.defaultProps = {
  radio: 3,
};
