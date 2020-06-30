export default function() {
    return Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 0,
            name: 'CALABREZA'
          },
          {
            id: 1,
            name: 'PORTUGUESA'
          },
          {
            id: 2,
            name: 'MARGUERITA'
          },
          {
            id: 3,
            name: '4 QUEIJOS'
          },
          {
            id: 4,
            name: 'FRANGO C/ REQUEIJÃO'
          },
          {
            id: 5,
            name: 'ESCAROLA'
          },
          {
            id: 6,
            name: 'LOMBO'
          }
        ])
   
    })
  };