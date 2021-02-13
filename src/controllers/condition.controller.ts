import { ApiTags } from "@nestjs/swagger";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import {ConditionDto} from "../dto/general/Condition.dto";
import {ConditionService} from "../service/condition.service";

@ApiTags("condition")
@Controller("condition")
export class ConditionController {
  constructor(private readonly conditionService: ConditionService) {}

  @Get("/:conditionName")
  async getConditionData(
    @Param("conditionName") name: string
  ): Promise<ConditionDto> {
    return await this.conditionService.getConditionByName(name);
  }

  @Get()
  async getAllConditions(): Promise<ConditionDto[]> {
    return await this.conditionService.getAllConditions();
  }

  @Put("/:conditionName")
  async updateConditionById(
    @Param("conditionName") name: string,
    @Body() updatedCondition: ConditionDto
  ): Promise<void> {
    return await this.conditionService.updateConditionByName(
      name,
      updatedCondition
    );
  }

  @Post()
  async createCondition(@Body() newCondition: ConditionDto): Promise<void> {
    return await this.conditionService.createCondition(newCondition);
  }

  @Delete("/:conditionName")
  async deleteCondition(@Param("conditionName") name: string): Promise<void> {
    return await this.conditionService.deleteCondition(name);
  }
}
