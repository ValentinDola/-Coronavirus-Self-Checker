export const _doCheck = (list: Array<any>, id: any): Array<any> => {
    let listSet = new Set(list);
    if(id === 'none' && listSet.has('none')) return [];
    if(id === 'none' && !listSet.has('none')) return [id];
    if(id !== 'none' && listSet.has('none')) return [id];

    listSet.has(id) ? listSet.delete(id) : listSet.add(id);
    return Array.from(listSet);
};

export const _addOrRemove = (list: Array<any>, id: any): Array<any> => {
    let listSet = new Set(list);
    listSet.has(id) ? listSet.delete(id) : listSet.add(id);
    return Array.from(listSet);
};

export const _ifCheckAnySymptom = (list: Array<any>): boolean => {
    let checkedSet = new Set(list);
    return list.length >= 1 && !checkedSet.has('none');
};

export const _ifCheckNone = (list: Array<any>): boolean => {
    let checkedSet = new Set(list);
    return list.length === 1 && checkedSet.has('none');
};

export const _getSymptoms = (gender: number, age: number): Array<{id: string, value: string}> => {
    return [
        {
            id: 's1',
            value: 'Chronic lung disease, such as moderate to severe asthma, COPD (chronic obstructive pulmonary disease), cystic fibrosis, or pulmonary fibrosis'
        },
        {
            id: 's2',
            value: 'Serious heart condition, such as heart failure, cardiomyopathy, heart attack, or blocked arteries to the heart'
        },
        {id: 's3', value: 'Weakened immune system or taking medications that may cause immune suppression'},
        {id: 's4', value: 'Obesity'},
        {id: 's5', value: 'Diabetes, chronic kidney disease, or liver disease'},
        {id: 's6', value: 'High blood pressure'},
        {id: 's7', value: 'Cancer'},
        {id: 's8', value: 'HIV'},
        {id: 's9', value: 'Blood disorder, such as sickle cell disease or thalassemia'},
        {id: 's10', value: 'Cerebrovascular disease or neurologic condition, such as stroke or dementia'},
        {id: 's11', value: 'Smoking or vaping'},
        ...((gender === 0 || gender === 2) && (age >= 12 && age < 60)) ? [{id: 's12', value: 'Pregnancy'}] : [],
        {id: 'none', value: 'None of the above'},
    ];
};

export const _getSymptomsPED = (gender: number, age: number): Array<{id: string, value: string}> => {
    return [
        {id: 's1', value: 'Lung disease, such as moderate to severe asthma or cystic fibrosis'},
        {id: 's2', value: 'Born premature'},
        {id: 's3', value: 'Serious heart condition, such as congenital heart defect'},
        {id: 's4', value: 'Weakened immune system or taking medications that may cause immune suppression'},
        {id: 's5', value: 'Obesity'},
        {id: 's6', value: 'Diabetes, kidney disease, or liver disease'},
        {id: 's7', value: 'Cancer'},
        {id: 's8', value: 'HIV'},
        {id: 's9', value: 'Blood disorder, such as sickle cell disease or thalassemia'},
        {id: 's10', value: 'Neurologic condition, such as cerebral palsy'},
        {id: 's11', value: 'Smoking or vaping'},
        ...((gender === 0 || gender === 2) && (age >= 12 && age < 60)) ? [{id: 's12', value: 'Pregnancy'}] : [],
        {id: 'none', value: 'None of the above'}
    ];
};

export const _containsAnyOfSub = (list: Array<any>, sub: Array<any>): boolean => {
    if(list.length === 0 || sub.length === 0) return false;
    const subSet = new Set(sub);
    return list.filter(s => subSet.has(s)).length !== 0;
};

export const _containsAnyOfSubOnly = (list: Array<any>, sub: Array<any>): boolean => {
    if(list.length === 0 || sub.length === 0) return false;
    const subSet = new Set(sub);
    return list.map(s => subSet.has(s)).every(f => f);
};

export const _containsItem = (list: Array<any>, item: any): boolean => {
    return list.find(i => i === item) === item;
};