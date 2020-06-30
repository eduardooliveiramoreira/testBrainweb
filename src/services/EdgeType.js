export default function getEdge() {
    return Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 0,
            name: 'Cheddar'
          },
          {
            id: 1,
            name: 'Mista (Requeijão e Cheddar)'
          },
          {
            id: 2,
            name: 'Requeijão.'
          },
          {
            id: 3,
            name: 'Sem borda'
          }
        ])
   
    })
  };