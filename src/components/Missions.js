import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missions.map((mission, index) => (
          <MissionCard
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
            key={ index }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
