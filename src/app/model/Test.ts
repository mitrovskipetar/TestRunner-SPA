import { TestSuiteHasTest } from './TestSuiteHasTest';
import { TestData } from './TestData';

export class Test {
    testId: number;
    testName: string;
    testSuiteHasTest: Set<TestSuiteHasTest>;
    testData: TestData;
}