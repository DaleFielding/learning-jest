const buttonClick = require("../button");

beforeEach(() => {
  document.body.innerHTML = "<p id='par'></p>";

});

describe("DOM tests", () => {
  test("expects p content to change", () => {
    buttonClick(); //this will make the button click automatically
    expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
  });
});
