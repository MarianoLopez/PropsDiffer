export const getMissingProps = (propsA, propsB) => {
    let array = validateProps(propsA, propsB) ?
        [...propsB.keys()]
            .filter(prop => !propsA.has(prop))
            .sort()
            .map(prop => [prop, propsB.get(prop)])
        : [];
    return new Map(array);
};

export const getExtraProps = (propsA, propsB) => getMissingProps(propsB, propsA);

export const getPropsWithUnMatchedValues = (propsA, propsB) => {
    let array = validateProps(propsA, propsB) ?
            [...propsB.keys()]
                .filter(prop => propsA.has(prop))
                .sort()
                .filter(prop => propsA.get(prop) !== propsB.get(prop))
                .map(prop => [prop, [propsA.get(prop), propsB.get(prop)]])
        : [];
    return new Map(array);
};

const validateProps = (propsA, propsB) => !(propsA == null || propsB == null);