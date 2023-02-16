const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('Im being dragged');
  };

  return (
    <div>
      <input onChange={onChange}></input>
      <div draggable onDragStart={onDragStart}>
        {' '}
        Drag Me!
      </div>
    </div>
  );
};
export default EventComponent;
