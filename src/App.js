import React from "react"
import { render } from "react-dom"

const Pet = props => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, props.name),
		React.createElement("h2", {}, props.animal),
		React.createElement("h2", {}, props.breed),
	])
}

// function component
// const App = () => {
// class component
class App extends React.Component {
	handleTitleClick() {
		alert("you clicked the title")
	}
	render() {
		// {} is for attributes
		return React.createElement("div", {}, [
			React.createElement(
				"h1",
				{ onClick: this.handleTitleClick },
				"Adopt Me!"
			),
			// If you're creating a component, you pass in props instead of attributes
			React.createElement(Pet, {
				name: "Luna",
				animal: "Dog",
				breed: "Havanese",
			}),
			React.createElement(Pet, {
				name: "Pepper",
				animal: "Bird",
				breed: "Cockatiel",
			}),
			React.createElement(Pet, {
				name: "Doink",
				animal: "Cat",
				breed: "Mix",
			}),
		])
	}
}

render(React.createElement(App), document.getElementById("root"))
