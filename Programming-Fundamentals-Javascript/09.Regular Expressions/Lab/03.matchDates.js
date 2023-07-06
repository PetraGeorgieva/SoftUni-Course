function matchDates(params) {
    let pattern = /(?<day>\d{2})(?<delimiter>[-\/.])(?<month>[A-Z][a-z]{2})\k<delimiter>(?<year>\d{4})/g;
    let result = []
    for (let i = 0; i < params.length; i++) {
      let text = params[i];
      let match = [...text.matchAll(pattern)]
      for (let j = 0; j < match.length; j++) {
          let res = `Day: ${match[j].groups.day}, Month: ${match[j].groups.month}, Year: ${match[j].groups.year}`
       console.log(res);
      }
    }
    
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])