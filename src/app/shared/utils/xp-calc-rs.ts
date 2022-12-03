import { isEmptyOrNull } from "../utils";
import * as _ from 'underscore';

export function getExpRemainder(xpTable: { level: number, xp: number }[] = [], from: number, to: number) {
    let totalXpRemainder = 0;
    const fromObj = xpTable.find(x => x.level === from);
    const toObj = xpTable.find(x => x.level === to);
    if (!fromObj || !toObj || from > to || isEmptyOrNull(from) || isEmptyOrNull(to) || Number.isNaN(from) || Number.isNaN(to) || !Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to > 99) {
        totalXpRemainder = 0;
    } else {
        totalXpRemainder = toObj.xp - fromObj.xp;
    }
    return totalXpRemainder
}


export function getExpPricing(xpTable: any[] = [], skillTable: any[] = [], skillId: string, from: number, to: number) {
    if (!skillId) {
        return { totalXpPricing: 0, totalXpToGain: 0 };
    }
    let totalXpPricing = 0;
    let totalXpToGain = 0;
    if (from > to || isEmptyOrNull(from) || isEmptyOrNull(to) || Number.isNaN(from) || Number.isNaN(to) || !Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to > 99) {
        totalXpPricing = 0;
        totalXpToGain = 0;
    } else {
        const skill = skillTable.find(skill => `${skill.skillId}` === `${skillId}`);
        if (skill) {
            const sortedSkillRange = _.sortBy(skill.range, 'to');
            const maxIndex = sortedSkillRange.findIndex(x => x.from <= to && to <= x.to);
            const minIndex = sortedSkillRange.findIndex(x => x.from <= from && from <= x.to);
            let filteredSkillRange = [];
            for (let i = minIndex; i <= maxIndex; i++) {
                filteredSkillRange.push(sortedSkillRange[i]);
            }
            filteredSkillRange = filteredSkillRange.filter(x => x != undefined);
            filteredSkillRange.forEach(x => {
                let finalTo = x.to;
                let finalFrom = x.from;
                if (from <= x.from) {
                    finalFrom = x.from;
                } else {
                    finalFrom = from;
                }
                /**
                 * Working as expected
                 */
                if (to <= x.to) {
                    finalTo = to;
                } else {
                    finalTo = x.to;
                }
                totalXpToGain += getExpRemainder(xpTable, finalFrom, finalTo);
                totalXpPricing += totalXpToGain * x.price;
            })
        }
        // }
        return { totalXpPricing, totalXpToGain };
    }
}