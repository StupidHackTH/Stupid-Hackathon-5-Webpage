import { FunctionComponent } from "react"

const Main: FunctionComponent = ({ children }) => {
	return (
		<main className="wrapper -space">
			{children}
		</main>
	)
}

export default Main;