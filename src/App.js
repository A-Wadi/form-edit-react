import './App.css';
import React from 'react';

class Artical extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: localStorage.getItem('title') ? localStorage.getItem('title') : "No Title in local Storage! :(",
      body: localStorage.getItem('body') ? localStorage.getItem('body') : "No Body in local Storage! :("
    }
  }

  click = () => {
    const valueTitle = document.getElementById("title").value,
      valueBody = document.getElementById("body").value;
    localStorage.setItem("title", valueTitle);
    localStorage.setItem("body", valueBody);
    this.change()
  }

  change = () => (
    this.setState({
      title: localStorage.getItem('title'),
      body: localStorage.getItem('body')
    })
  )

  render() {
    return (
      <div className="all">

        <h1>Articale From Local Storage!</h1>
        <hr />
        <h2>{this.state.title}</h2>
        <h4>{this.state.body}</h4>
        <hr />
        {/* <form> */}
        <input id="title" type="text" />
        <br />
        <textarea id="body" cols="30" rows="10"></textarea>
        <br />
        <button onClick={this.click}>Save</button>
        {/* </form> */}

      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <Artical />
      {/* <Art /> */}
      {/* <img src={require('./logo.svg').default} width={50} alt=""/>
      <section className="sectionBlogs">
        {aa.map((ele, index) => (
          <DD key={'blog' + index} title={ele.titleBlog} body={ele.bodyBlog} author={ele.authorBlog} />
        ))}
      </section> */}
    </div>
  );
}

export default App;
