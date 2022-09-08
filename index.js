console.log("Hi React!");
function MyDiv() {
    return (
        <div><p className="p">My Custom component</p></div>);
}
function NewDiv() {
    return (
        <div><p>Render below "My custom component"</p></div>
    )
}
// wrap elements in one parent element
ReactDOM.render(
    <div>
        <MyDiv />
        <NewDiv />
    </div>,
    document.getElementById('container')
);

// using jsx
let main = document.getElementById("container");
let text = <h1>Using Jsx</h1>;
ReactDOM.render(text, main);
// text is treated as a regular javascript object
console.log(text);

// wrap components into one variable
let parent = (
    <div>
        <MyDiv />
        <NewDiv />
    </div>
)
ReactDOM.render(parent, main)