import { TestSuiteHasTest } from './TestSuiteHasTest';
export class TestSuite {
    suiteId: number;
    suiteName: string;
    testSuiteHasTests: Set<TestSuiteHasTest>;
}