/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from 'react-bootstrap/Pagination';
import { ListGroupItem } from 'react-bootstrap';
import nationalParksFetch from '../../utils/nationalParksFetch';

interface Park {
  id: string;
  name: string;
  images: { url: string }[];
  addresses: { city: string; stateCode: string }[];
  designation: string;
  directionsUrl: string;
  url: string;
  contacts: { phoneNumbers: { phoneNumber: string }[] };
}

const NationalParks: React.FC = () => {
  const [parks, setParks] = useState<Park[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchParks = async (page: number) => {
    try {
      const parkData = await nationalParksFetch.fetchParks(page, 10); // Fetch 10 parks per page
      const parkArray: any = Object.values(parkData.data);
      // console.log('park-array: ', parkArray);
      setParks(parkArray);
      setTotalPages(Math.ceil(parkData.total / 10)); // Ensure totalPages is a whole number
      // console.log('Fetched Parks:', parkData); // Debugging
    } catch (error) {
      console.error('Error fetching parks:', error);
    }
  };

  useEffect(() => {
    fetchParks(currentPage);
  }, [currentPage]);

  return (
    <div className="d-flex flex-column">
      <h1 className="text-light border-bottom">Discover National Parks</h1>
      <div className="park-cards-container">
        {parks ? (
          parks.map((park) => (
            <Card
              style={{ width: '18rem', margin: '5px', padding: '5px' }}
              key={park.id}
            >
              <Card.Img
                variant="top"
                src={park.images[0].url}
                className="card-img"
              />
              <Card.Body>
                <Card.Title>{park.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  {park.addresses[0].city}, {park.addresses[0].stateCode}
                </ListGroup.Item>
                <ListGroup.Item>{park.designation}</ListGroup.Item>
                <ListGroupItem>
                  <Card.Link href={park.directionsUrl}>Directions</Card.Link>
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href={park.url}>Website</Card.Link>
                {park.contacts.phoneNumbers.length > 0 ? (
                  <Card.Link href="#">
                    {park.contacts.phoneNumbers[0].phoneNumber}
                  </Card.Link>
                ) : (
                  <Card.Link href="#">N/A</Card.Link>
                )}
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No parks available.</p>
        )}
      </div>
      <Pagination className="align-self-center mt-4">
        <Pagination.First
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {/* Display a certain number of pages around the current page */}
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          const pageToShow = currentPage - 2 <= page && page <= currentPage + 2;

          if (pageToShow) {
            return (
              <Pagination.Item
                key={index}
                active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Pagination.Item>
            );
          }
          if (page === 1 || page === totalPages) {
            // Always show the first and last pages
            return (
              <Pagination.Item
                key={index}
                active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Pagination.Item>
            );
          }
          if (page === 2 && currentPage - 3 > 1) {
            // Show an ellipsis if there are pages hidden before the second page
            return <Pagination.Ellipsis key={index} />;
          }
          if (page === totalPages - 1 && currentPage + 3 < totalPages) {
            // Show an ellipsis if there are pages hidden after the second last page
            return <Pagination.Ellipsis key={index} />;
          }
          return null;
        })}

        <Pagination.Next
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default NationalParks;
