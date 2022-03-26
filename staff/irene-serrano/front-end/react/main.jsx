const fruits = ["apple", "melon", "cherry", "banana", "pear"];

var root = document.querySelector("#root");

var h1 = <h1>Hola</h1>;


var List = function () {
  return (
    <ul>
      {fruits.forEach((element) => {
        <li>{element}</li>;
      })}

      {/*  <li>apple</li>
        <li>melon</li>
        <li>cherry</li>
        <li>banana</li> */}
    </ul>
  );
};

ReactDOM.render([h1, <List />], root);
