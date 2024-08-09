
// ---heading ----

// const heading = React.createElement("h1",{},"hellow world");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);



// -----hoe create nested tags in react----
const parent = React.createElement("div","id:parent", React.createElement("div","id:child",
   [React.createElement("h1",{},"this is nested h1 tag"),React.createElement("h2",{},"this is nested h2 tag")] 
));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

