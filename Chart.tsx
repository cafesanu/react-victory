import React, { useState } from 'react';
import {VictoryChart, VictoryStack, VictoryGroup, VictoryLine, VictoryArea, VictoryPortal, VictoryScatter, VictoryVoronoiContainer, VictoryTooltip} from 'victory';
import { random } from 'faker';

const random0to60 = () => random.number({ min: 0, max: 60 });

const generateSingleData = (num = 12) => {
  const d = [...Array(num)]
    .fill(1)
    .map((_, i) => ({
      x: `${i+1}`,
      y: random0to60()
    }))
  return d;
};

const generateData = (num = 12) => {
  return [
    generateSingleData(num),
    generateSingleData(num),
    generateSingleData(num),
    generateSingleData(num),
  ]
};

const Stacked = ({children}) => {
  return (
    <VictoryStack colorScale={["#45227B", "#6E36C5", "#8A43F6", "#A06DEE"]}>
      {children}
    </VictoryStack>
  );
}

export const Chart = () => {
  const [data, setData] = useState(generateData())
  const [stacked, setStacked] = useState(true);

  const internalChart = (
    <div>
      <VictoryGroup
        data={data[0]}
      >
        {stacked ? <VictoryArea/> : <VictoryLine/>}
        <VictoryPortal>
          <VictoryScatter
            size={2}
            style={{ data: { fill: "15227B" } }}
          />
        </VictoryPortal>
      </VictoryGroup>
      <VictoryGroup
        data={data[1]}
      >
        {stacked ? <VictoryArea/> : <VictoryLine/>}
        <VictoryPortal>
          <VictoryScatter
            size={2}
            style={{ data: { fill: "15227B" } }}
          />
        </VictoryPortal>
      </VictoryGroup>
      <VictoryGroup
        data={data[2]}
      >
        {stacked ? <VictoryArea/> : <VictoryLine/>}
        <VictoryPortal>
          <VictoryScatter
            size={2}
            style={{ data: { fill: "15227B" } }}
          />
        </VictoryPortal>
      </VictoryGroup>
      <VictoryGroup
        data={data[3]}
      >
        {stacked ? <VictoryArea/> : <VictoryLine/>}
        <VictoryPortal>
          <VictoryScatter
            size={2}
            style={{ data: { fill: "15227B" } }}
          />
        </VictoryPortal>
      </VictoryGroup>
    </div>
  );

  return (
      <div>
        <h1>Victory</h1>
        <h3>Couldn't find fast how to not stack graphs, but I'm sure it can be done</h3>
        <button
          style={{ marginRight: '5px' }}
          onClick={() => {
            setData(generateData(12));
          }}
        >
          12 points (for months)
        </button>
        <button
          style={{ marginRight: '5px' }}
          onClick={() => {
            setData(generateData(24));
          }}
        >
          24 points (for day)
        </button>
        <button
          style={{ marginRight: '5px' }}
          onClick={() => {
            setData(generateData(31));
          }}
        >
          31 points (for month)
        </button>
        <VictoryChart
          width={900}
          height={400}
          animate={{ duration: 400 }}
        >

          <VictoryStack colorScale={["#45227B", "#6E36C5", "#8A43F6", "#A06DEE"]}>
            <VictoryGroup
              data={data[0]}
            >
              {stacked ? <VictoryArea/> : <VictoryLine/>}
              <VictoryPortal>
                <VictoryScatter
                  size={2}
                  style={{ data: { fill: "15227B" } }}
                />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={data[1]}
            >
              {stacked ? <VictoryArea/> : <VictoryLine/>}
              <VictoryPortal>
                <VictoryScatter
                  size={2}
                  style={{ data: { fill: "15227B" } }}
                />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={data[2]}
            >
              {stacked ? <VictoryArea/> : <VictoryLine/>}
              <VictoryPortal>
                <VictoryScatter
                  size={2}
                  style={{ data: { fill: "15227B" } }}
                />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={data[3]}
            >
              {stacked ? <VictoryArea/> : <VictoryLine/>}
              <VictoryPortal>
                <VictoryScatter
                  size={2}
                  style={{ data: { fill: "15227B" } }}
                />
              </VictoryPortal>
            </VictoryGroup>
          </VictoryStack>
        </VictoryChart>
      </div>
    );
}
