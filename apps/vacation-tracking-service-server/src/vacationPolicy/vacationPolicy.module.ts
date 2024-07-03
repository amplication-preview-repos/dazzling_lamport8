import { Module } from "@nestjs/common";
import { VacationPolicyModuleBase } from "./base/vacationPolicy.module.base";
import { VacationPolicyService } from "./vacationPolicy.service";
import { VacationPolicyController } from "./vacationPolicy.controller";
import { VacationPolicyResolver } from "./vacationPolicy.resolver";

@Module({
  imports: [VacationPolicyModuleBase],
  controllers: [VacationPolicyController],
  providers: [VacationPolicyService, VacationPolicyResolver],
  exports: [VacationPolicyService],
})
export class VacationPolicyModule {}
