const defaultLanguagePack = require("../../language-packs/en_fission.json");
const alternateLanguagePack = require("../../language-packs/en_alternate.json");

class Category {
    constructor(digit, label, description) {
        this._digit = digit, // string [0-9A-F]
        this._label = label, // string
        this._description = description// string
        this["0"] = null; // Reason
        this["1"] = null; // Reason
        this["2"] = null; // Reason
        this["3"] = null; // Reason
        this["4"] = null; // Reason
        this["5"] = null; // Reason
        this["6"] = null; // Reason
        this["7"] = null; // Reason
        this["8"] = null; // Reason
        this["9"] = null; // Reason
        this["A"] = null; // Reason
        this["B"] = null; // Reason
        this["C"] = null; // Reason
        this["D"] = null; // Reason
        this["E"] = null; // Reason
        this["F"] = null; // Reason
    }
    
    addReason(key,value) {
        this[key] = value; // string [LOOKUP]: Reason
    }
}

class Reason {
    constructor(digit, label, hexString, hexValue) {
        this._digit = digit, // string [0-9A-F]
        this._label = label, // string
        this._hexString = hexString, // string 0x[0-9A-F]
        this._hexValue = hexValue // int 0-255
    }
}

class Fission {
    constructor(languagePack) {
        this.lang = languagePack || defaultLanguagePack;
        this.codes = this.traversable();
        this.lang = null;
    }

    // returns a traversable object that can be accessed using dot-notation
    traversable() {
        const codes = {
            "0": null, // Category
            "1": null, // Category
            "2": null, // Category
            "3": null, // Category
            "4": null, // Category
            "5": null, // Category
            "6": null, // Category
            "7": null, // Category
            "8": null, // Category
            "9": null, // Category
            "A": null, // Category
            "B": null, // Category
            "C": null, // Category
            "D": null, // Category
            "E": null, // Category
            "F": null, // Category
        };

        Object.keys(this.lang.categories).forEach(categoryDigit => {
            const category = this.lang.categories[categoryDigit];

            if(category === null) return true; // TBD/Reserved
            if(codes[category.lookup] !== undefined) throw "Duplicate category lookup found: " + category.lookup;
            
            const categoryReasons = category.reasons;
            const categoryData = new Category(categoryDigit, category.label, category.description);            
            
            // Add category digit key
            codes[categoryDigit] = categoryData;
            
            // Each Reason
            const reasonLookups = [];
            Object.keys(categoryReasons).forEach(reasonDigit => {
                const reason = categoryReasons[reasonDigit];
                const hexString = "0x" + categoryDigit + reasonDigit;
                const hexValue = parseInt(hexString, 16);
                const label = reason ? reason.label : null;
                const lookups = reason ? reason.lookups : [];                

                const reasonData = new Reason(reasonDigit, label, hexString, hexValue);

                // Add reason digit key
                categoryData.addReason(reasonDigit, reasonData);

                // Add reason for each Lookup
                lookups.forEach(lookup => {
                    if(reasonLookups.includes(lookup)) throw "Duplicate category reason lookups: " + lookup
                    categoryData.addReason(lookup, reasonData);
                });
            });
            codes[category.lookup] = categoryData;
        });

        return codes;
    }
};

const fission = new Fission(alternateLanguagePack);

// Access via hex digits
console.log(fission.codes["2"]["A"]._hexString); // 0x2A
console.log(fission.codes[2].A._hexString);      // 0x2A

// Access via lookup strings
console.log(fission.codes["PERMISSION"].ALLOWED._hexString); // 0x11 
console.log(fission.codes.PERMISSION["ALLOWED"]._hexString); // 0x11 
console.log(fission.codes.PERMISSION.GO._hexString);         // 0x11 (Alternate lookups)

// Access via mixed approach
console.log(fission.codes.PERMISSION[1]._digit); // 1 (reason digit)
console.log(fission.codes[1].ALLOWED._digit);    // 1 (reason digit)

// Access Category information
console.log(fission.codes.PERMISSION._digit);       // 1 (category digit)
console.log(fission.codes.PERMISSION._label);       // Permission & Control
console.log(fission.codes.PERMISSION._description); // Also used for common state machine actions (ex. “stoplight” actions).

// Access Reason information
console.log(fission.codes.PERMISSION.ALLOWED._digit);     // 1 (reason digit)
console.log(fission.codes.PERMISSION.ALLOWED._label);     // Allowed or Go
console.log(fission.codes.PERMISSION.ALLOWED._hexString); // 0x11
console.log(fission.codes.PERMISSION.ALLOWED._hexValue);  // 17