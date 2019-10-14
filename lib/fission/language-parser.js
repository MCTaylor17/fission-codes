const defaultLanguagePack = require("../../language-packs/en_fission.json");

class Fission {
    constructor(languagePack) {
        this.lang = languagePack || defaultLanguagePack;
        this.codes = this.traversable();
        this.lang = null;
    }
    
    set language(languagePack) {
        this.lang = languagePack;
        this.codes = this.traversable();
        this.lang = null;
    }

    // returns a traversable object that can be accessed using dot-notation
    traversable() {

        const data = {};

        Object.keys(this.lang.categories).forEach(categoryKey => {
            const category = this.lang.categories[categoryKey];

            if(category === null) return true; // TBD/Reserved
            if(data[category.lookup] !== undefined) throw "Duplicate category lookup found: " + category.lookup;
            
            const categoryReasons = category.reasons;
            const reasonLookups = [];
            const categoryData = {
                _digit: categoryKey,
                _label: category.label,
                _description: category.description,
            };            
            
            // Each Reason
            Object.keys(categoryReasons).forEach(reasonKey => {
                const reason = categoryReasons[reasonKey];

                if(reason === null) return true; // TBD/Reserved

                const hexString = "0x" + categoryKey + reasonKey;
                const hexValue = parseInt(hexString, 16);

                const reasonData = {
                    _digit: reasonKey,
                    _label: reason.label,
                    _hexString: hexString,
                    _hexValue: hexValue
                }
                
                // Each Lookup
                reason.lookups.forEach(lookup => {
                    if(reasonLookups.includes(lookup)) throw "Duplicate category reason lookups: " + lookup
                    if(data[reason.lookup] !== undefined) throw "Duplicate category lookup found: " + category.lookup;
                    categoryData[lookup] = reasonData;
                });
            });
            data[category.lookup] = categoryData;
        });

        return data;
    }
};

const fission = new Fission();

console.log(fission.codes.PERMISSION._digit);
console.log(fission.codes.PERMISSION._label);
console.log(fission.codes.PERMISSION._description);
console.log(fission.codes.PERMISSION.ALLOWED._digit);
console.log(fission.codes.PERMISSION.ALLOWED._label);
console.log(fission.codes.PERMISSION.ALLOWED._hexString);
console.log(fission.codes.PERMISSION.ALLOWED._hexValue);
console.log(fission.codes.PERMISSION.GO._hexValue);