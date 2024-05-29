import ListItems from "./ListItems";

function List() {
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Mangoe" },
    { id: 3, name: "Pawpaw" },
    { id: 4, name: "SharwaChop" },
    { id: 5, name: "Guava" },
    { id: 6, name: "Oranges" },
    { id: 7, name: "StrawBerries" },
  ];
  return (
    <>
      <ol>
        {fruits.map((fruit) => {
          return (
            <>
              <ListItems name={fruit.name} id={fruit.id} />
            </>
          );
        })}
      </ol>
    </>
  );
}

export default List;
