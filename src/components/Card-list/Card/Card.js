const Card = (props) => {
  return (
    <div class="container">
      <div class="card">
        <div class="card-body">
          <p class="card-text">
            {props.suit} <span>{props.value}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
