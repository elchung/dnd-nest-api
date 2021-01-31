import { InfoDto } from "src/dto/general/Info.dto";
import { OptionsDto } from "src/dto/general/Options.dto";
import { InfoEntity } from "src/entity/general/Info.entity";
import { OptionsEntity } from "src/entity/general/Options.entity";

export class CommonMapper {
  optionsDtoToEntity(optionsDto: OptionsDto): OptionsEntity {
    const optionsEntity = new OptionsEntity();
    optionsEntity.choose = optionsDto.choose;
    optionsEntity.from = optionsDto.from;

    return optionsEntity;
  }

  infoDtoToEntity(infoDto: InfoDto): InfoEntity {
    const infoEntity = new InfoEntity();
    infoEntity.description = infoDto.description;
    infoEntity.name = infoDto.name;

    return infoEntity;
  }
}