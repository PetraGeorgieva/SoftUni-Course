function listProcessor(array) {
    let innerArr = [];
    array.forEach(el => {
       let [command,s] = el.split(' ');
        let obj = solution();
        obj[command](s,innerArr);
    });
    function solution() {
          return {
            add: (s,innerArr) => (innerArr.push(s)),
            remove: function (s,innerArr) {
              while (innerArr.includes(s)) {
                  let index = innerArr.indexOf(s)
                  innerArr.splice(index,1)
              }
            },
            print: (s,innerArr) => console.log(innerArr.join(',')),
          }
          
    }

  }
  listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])