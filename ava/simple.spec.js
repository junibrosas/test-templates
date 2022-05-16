/**
 * To run this test suite independently:
 * npx cross-env NODE_ENV=test ava ./ava/simple.spec.js
 */
import test from "ava";

test.serial("Sample test", async (t) => {
  t.plan(1);

  // arrange

  // act

  // assert

  t.is(1, 1);
});
