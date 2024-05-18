class City{
    constructor(town,latitude,longitude){
      this.town=town;
      this.latitude=parseFloat(latitude).toFixed(2);
      this.longitude =parseFloat(longitude).toFixed(2);
    }
  }
  
  function parceCity(data) {
    const cities = [];
    for (line of data) {
      const [town, latitude, longitude] = line.split('|').map((item) => item.trim());
      const city = new City(town, latitude, longitude);
      cities.push(city);
    }
    return cities;
  }
  
  const input = [
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
  ];
  
  for(const city of parceCity(input)){
    console.log(city);
  }  