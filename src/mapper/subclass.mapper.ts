import { SubclassDto } from "src/dto/subclasses/Subclass.dto";
import { SubclassEntity } from "src/entity/subclasses/Subclass.entity";

export class SubclassMapper {
  subclassDtoToEntity(subclassDto: SubclassDto): SubclassEntity {
    const subclassEntity = new SubclassEntity();

    // todo fill in
    
    return subclassEntity;
  }

  subclassEntityToDto(subclassEntity: SubclassEntity): SubclassDto {
    const subclassDto = new SubclassDto();

    // todo fill in
     
    return subclassDto;
  }
}
