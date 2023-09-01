import "./App.css";
import Header from "./Mycomponents/header/Header";
import Footer from "./Mycomponents/footer/Footer";
import Todos from "./Mycomponents/todos/Todos";
import React, { useState, useEffect } from "react";
import { Addtodo } from "./Mycomponents/addtodo/Addtodo";
// import { About } from "./Mycomponents/about";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todoobj") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todoobj"));
  }
  const [todoobj, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("i am on delete", todo);
    setTodos(
      todoobj.filter((e) => {
        return e !== todo;
        localStorage.setItem("todoobj", JSON.stringify(todoobj));
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("add my to do", title, desc);
    let sno;
    if (todoobj.length === 0) {
      sno = 0;
    } else {
      sno = todoobj[todoobj.length - 1].sno + 1;
    }

    const mytodo = {
      title: title,
      desc: desc,
      sno: sno,
    };
    setTodos([...todoobj, mytodo]);
    console.log(mytodo);
    localStorage.setItem("todoobj", JSON.stringify(todoobj));
  };

  useEffect(() => {
    localStorage.setItem("todoobj", JSON.stringify(todoobj));
  }, [todoobj]);

  // const blankfield = (blanktodo)=>{

  // }
  return (
    <>
    {/* <Router> */}
        <Header />
      {/* <Switch>
         <Route exact path="/" render={() => {
          return (
            <> */}
            <Addtodo addTodo={addTodo} />
            <Todos todoobjprops={todoobj} onDelete={onDelete} />
            {/* </>
               );
               }}>
           </Route>
          <Route exact path="/about/">
          </Route>
        </Switch> */}
        {/* <About /> */}
    <Footer footer={true} />
    {/* </Router> */}

      {/* <Addtodo addTodo={addTodo} />
      <Todos todoobjprops={todoobj} onDelete={onDelete} /> */}
    </>
  );
}

export default App;

/*{ <h1>Name</h1>
<h2> {`${detail.firstname} ${detail.middlename} ${detail.lastname}`}</h2>
<h1>Age</h1>
<h2>{detail.age}</h2>
<h1>city</h1>
<h2>{detail.city}</h2>
<h1>area</h1>
<h2>{detail.area}</h2>
<div>
<img
        className="avatar"
        src={detail.imageUrl}
        alt={'Photo of ' + detail.name}
        style={{
          width: detail.imageSize,
          height: detail.imageSize
        }}
      />
      </div> }*/
//  const detail = {
//   firstname:"Hammas",
//   middlename:"shahzad",
//   lastname:"shani",
//   age:23,
//   city:"karachi",
//   area:"Saddar",
//   imageUrl: 'https://picsum.photos/200/300',
//   imageSize: 90,

// }
