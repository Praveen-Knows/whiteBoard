function Menubar() {
  return (
    <div className="menuBar">
      <div>
        <button className="pen-button">
          <i class="fas fa-pen"></i>
        </button>
      </div>
      <div className="color">
        <button className="red"></button>
        <button className="blue"></button>
        <button className="green"></button>
        <button className="yellow"></button>
        <button className="black"></button>
      </div>
      <div className="eraser">
        <button className="eraser-button-1"></button>
        <button className="eraser-button-2"></button>
        <button className="eraser-button-3"></button>
      </div>
      <div className="line-thickness">
        <button className="line-thickness-1"></button>
        <button className="line-thickness-2"></button>
        <button className="line-thickness-3"></button>
      </div>
    </div>
  );
}

export default Menubar;
