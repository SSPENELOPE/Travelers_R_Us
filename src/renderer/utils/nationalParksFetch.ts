/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
class NationalParksFetcher {
  async fetchParks(page: number, limit: number): Promise<any> {
    const url = `http://localhost:3001/api/get/parks?limit=${limit}&page=${page}`;

    try {
      const parksResponse = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!parksResponse.ok) {
        console.log('Error fetching');
        return 'error';
      }

      const parkData = await parksResponse.json();
      return parkData;
    } catch (error) {
      console.error('Error fetching parks:', error);
      return 'error';
    }
  }

  async findTrails(): Promise<any> {
    const url = 'http://localhost:3001/api/get/trails';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      return 'error';
    }
  }
}

export default new NationalParksFetcher();
