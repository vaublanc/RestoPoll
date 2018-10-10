import {NatureEnum} from '../../../shared/nature-enum';

export interface Poll {
  id: string;
  name: string;
  nature: NatureEnum;
}
