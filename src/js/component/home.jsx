import React, { useState, useEffect } from "react";

import Counter from "./counter";

const Home = () => {
	const [increase, setIncrease] = useState(0);

	useEffect(() =>{
		setInterval( () => {
			setIncrease((prev) => prev + 1);
			console.log(increase)
		}, 1000)

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="container d-flex justify-content-center mt-5">
			<Counter number = {<i className="fa-regular fa-clock"></i>}/>
			<Counter number={Math.floor(increase / 100000) % 100000} />
            <Counter number={Math.floor(increase / 10000) % 10000} />
            <Counter number={Math.floor(increase / 1000) % 1000} />
            <Counter number={Math.floor(increase / 100) % 100} />
            <Counter number={Math.floor(increase / 10) % 10} />
            <Counter number={Math.floor(increase % 10)} />
		</div>
	);
};

export default Home;
