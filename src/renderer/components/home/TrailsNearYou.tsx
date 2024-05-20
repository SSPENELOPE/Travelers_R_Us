/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import nationalParksFetch from '../../utils/nationalParksFetch';

interface Trail {
  [x: string]: any;
  id: string;
  name: string;
  url: string;
}

const TrailsNearYou: React.FC = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchTrails = async () => {
    try {
      const hikingTrails = await nationalParksFetch.findTrails(); // Assuming this function fetches trails
      const trailsArray: any = Object.values(hikingTrails); // Convert object values to an array
      setTrails(trailsArray);
    } catch (error) {
      console.error('Error fetching parks:', error);
    }
  };

  useEffect(() => {
    fetchTrails();
  }, []);

  // Function to handle pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate pagination offsets
  const trailsPerPage = 10;
  const indexOfLastTrail = currentPage * trailsPerPage;
  const indexOfFirstTrail = indexOfLastTrail - trailsPerPage;
  const currentTrails = trails.slice(indexOfFirstTrail, indexOfLastTrail);

  return (
    <div className="d-flex flex-column w-50">
      <h1 className="text-light border-bottom">Trails Near You</h1>
      <div className="w-100 trail-div p-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {currentTrails.map((trail) => (
            <div className="col" key={trail.place_id}>
              <div className="card h-100 bg-dark text-light">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{trail.name}</h5>
                    <p className="card-text">{trail.description}</p>
                  </div>
                  <div>
                    <p className="card-text">
                      Location: {trail.city}, {trail.state}, {trail.country}
                    </p>
                    <a
                      href={trail.activities.hiking.url}
                      className="btn btn-primary"
                      data-mdb-ripple-init
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination component */}
      <nav className="align-self-center">
        <ul className="pagination">
          <li className="page-item">
            <button
              type="button"
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TrailsNearYou;
