import {
  type GraphQLErrorOptions,
  GraphQLScalarType,
  GraphQLError,
  Kind,
} from 'graphql';

export const NonNegativeIntResolver = new GraphQLScalarType({
  name: 'NonNegativeInt',
  description: 'Integers that will have a value of 0 or more.',
  serialize(value) {
    return processValue(value);
  },
  parseValue(value) {
    return processValue(value);
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.INT) {
      throw createGraphQLError(
        `Can only validate integers as non-negative integers but got a: ${ast.kind}`,
        {
          nodes: ast,
        }
      );
    }
    return processValue(ast.value);
  },
});

function processValue(value) {
  const parsedValue = parseInt(value, 10);
  if (!Number.isInteger(parsedValue)) {
    throw createGraphQLError(`Value is not an integer: ${parsedValue}`);
  }
  if (parsedValue < 0) {
    throw createGraphQLError(`${parsedValue} is less than 0`);
  }
  return parsedValue;
}

function createGraphQLError(
  message: string,
  options?: GraphQLErrorOptions
): GraphQLError {
  return new GraphQLError(message, options);
}
