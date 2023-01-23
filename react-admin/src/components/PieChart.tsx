import React from 'react';
import { Typography, useTheme } from "@mui/material";
// import { ResponsivePie } from '@nivo/pie';
import { tokens } from "../theme";
// import { mockBarData as data } from "../data/mockData";

export const PieChart: React.FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<>
			<Typography color={colors.redAccent[500]} >
				Simple Pie Chart But the Library is Not Compatible with React 18.2.0
			</Typography>
			{/* <ResponsivePie
				data={data}
				theme={{
					axis: {
						domain: {
							line: {
								stroke: colors.gray[100]
							}
						},
						legend: {
							text: {
								fill: colors.gray[100]
							}
						},
						ticks: {
							line: {
								stroke: colors.gray[100],
								strokeWidth: 1
							},
							text: {
								fill: colors.gray[100]
							}
						}
					},
					legends:{
						text:{
							fill: colors.gray[100]
						}
					}
				}}
				margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
				innerRadius={0.5}
				padAngle={0.7}
				cornerRadius={3}
				activeOuterRadiusOffset={8}
				borderWidth={1}
				borderColor={{
					from: 'color',
					modifiers: [
						[
							'darker',
							0.2
						]
					]
				}}
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsTextColor={colors.gray[100]}
				arcLinkLabelsThickness={2}
				arcLinkLabelsColor={{ from: 'color' }}
				enableArcLabels={false}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor={{
					from: 'color',
					modifiers: [
						[
							'darker',
							2
						]
					]
				}}
				defs={[
					{
						id: 'dots',
						type: 'patternDots',
						background: 'inherit',
						color: 'rgba(255, 255, 255, 0.3)',
						size: 4,
						padding: 1,
						stagger: true
					},
					{
						id: 'lines',
						type: 'patternLines',
						background: 'inherit',
						color: 'rgba(255, 255, 255, 0.3)',
						rotation: -45,
						lineWidth: 6,
						spacing: 10
					}
				]}
				legends={[
					{
						anchor: 'bottom',
						direction: 'row',
						justify: false,
						translateX: 0,
						translateY: 56,
						itemsSpacing: 0,
						itemWidth: 100,
						itemHeight: 18,
						itemTextColor: '#999',
						itemDirection: 'left-to-right',
						itemOpacity: 1,
						symbolSize: 18,
						symbolShape: 'circle',
						effects: [
							{
								on: 'hover',
								style: {
									itemTextColor: '#000'
								}
							}
						]
					}
				]}
			/> */}
		</>
	);
};