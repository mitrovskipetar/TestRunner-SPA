import { Test } from './Test';
import { TestSuite } from './TestSuite';

export class TestSuiteHasTest {
    id: number;
    suite: TestSuite;
    test: Test;
    suitePosition: number;
}