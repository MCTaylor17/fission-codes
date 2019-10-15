const defaultLanguagePack = require("./default-language-pack.json");

class Codes {
    constructor(label, language, version) {
        this.label = label;
        this.language = language;
        this.version = version;
    }
    addCategory(key,value) {
        this[key] = value;
    }
}

class Category {
    constructor(categoryDigit, label, description, lookups) {
        this.digit = categoryDigit; // string [0-9A-F]
        this.label = label || null; // string
        this.description = description || null; // string
        this.lookups = lookups || [];
    }
    
    addReason(key,value) {
        this[key] = value; // string [LOOKUP]: Reason
    }
}

class Reason {
    constructor(categoryDigit, reasonDigit, label, lookups) {
        this.digit = reasonDigit; // string [0-9A-F]
        this.label = label || null; // string
        this.lookups = lookups || [];
        this.hexString = this._getHexString(categoryDigit, reasonDigit); // string 0x[0-9A-F]
        this.hexNumber = this._getHexNumber(this.hexString); // int 0-255
    }
    
    _getHexString(categoryDigit, reasonDigit) {
        return "0x" + categoryDigit + reasonDigit;
    }

    _getHexNumber(hexString) {
        return parseInt(hexString,16);
    }
}

class Fission {
    constructor(languagePack) {
        this.lang = languagePack || defaultLanguagePack;
        this.hexRange = Array.from(Array(16).keys()).map(key => key.toString(16).toUpperCase());
        this.codes = new Codes(this.lang.label, this.lang.language, this.lang.version)
        this._expandHexCategories();
        this._expandHexReasons();
        this._expandReasonLookups();
        this._expandCategoryLookups();
    }

    parse(unknown) {
        if(typeof unknown === "string") return this.parseString(unknown);
        if(typeof unknown === "number") return this.parseNumber(unknown);
        throw "Expected string or number, not " + typeof unknown;
    }

    parseNumber(hexNumber) {
        if(typeof hexNumber !== "number") throw "Expected number, not " + typeof hexNumber;
        if(hexNumber < 0 || hexNumber > 255) throw "Out of range.  Number must be between 0 (0x00) and 255 (0xFF), not " + hexNumber;

        return this.parseString("0x" + hexNumber.toString(16));
    }

    parseString(hexString) {
        if(typeof hexString !== "string") throw "Expected string, not " + typeof hexString;
        if(hexString.length !== 4) throw "Hex string must be exactly 4 characters, not " + hexString.length;
        if(hexString.charAt(0) !== "0" || hexString.charAt(1) !== "x") throw "Hex string must be prefixed with '0x', not " + hexString;
        
        const category = this.codes[hexString.charAt(2).toUpperCase()];
        const reason = category[hexString.charAt(3).toUpperCase()];

        return {
            hexString,
            categoryLabel: category.label,
            categoryDescription: category.description,
            reasonLabel: reason.label,
            categoryLookups: category.lookups,
            reasonLookups: reason.lookups
        }
    }

    _expandCodes() {
    }

    _expandHexCategories() {
        this.hexRange.forEach(categoryDigit => {
            const category = this.lang.categories[categoryDigit];
            
            if(!category) {
                this.codes.addCategory(categoryDigit, this._createNullCategory(categoryDigit));
            } else {
                this.codes.addCategory(categoryDigit, new Category(categoryDigit, category.label, category.description, category.lookups));            
            }
        });
    }
    
    _expandHexReasons() {
        this.hexRange.forEach(categoryDigit => {
            const category = this.lang.categories[categoryDigit];
            const categoryData = this.codes[categoryDigit];
            
            this.hexRange.forEach(reasonDigit => {
                
                if(!category) {
                    categoryData.addReason(reasonDigit, new Reason(categoryDigit, reasonDigit));
                    return true;
                } 
                
                const reason = category.reasons[reasonDigit];
                if(!reason) {
                    categoryData.addReason(reasonDigit, new Reason(categoryDigit, reasonDigit));
                    return true;
                }
                
                categoryData.addReason(reasonDigit, new Reason(categoryDigit, reasonDigit, reason.label, reason.lookups));
            });
        });
    }
    
    _expandReasonLookups() {
        this.hexRange.forEach(categoryDigit => {
            const category = this.codes[categoryDigit];
            
            this.hexRange.forEach(reasonDigit => {
                const reason = category[reasonDigit];
                reason.lookups.forEach(lookup => {
                    if(category[lookup]) throw "Duplicate lookup reasons: " + lookup;
                    category[lookup] = reason;
                });
            });
        });
    }
    
    _expandCategoryLookups() {
        this.hexRange.forEach(categoryDigit => {
            const category = this.codes[categoryDigit];
            category.lookups.forEach(lookup => {
                if(this.codes[lookup]) throw "Duplicate lookup categories: " + lookup;
                this.codes[lookup] = category;
            });
        });
    }

    _createNullCategory(categoryDigit) {
        const nullCategory = new Category(categoryDigit);
        this.hexRange.forEach(reasonDigit => {
            nullCategory.addReason(reasonDigit, new Reason(categoryDigit, reasonDigit));            
        });
        return nullCategory;
    }
};

const fission = new Fission();

// Access language pack info
console.log(fission.codes.label);    // Fission Codes
console.log(fission.codes.language); // en-ca
console.log(fission.codes.version);  // 0.0.1

// Access via hex digits
console.log(fission.codes["2"]["A"].hexString); // 0x2A
console.log(fission.codes[2].A.hexString);      // 0x2A

// Access via lookup strings
console.log(fission.codes["PERMISSION"].ALLOWED.hexString); // 0x11 
console.log(fission.codes.PERMISSION["ALLOWED"].hexString); // 0x11 
console.log(fission.codes.CONTROL.GO.hexString);            // 0x11 (Alternate lookups)

// Access via mixed approach
console.log(fission.codes.PERMISSION[1].digit); // 1 (reason digit)
console.log(fission.codes[1].ALLOWED.digit);    // 1 (reason digit)

// Access Category information
console.log(fission.codes.PERMISSION.digit);       // 1 (category digit)
console.log(fission.codes.PERMISSION.label);       // Permission & Control
console.log(fission.codes.PERMISSION.description); // Also used for common state machine actions (ex. “stoplight” actions).

// Access Reason information
console.log(fission.codes.PERMISSION.ALLOWED.digit);     // 1 (reason digit)
console.log(fission.codes.PERMISSION.ALLOWED.label);     // Allowed or Go
console.log(fission.codes.PERMISSION.ALLOWED.hexString); // 0x11
console.log(fission.codes.PERMISSION.ALLOWED.hexNumber);  // 17

// Parse Fission Codes
console.log(fission.parse("0x11").categoryLabel); // Permission & Control
console.log(fission.parse(0x11).categoryLabel);   // Permission & Control
console.log(fission.parse(17).categoryLabel);     // Permission & Control