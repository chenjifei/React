import { render } from "./toy-react";
import { MyComponnet } from "./myComponent";

render(
  <MyComponnet id="wrapper" class="wrapper">
    <div>123</div>
    <div>456</div>
    <div>789</div>
    123
  </MyComponnet>,
  document.body
);
