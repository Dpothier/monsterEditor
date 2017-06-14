'use strict';

import React from 'react';

require('styles/monsterEditor/MonsterStatblock.css');

class MonsterStatblockComponent extends React.Component {
  render() {
    const monster = this.props.monster;
    return (
      <stat-block>
        <creature-heading>
          <h1>{monster.name}</h1>
          <h2>{monster.size} {monster.type}, {monster.alignement}</h2>
        </creature-heading>

        <top-stats>
          <property-line>
            <h4>Armor Class</h4>
            <p>18 (natural armor)</p>
          </property-line>
          <property-line>
            <h4>Hit Points</h4>
            <p>33 (6d8 + 6)</p>
          </property-line>
          <property-line>
            <h4>Speed</h4>
            <p>25ft</p>
          </property-line>

          <abilities-block data-str="14"
                           data-dex="11"
                           data-con="13"
                           data-int="1"
                           data-wis="3"
                           data-cha="1"></abilities-block>

          <property-line>
            <h4>Damage Immunities</h4>
            <p>poison, psychic</p>
          </property-line>
          <property-line>
            <h4>Condition Immunities</h4>
            <p>blinded, charmed, deafened, exhaustion, frightened, paralyzed,
              petrified, poisoned</p>
          </property-line>
          <property-line>
            <h4>Senses</h4>
            <p>blindsight 60 ft. (blind beyond this radius), passive Perception 6</p>
          </property-line>
          <property-line>
            <h4>Languages</h4>
            <p>—</p>
          </property-line>
          <property-line>
            <h4>Challenge</h4>
            <p>1 (200 XP)</p>
          </property-line>
        </top-stats>

        <property-block>
          <h4>Antimagic Susceptibility.</h4>
          <p>The armor is incapacitated while in the area of an <i>antimagic
            field</i>.  If targeted by <i>dispel magic</i>, the armor must succeed
            on a Constitution saving throw against the caster’s spell save DC or
            fall unconscious for 1 minute.</p>
        </property-block>
        <property-block>
          <h4>False Appearance.</h4>
          <p>While the armor remains motionless, it is indistinguishable from a
            normal suit of armor.</p>
        </property-block>

        <h3>Actions</h3>

        <property-block>
          <h4>Multiattack.</h4>
          <p>The armor makes two melee attacks.</p>
        </property-block>

        <property-block>
          <h4>Slam.</h4>
          <p><i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one target.
            <i>Hit:</i> 5 (1d6 + 2) bludgeoning damage.</p>
        </property-block>
      </stat-block>
    );
  }
}

MonsterStatblockComponent.displayName = 'MonsterEditorMonsterStatblockComponent';

// Uncomment properties you need
// MonsterStatblockComponent.propTypes = {};
// MonsterStatblockComponent.defaultProps = {};

export default MonsterStatblockComponent;
