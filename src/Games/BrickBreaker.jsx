import React, { useEffect, useState } from 'react';
import { colors } from '../assets/templateVars';
import { Col, Row } from 'react-bootstrap';
import { Circle, Layer, Line, Rect, Stage, Text } from 'react-konva';

let brickMap = [
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1],
];

const QUARTERS = [
	{
		from: 0,
		to: Math.PI / 2,
	},
	{
		from: Math.PI / 2,
		to: Math.PI,
	},
	{
		from: Math.PI,
		to: (3 * Math.PI) / 2,
	},
	{
		from: (3 * Math.PI) / 2,
		to: 2 * Math.PI,
	},
];

const getQuarter = (radian) => {
	let result;

	QUARTERS.map((x, i) => {
		if (radian > x.from && radian < x.to) {
			result = i;
		}
		return 0;
	});

	return result;
};

const checkHorizontalIntersectionWithStage = (elementX, elementWidth, stageWidth, setElementX) => {
	if (elementX + elementWidth >= stageWidth) {
		setElementX(stageWidth - elementWidth);
		return;
	}

	if (elementX <= 0) {
		setElementX(0);
	}
};

export const BrickBreaker = () => {
	const STEP = 50;
	const BOARD_WIDTH = 70;
	const BOARD_HEIGHT = 10;
	const STAGE_WIDTH = 500;
	const STAGE_HEIGHT = 500;
	const BALL_RADIUS = 10;
	const AIM_LENGTH = 100;

	const getBrickPosition = (row, i, j) => {
		return { x: (STAGE_WIDTH - ((STAGE_WIDTH - 100) / 8) * row.length) / 2 + 50 * j, y: i * 20 + 30 };
	};

	const [x, setX] = useState(STAGE_WIDTH / 2 - BOARD_WIDTH / 2);
	const [circleX, setCircleX] = useState(STAGE_WIDTH / 2);
	const [circleY, setCircleY] = useState(STAGE_HEIGHT - BOARD_HEIGHT - BALL_RADIUS);
	const [ballPushed, setBalPushed] = useState(false);
	const [started, setStarted] = useState(false);
	const [directionAngle, setDirectionAngle] = useState(90);
	const [radian, setRadian] = useState(undefined);
	const [gameOver, setGameOver] = useState(false);

	window.onkeydown = (e) => {
		switch (e.keyCode) {
			case 37:
				setX(x - STEP);
				checkHorizontalIntersectionWithStage(x - STEP, BOARD_WIDTH, STAGE_WIDTH, setX);
				if (!ballPushed) {
					setCircleX(x + BOARD_WIDTH / 2 - STEP);
				}
				break;
			case 39:
				setX(x + STEP);
				checkHorizontalIntersectionWithStage(x + STEP, BOARD_WIDTH, STAGE_WIDTH, setX);
				if (!ballPushed) {
					setCircleX(x + BOARD_WIDTH / 2 + STEP);
				}
				break;
			case 32:
				if (gameOver) {
					setGameOver(false);
					setStarted(true);
					return;
				}
				if (!started) {
					setStarted(true);
					return;
				}
				if (started) {
					setBalPushed(true);
					setRadian(directionAngle * (Math.PI / 180));
				}
				break;
			case 68:
				setDirectionAngle(directionAngle - 5);
				if (directionAngle < 15 && !ballPushed) {
					setDirectionAngle(15);
				}
				break;
			case 65:
				setDirectionAngle(directionAngle + 5);
				if (directionAngle > 165 && !ballPushed) {
					setDirectionAngle(165);
				}
				break;
			default:
				break;
		}
	};

	const move = () => {
		if (radian !== undefined) {
			let final;
			let realRadian = radian > 2 * Math.PI ? radian - 2 * Math.PI : radian < 0 ? radian + 2 * Math.PI : radian;
			switch (getQuarter(realRadian)) {
				case 0:
					if (circleX > STAGE_WIDTH) {
						console.log(realRadian, 1, QUARTERS[1]);

						setCircleX(STAGE_WIDTH - 10);
						final = QUARTERS[0].to - (radian - QUARTERS[1].from);
						setRadian(final);
					}
					if (circleY < 0) {
						console.log(realRadian, 1, QUARTERS[1]);
						setCircleY(10);
						final = QUARTERS[1].to - radian + QUARTERS[2].from;
						setRadian(final);
					}
					break;
				case 1:
					if (circleX < 0) {
						console.log(realRadian, 0, QUARTERS[0]);
						setCircleX(10);
						final = QUARTERS[0].to - radian + QUARTERS[1].from;
						setRadian(final);
					}
					if (circleY < 0) {
						console.log(realRadian, 0, QUARTERS[0]);
						setCircleY(10);
						final = QUARTERS[3].to - radian - QUARTERS[0].from;
						setRadian(final);
					}
					break;
				case 2:
					if (circleX < 0) {
						console.log(realRadian, 3, QUARTERS[3]);
						setCircleX(STAGE_WIDTH - 10);
						final = QUARTERS[3].to - radian + QUARTERS[2].from;
						setRadian(final);
					}
					if (circleX <= x + BOARD_WIDTH && circleX >= x && circleY >= STAGE_HEIGHT - 10) {
						setCircleY(STAGE_HEIGHT - 20);

						final = QUARTERS[2].to - radian + QUARTERS[1].from;
						// if ((circleX >= x) & (circleX <= (x + BOARD_WIDTH) / 6)) {
						// 	final = final + BASE_RADIAN / 6;
						// }
						// if (circleX >= (2 * (x + BOARD_WIDTH)) / 6 && circleX <= 2 * (x + BOARD_WIDTH)) {
						// 	final = final - BASE_RADIAN / 6;
						// }
						setRadian(final);
					}
					break;
				case 3:
					if (circleX > STAGE_WIDTH) {
						console.log(realRadian, 2, QUARTERS[2]);
						setCircleX(STAGE_WIDTH - 10);
						final = QUARTERS[2].to - radian + QUARTERS[3].from;
						setRadian(final);
					}
					if (circleX <= x + BOARD_WIDTH && circleX >= x && circleY >= STAGE_HEIGHT - 10) {
						setCircleY(STAGE_HEIGHT - 20);

						final = QUARTERS[3].to - radian + QUARTERS[0].from;
						// if ((circleX >= x) & (circleX <= (x + BOARD_WIDTH) / 6)) {
						// 	final = final - BASE_RADIAN / 6;
						// }
						// if (circleX >= (2 * (x + BOARD_WIDTH)) / 6 && circleX <= 2 * (x + BOARD_WIDTH)) {
						// 	final = final + BASE_RADIAN / 6;
						// }
						setRadian(final);
					}
					break;
				default:
					break;
			}

			if (circleY > STAGE_HEIGHT) {
				setGameOver(true);
			}

			setCircleX(circleX + Math.cos(realRadian));
			setCircleY(circleY - Math.sin(realRadian));
		}
	};

	const resetGame = () => {
		setTimeout(() => {
			setBalPushed(false);
			setStarted(false);
			setX(STAGE_WIDTH / 2 - BOARD_WIDTH / 2);
			setCircleX(STAGE_WIDTH / 2);
			setCircleY(STAGE_HEIGHT - BOARD_HEIGHT - BALL_RADIUS);
		}, 100);
	};

	useEffect(() => {
		if (gameOver) {
			resetGame();
		}
	}, [gameOver]);

	useEffect(() => {
		if (ballPushed) {
			move();
		}
	}, [radian, ballPushed, circleX, circleY]);

	return (
		<Row>
			<Col lg={12} className='d-flex justify-content-center mb-5'>
				<Stage width={STAGE_WIDTH} height={500}>
					<Layer>
						<Line
							points={[0, 0, STAGE_WIDTH, 0, STAGE_WIDTH, STAGE_WIDTH, 0, STAGE_WIDTH]}
							closed
							stroke={'#f4f4f4'}
							shadowColor={colors.teritariry}
							shadowBlur={5}
						/>
					</Layer>
					{started && !gameOver && (
						<>
							<Layer>
								{brickMap.map((row, i) => {
									return row.map((brick, j) => {
										return (
											<Rect
												key={j}
												{...getBrickPosition(row, i, j)}
												fill='#f4f4f4'
												width={(STAGE_WIDTH - 100) / 7}
												height={20}
												stroke={'#121212'}
												strokeWidth={4}
											/>
										);
									});
								})}
							</Layer>
							<Layer>
								<Rect
									width={BOARD_WIDTH}
									height={BOARD_HEIGHT}
									x={x}
									y={STAGE_WIDTH - BOARD_HEIGHT}
									fill={'#f4f4f4'}
								/>
								<Circle x={circleX} y={circleY} fill={'#f4f4f4'} radius={BALL_RADIUS} />
								{!ballPushed && (
									<Line
										points={[
											circleX,
											circleY,
											circleX + AIM_LENGTH * Math.cos(directionAngle * (Math.PI / 180)),
											circleY - AIM_LENGTH * Math.sin(directionAngle * (Math.PI / 180)),
										]}
										dashEnabled
										stroke={'#f4f4f4'}
										dash={[2, 2]}
									/>
								)}
							</Layer>
						</>
					)}
					{!started && !gameOver && (
						<Layer>
							<Text
								text='BRICK BREAKER'
								fontFamily='Calculator'
								fontSize={50}
								align='center'
								fill='#00FF00'
								width={400}
								x={STAGE_WIDTH / 2 - 200}
								Y={STAGE_HEIGHT / 2 - 100}
							/>
							<Text
								text='PRESS "SPACE" START'
								fontFamily='Calculator'
								fontSize={20}
								align='center'
								fill='#FFFFFF'
								width={400}
								x={STAGE_WIDTH / 2 - 200}
								Y={STAGE_HEIGHT / 2 - 20}
							/>
						</Layer>
					)}
					{gameOver && (
						<Layer>
							<Text
								text='GAME OVER'
								fontFamily='Calculator'
								fontSize={50}
								align='center'
								fill='#ff0000'
								width={400}
								x={STAGE_WIDTH / 2 - 200}
								Y={STAGE_HEIGHT / 2 - 100}
							/>
							<Text
								text='PRESS "SPACE" TO TRY AGAIN'
								fontFamily='Calculator'
								fontSize={20}
								align='center'
								fill='#FFFFFF'
								width={400}
								x={STAGE_WIDTH / 2 - 200}
								Y={STAGE_HEIGHT / 2 - 20}
							/>
						</Layer>
					)}
				</Stage>
			</Col>
		</Row>
	);
};
