'use strict';

import { tableAreaArmByCount } from './modules/tables/tableAreaArmByCount';
import { tableAreaArmByStep } from './modules/tables/tableAreaArmByStep';
import { configAreaArmByCount } from './modules/config/configAreaArmByCount';
import { configAreaArmByStep } from './modules/config/configAreaArmByStep';
import { calculateAreaArmByCountOrStep } from './modules/functions/calculateAreaArmByCountOrStep';
import { lapAnchorArm } from './modules/tables/tableLapAnchorArm';


calculateAreaArmByCountOrStep(configAreaArmByCount, tableAreaArmByCount);

calculateAreaArmByCountOrStep(configAreaArmByStep, tableAreaArmByStep);