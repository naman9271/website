import type { Expense, Link } from '../../types/tests/fixtures/finance-data';

export const expensesYaml = 'expenses:\n  - name: Test Expense\n    amount: 100';
export const expensesLinkYaml = 'links:\n  - name: Test Link\n    url: http://asyncapi.com';
export const expensesjson = { expenses: [{ name: 'Test Expense', amount: 100 }] as Expense[] };
export const expensesLinkjson = { links: [{ name: 'Test Link', url: 'http://asyncapi.com' }] as Link[] };
