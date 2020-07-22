import React, { Component } from "react"

class Accordion extends Component {
	static defaultProps = {
		sections: [
			{
				title: "Section 1",
				content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			},
			{
				title: "Section 2",
				content:
					"Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
			},
			{
				title: "Section 3",
				content:
					"Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
			},
		],
	}
	state = {
		expanded: false,
	}
	render() {
		console.log(this.props)
		let sections = this.props.sections.map((item) => {
			let content = ""
			if (this.state.expanded === item.title) {
				content = <p>{item.content}</p>
			}
			return (
				<li>
					{item.title}
					<button onClick={(e) => this.setState({ expanded: item.title })}>
						+
					</button>{" "}
					{content}
				</li>
			)
		})
		return <ul>{sections}</ul>
	}
}

export default Accordion
