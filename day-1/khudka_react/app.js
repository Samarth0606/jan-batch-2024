// let rootEl = document.getElementById('root');

// let h1 = document.createElement('h1');
// h1.innerHTML = "Welcome to react from DOM"

// rootEl.append(h1);


// // -----------------------------------------

// let rootEl = document.getElementById('root');

// // let h1 = React.createElement('h1' , null , 'Welcome to react from cdn')
// let h1 = React.createElement('h1' , {id:"sam", className:"vohra"} , 'Welcome to react from cdn')

// // ReactDOM.render(h1,rootEl) 17
// let root = ReactDOM.createRoot(rootEl) //18
// root.render(h1);


// // -----------------------------------------

// let rootEl = document.getElementById('root');

// let h1 = React.createElement('div' , {id:"sam", className:"vohra"} , 
//             React.createElement('div' , null ,
//                 React.createElement('h1' , null , "hello from nesting")
//             )
//         )

// let root = ReactDOM.createRoot(rootEl) 
// root.render(h1);



// -----------------------------------------

// let rootEl = document.getElementById('root');

// let h1 = React.createElement('div' , {id:"sam", className:"vohra"} , 
//             React.createElement('div' , null ,[
//                 React.createElement('h1' , null , "hello from nesting 1"),
//                 React.createElement('h1' , null , "hello from nesting 2"),
//             ]
//             )
//         )

// let root = ReactDOM.createRoot(rootEl) 
// root.render(h1);



// -----------------------------------------


let rootEl = document.getElementById('root');

let h1 = <div>
            <div>
                <h1>hello from jsx </h1>
            </div>
        </div>

let root = ReactDOM.createRoot(rootEl) 
root.render(h1);

