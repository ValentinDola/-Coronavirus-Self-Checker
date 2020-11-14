import {_containsAnyOfSub, _containsAnyOfSubOnly, _doCheck, _ifCheckAnySymptom, _ifCheckNone} from './helpers';

describe("_doCheck", () => {
    test('adds and removes item', () => {
        expect(_doCheck([], 's1')).toContain('s1');
        expect(_doCheck(['s1'], 's1')).toEqual([]);
        expect(_doCheck(['none'], 's1')).toEqual(['s1']);
    });

    test('removes none when adds item', () => {
        expect(_doCheck(['none'], 's1')).toEqual(['s1']);
    });

    test('clears and add item if equal none', () => {
        expect(_doCheck(['s1', 's2'], 'none')).toEqual(['none']);
    });

    test('removes item if equal none and contains none', () => {
        expect(_doCheck(['s1', 's2', 'none'], 'none')).toEqual([]);
    });
});

describe("_ifCheckAnySymptom", () => {
    test("yes", () => {
        expect(_ifCheckAnySymptom(['s1'])).toBeTruthy();
    });

    test("no", () => {
        expect(_ifCheckAnySymptom(['none'])).toBeFalsy();
        expect(_ifCheckAnySymptom([])).toBeFalsy();
    });
});

describe("_ifCheckNone", () => {
    test("yes", () => {
        expect(_ifCheckNone(['none'])).toBeTruthy();
    });

    test("no", () => {
        expect(_ifCheckNone(['s1'])).toBeFalsy();
        expect(_ifCheckNone(['none', 's1'])).toBeFalsy();
        expect(_ifCheckNone([])).toBeFalsy();
    });
});

describe("_containsAnyOfSub", () => {
    test("yes", () => {
        expect(_containsAnyOfSub(['s1'], ['s2', 's1'])).toBeTruthy();
    });

    test("no", () => {
        expect(_containsAnyOfSub(['s1'], ['s2'])).toBeFalsy();
        expect(_containsAnyOfSub([], ['s2'])).toBeFalsy();
        expect(_containsAnyOfSub([], [])).toBeFalsy();
        expect(_containsAnyOfSub(['s1'], [])).toBeFalsy();
    });
});

describe("_containsAnyOfSubOnly", () => {
    test("yes", () => {
        expect(_containsAnyOfSubOnly(['s1'], ['s2', 's1'])).toBeTruthy();
    });

    test("no", () => {
        expect(_containsAnyOfSubOnly(['s1', 's2'], ['s2'])).toBeFalsy();
        expect(_containsAnyOfSubOnly([], ['s2'])).toBeFalsy();
        expect(_containsAnyOfSubOnly([], [])).toBeFalsy();
        expect(_containsAnyOfSubOnly(['s1'], [])).toBeFalsy();
        expect(_containsAnyOfSubOnly(['s1'], ['s2', 's3'])).toBeFalsy();
    });
});