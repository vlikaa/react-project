﻿// animation was стырена, я не шарю за svg
import "./Loader.css";

const Loader = () => {
	return (
		<div className="load-container">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
				width="200"
				height="200"
				style={{shapeRendering: 'auto', display: 'block', background: '#000'}}
			>
				<g>
					<path
						style={{transform: 'scale(0.8)', transformOrigin: '50px 50px'}}
						strokeLinecap="round"
						d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
						strokeDasharray="42.76482137044271 42.76482137044271"
						strokeWidth="8"
						stroke="#FF9900"
						fill="none"
					>
						<animate
							values="0;256.58892822265625"
							keyTimes="0;1"
							dur="1s"
							repeatCount="indefinite"
							attributeName="stroke-dashoffset"
						/>
					</path>
				</g>
			</svg>
		</div>
	);
}

export default Loader;