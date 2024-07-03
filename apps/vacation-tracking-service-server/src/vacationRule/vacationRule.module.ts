import { Module } from "@nestjs/common";
import { VacationRuleModuleBase } from "./base/vacationRule.module.base";
import { VacationRuleService } from "./vacationRule.service";
import { VacationRuleController } from "./vacationRule.controller";
import { VacationRuleResolver } from "./vacationRule.resolver";

@Module({
  imports: [VacationRuleModuleBase],
  controllers: [VacationRuleController],
  providers: [VacationRuleService, VacationRuleResolver],
  exports: [VacationRuleService],
})
export class VacationRuleModule {}
