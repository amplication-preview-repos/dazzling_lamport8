/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { VacationRule } from "./VacationRule";
import { VacationRuleCountArgs } from "./VacationRuleCountArgs";
import { VacationRuleFindManyArgs } from "./VacationRuleFindManyArgs";
import { VacationRuleFindUniqueArgs } from "./VacationRuleFindUniqueArgs";
import { CreateVacationRuleArgs } from "./CreateVacationRuleArgs";
import { UpdateVacationRuleArgs } from "./UpdateVacationRuleArgs";
import { DeleteVacationRuleArgs } from "./DeleteVacationRuleArgs";
import { VacationRuleService } from "../vacationRule.service";
@graphql.Resolver(() => VacationRule)
export class VacationRuleResolverBase {
  constructor(protected readonly service: VacationRuleService) {}

  async _vacationRulesMeta(
    @graphql.Args() args: VacationRuleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [VacationRule])
  async vacationRules(
    @graphql.Args() args: VacationRuleFindManyArgs
  ): Promise<VacationRule[]> {
    return this.service.vacationRules(args);
  }

  @graphql.Query(() => VacationRule, { nullable: true })
  async vacationRule(
    @graphql.Args() args: VacationRuleFindUniqueArgs
  ): Promise<VacationRule | null> {
    const result = await this.service.vacationRule(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => VacationRule)
  async createVacationRule(
    @graphql.Args() args: CreateVacationRuleArgs
  ): Promise<VacationRule> {
    return await this.service.createVacationRule({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => VacationRule)
  async updateVacationRule(
    @graphql.Args() args: UpdateVacationRuleArgs
  ): Promise<VacationRule | null> {
    try {
      return await this.service.updateVacationRule({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => VacationRule)
  async deleteVacationRule(
    @graphql.Args() args: DeleteVacationRuleArgs
  ): Promise<VacationRule | null> {
    try {
      return await this.service.deleteVacationRule(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
