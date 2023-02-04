'use strict';

import { tableAreaArmByCount } from './modules/tables/tableAreaArmByCount';
import { tableAreaArmByStep } from './modules/tables/tableAreaArmByStep';
import { configAreaArmByCount } from './modules/config/configAreaArmByCount';
import { configAreaArmByStep } from './modules/config/configAreaArmByStep';
import { tableLapAnchorArm } from './modules/tables/tableLapAnchorArm';
import { configLapAnchorArm} from './modules/config/configLapAnchorArm'; 
import { calculateAreaArmByCountOrStep } from './modules/functions/calculateAreaArmByCountOrStep';
import { calculateLapAnchorArm } from './modules/functions/calculateLapAnchorArm';


calculateAreaArmByCountOrStep(configAreaArmByCount, tableAreaArmByCount);

calculateAreaArmByCountOrStep(configAreaArmByStep, tableAreaArmByStep);

calculateLapAnchorArm(tableLapAnchorArm, configLapAnchorArm);