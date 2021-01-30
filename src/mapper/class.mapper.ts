import { ClassDto as ClassDto } from "src/dto/class/Class.dto";
import { ClassEntity } from "src/entity/classes/Class.entity";

export class ClassMapper {
  classDtoToEntity(classDto: ClassDto): ClassEntity {
    const classEntity = new ClassEntity();

    // todo fill in
    
    return classEntity;
  }

  classEntityToDto(classEntity: ClassEntity): ClassDto {
    const classDto = new ClassDto();

    // todo fill in
    
    return classDto;
  }
}
