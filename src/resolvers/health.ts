import { Query, Resolver } from 'type-graphql';

@Resolver()
export class HealthResolver {
  @Query(() => String)
  healthCheck() {
    return `uptime: ${process.uptime()}`;
  }
}
