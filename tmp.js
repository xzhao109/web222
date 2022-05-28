function buildUrl(query, order, count, license) {
    let url;
    let counter = 0;
    let licenseArr = [
      'none',
      'any',
      'cc-by',
      'cc-by-nc',
      'cc-by-sa',
      'cc-by-nd',
      'cc-by-nc-sa',
      'cc-by-nc-nd'
    ];
  
    for (let i = 0; i < licenseArr.length; i++) {
      if (licenseArr.includes(license)) {
        counter++;
      }
    } 
    if (counter === 0){
      throw null;
    }
  
    // count below 1 or above 30 throws
    if (count < 1 || count > 30) {
      throw null;
    }
  
    // var order can be `ascending` `asc` and `descending` `desc`
    if (order.includes('desc') === true || order.includes('asc') === true) {
      switch (true) {
        case order === 'desc':
          order = 'descending';
          break;
        case order === 'asc':
          order = 'ascending';
          break;
      }
    } else {
      throw null;
    }
  
    url =
      'https://api.inaturalist.org/v2/observations' +
      '?query=' +
      query +
      '&count=' +
      count +
      '&order=' +
      order +
      '&license=' +
      license;
  
    return license;
  }

  console.log(buildUrl('butterfly', 'ascending', 30, ''));