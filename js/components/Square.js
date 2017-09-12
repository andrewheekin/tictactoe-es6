function Square(props) {
  return `<button class="square" onclick='${props.onClick}'>${props.value}</button>`;
}

  // return `<button class="square" onclick='() => ${props.onClick}'>${props.value}</button>`;

export default Square;