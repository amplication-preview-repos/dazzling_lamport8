import * as graphql from "@nestjs/graphql";
import { VacationRuleResolverBase } from "./base/vacationRule.resolver.base";
import { VacationRule } from "./base/VacationRule";
import { VacationRuleService } from "./vacationRule.service";

@graphql.Resolver(() => VacationRule)
export class VacationRuleResolver extends VacationRuleResolverBase {
  constructor(protected readonly service: VacationRuleService) {
    super(service);
  }
}
