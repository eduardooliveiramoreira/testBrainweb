export default function() {
    return Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 0,
            name: 'Tradicional'
          },
          {
            id: 1,
            name: 'Integral'
          }
        ])
   
    })
  };