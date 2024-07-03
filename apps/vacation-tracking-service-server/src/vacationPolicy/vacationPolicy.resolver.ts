import * as graphql from "@nestjs/graphql";
import { VacationPolicyResolverBase } from "./base/vacationPolicy.resolver.base";
import { VacationPolicy } from "./base/VacationPolicy";
import { VacationPolicyService } from "./vacationPolicy.service";

@graphql.Resolver(() => VacationPolicy)
export class VacationPolicyResolver extends VacationPolicyResolverBase {
  constructor(protected readonly service: VacationPolicyService) {
    super(service);
  }
}
