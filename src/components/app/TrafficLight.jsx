import { useEffect, useState } from 'react';

import React from 'react';
import Display from './Display';

const TrafficLights = () => {
  const stages = {
    stop: { red: true, amber: false, green: false, next: 'readyToGo' },
    readyToGo: { red: true, amber: true, green: false, next: 'go' },
    go: { red: false, amber: false, green: true, next: 'readyToStop' },
    readyToStop: { red: false, amber: true, green: false, next: 'stop' }
  };

  const [stage, setStage] = useState(stages.stop);
  // eslint-disable-next-line no-console
  useEffect(() => console.log(stage), [stage]);

  return <Display {...stage} onClick={() => setStage(stages[stage.next])} />;
};

export default TrafficLights;
