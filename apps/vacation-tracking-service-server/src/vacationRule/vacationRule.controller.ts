import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VacationRuleService } from "./vacationRule.service";
import { VacationRuleControllerBase } from "./base/vacationRule.controller.base";

@swagger.ApiTags("vacationRules")
@common.Controller("vacationRules")
export class VacationRuleController extends VacationRuleControllerBase {
  constructor(protected readonly service: VacationRuleService) {
    super(service);
  }
}
