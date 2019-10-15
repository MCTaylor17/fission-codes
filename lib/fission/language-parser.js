const defaultLanguagePack = require("../../language-packs/en_fission.json");
const alternateLanguagePack = require("../../language-packs/en_alternate.json");

class Codes {
    constructor(label, language, version) {
        this._label = label;
        this._language = language;
        this._version = version;
    }
    addCategory(key,value) {
        this[key] = value;
    }
}

class Category {
    constructor(digit, label, description) {
        this._digit = digit; // string [0-9A-F]
        this._label = label; // string
        this._description = description; // string
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
        this.hexRange = Array.from(Array(16).keys()).map(key => key.toString(16).toUpperCase());
        this.codes = new Codes(this.lang.label, this.lang.language, this.lang.version)
        this.traversable();
        this.lang = null;
    }

    parse(unknown) {
        if(typeof unknown === "string") return this.parseString(unknown);
        if(typeof unknown === "number") return this.parseNumber(unknown);
        throw "Expected string or number, not " + typeof unknown;
    }

    parseNumber(hexNumber) {
        if(typeof hexNumber !== "number") throw "Unexpected type " + typeof hexNumber;
        if(hexNumber < 0 || hexNumber > 255) throw "Out of range.  Number must be between 0x00 (0) and 0xFF (255), not " + hexNumber;

        return this.parseString("0x" + hexNumber.toString(16));
    }

    parseString(hexString) {
        if(typeof hexString !== "string") throw "Unexpected type " + typeof hexString;
        if(hexString.length !== 4) throw "Hex string must be exactly 4 characters, not " + hexString.length;
        if(hexString.charAt(0) !== "0" || hexString.charAt(1) !== "x") throw "Hex string must be prefixed with '0x', not " + hexString.charAt(0) + hexString.charAt(1);
        
        const category = this.codes[hexString.charAt(2).toUpperCase()];
        const reason = category[hexString.charAt(3).toUpperCase()];

        return {
            hexString,
            categoryLabel: category._label,
            categoryDescription: category._description,
            reasonLabel: reason._label,
            //categoryLookup: category._lookup,
            //reasonLookups: reason._lookups
        }
    }

    _createNullCategory(categoryDigit) {
        const nullCategory = new Category(categoryDigit, null, null);
        this.hexRange.forEach(reasonDigit => {
            const nullReason = this._createNullReason(categoryDigit, reasonDigit);
            nullCategory.addReason(reasonDigit, nullReason);            
        });
        return nullCategory;
    }

    _createNullReason(categoryDigit, reasonDigit) {
        const hexString = "0x" + categoryDigit + reasonDigit;
        const hexNumber = parseInt(hexString, 16);
        return new Reason(reasonDigit, null, hexString, hexNumber);
    }
    
    // returns a traversable object that can be accessed using dot-notation
    traversable() {
        this.hexRange.forEach(categoryDigit => {
            const category = this.lang.categories[categoryDigit];
            
            if(category === null) {
                this.codes.addCategory(categoryDigit, this._createNullCategory(categoryDigit));
                return true;
            }

            if(this.codes[category.lookup] !== undefined) throw "Duplicate category lookup found: " + category.lookup;
            
            const categoryData = new Category(categoryDigit, category.label, category.description);            

            const reasonLookups = [];
            this.hexRange.forEach(reasonDigit => {
                const reason = category.reasons[reasonDigit];
                const hexString = "0x" + categoryDigit + reasonDigit;
                const hexValue = parseInt(hexString, 16);

                if(!reason) {
                    categoryData.addReason(reasonDigit, new Reason(reasonDigit, null, hexString, hexValue));
                    return true;
                }

                const reasonData = new Reason(reasonDigit, reason.label, hexString, hexValue);
                
                reason.lookups.forEach(lookup => {
                    if(reasonLookups.includes(lookup)) throw "Duplicate category reason lookups: " + lookup
                    categoryData.addReason(lookup, reasonData);
                });
                categoryData.addReason(reasonDigit, reasonData);
            });
            
            // Add category digit key
            this.codes.addCategory(categoryDigit, categoryData);            
            this.codes.addCategory(category.lookup,categoryData);
        });
    }
};

const fission = new Fission(alternateLanguagePack);

// Access language pack info
console.log(fission.codes._label);    // Fission Codes
console.log(fission.codes._language); // en-ca
console.log(fission.codes._version);  // 0.0.1

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

// Parse Fission Codes
console.log(fission.parse("0x11").categoryLabel); // Permission & Control
console.log(fission.parse(0x11).categoryLabel);   // Permission & Control
console.log(fission.parse(17).categoryLabel);     // Permission & Control

// Unassigned Values
console.log("Expect null:",fission.codes[6]._label);
console.log("Expect null:",fission.codes[1][7]._label);
