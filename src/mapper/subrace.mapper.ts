import { SubraceDto } from "src/dto/subraces/Subrace.dto";
import { SubraceEntity } from "src/entity/subraces/Subrace.entity";

export class SubraceMapper {
  subraceDtoToEntity(subraceDto: SubraceDto): SubraceEntity {
    const subraceEntity = new SubraceEntity();

    // todo fill in

    return subraceEntity;
  }

  subraceEntityToDto(subraceEntity: SubraceEntity): SubraceDto {
    const subraceDto = new SubraceDto();

    // todo fill in

    return subraceDto;
  }
}
