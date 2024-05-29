function ListItems({ name, id }) {
  return (
    <div>
      <div key={id}>
        <div>
          <li>{name}</li>
        </div>
      </div>
    </div>
  );
}

export default ListItems;
