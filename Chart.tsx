import React, { useState } from 'react';
import {VictoryChart, VictoryStack, VictoryGroup, VictoryArea, VictoryPortal, VictoryScatter} from 'victory';
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

export const Chart = () => {
  const [data, setData] = useState(generateData())
  const [stacked, setStacked] = useState(true);

  return (
      <div>
        <button
          style={{ marginRight: '5px' }}
          onClick={() => {
            setStacked((val) => !val);
          }}
        >
          Stacked? ({stacked ? "true": "false"})
        </button>
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
        <VictoryChart width={400} height={400}>
          <VictoryStack colorScale={["#45227B", "#6E36C5", "#8A43F6", "#A06DEE"]}>
            <VictoryGroup
              data={data[0]}
            >
              <VictoryArea/>
              <VictoryPortal>
                <VictoryScatter
                  size={1.4}
                  style={{ data: { fill: "15227B" } }}
                />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={data[1]}
            >
              <VictoryArea/>
              <VictoryPortal>
                <VictoryScatter
                  size={1.4}
                  style={{ data: { fill: "15227B" } }}
                />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={data[2]}
            >
              <VictoryArea/>
              <VictoryPortal>
                <VictoryScatter
                  size={1.4}
                  style={{ data: { fill: "15227B" } }}
                />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={data[3]}
            >
              <VictoryArea/>
              <VictoryPortal>
                <VictoryScatter
                  size={1.4}
                  style={{ data: { fill: "15227B" } }}
                />
              </VictoryPortal>
            </VictoryGroup>
            
          </VictoryStack>
        </VictoryChart>
      </div>
    );
}
