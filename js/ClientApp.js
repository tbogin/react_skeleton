/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1
var h2 = React.DOM.h2

// var MyTitle = React.createClass({
//   render () {
//     return (
//       div(null,
//         h1(null, 'Check out this component!')
//       )
//     )
//   }
// })

var MyTitle = function(props) {
  return (
      div(null,
          h1(null, props.title)
        )
    )
}

var BananaTitle = React.createClass({
  render () {
    return (
      div(null,
        h2(null, "Hello, banana!")
        )
      )
  }
})

var CE = React.createElement

var MyFirstComponent = (
  div(null,
    CE(MyTitle, {title: "Woo!"}),
    React.createElement(BananaTitle, null),
    React.createElement(MyTitle, {title: "Yas"})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))