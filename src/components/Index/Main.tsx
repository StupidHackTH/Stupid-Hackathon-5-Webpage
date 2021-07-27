import { FunctionComponent } from "react"

const Main: FunctionComponent = ({ children }) => {
	return (
		<main className="wrapper wrapper__space">
			{children}
		</main>
	)
}

export default Main;