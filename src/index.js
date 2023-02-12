'use strict';

import './css/style.css';

import { tableAreaArmByCount } from './modules/tables/tableAreaArmByCount';
import { tableAreaArmByStep } from './modules/tables/tableAreaArmByStep';
import { configAreaArmByCount } from './modules/config/configAreaArmByCount';
import { configAreaArmByStep } from './modules/config/configAreaArmByStep';
import { tableLapAnchorArm } from './modules/tables/tableLapAnchorArm';
import { configLapAnchorArm} from './modules/config/configLapAnchorArm'; 
import { calculateAreaArmByCountOrStep } from './modules/functions/calculateAreaArmByCountOrStep';
import { calculateLapAnchorArm } from './modules/functions/calculateLapAnchorArm';

import { configAverageRCArea } from './modules/config/configAverageRCArea';
import { calculateAverageRCArea } from './modules/functions/calculateAverageRCArea';


calculateAreaArmByCountOrStep(configAreaArmByCount, tableAreaArmByCount);

calculateAreaArmByCountOrStep(configAreaArmByStep, tableAreaArmByStep);

// calculateLapAnchorArm(tableLapAnchorArm, configLapAnchorArm);

calculateAverageRCArea(configAverageRCArea);