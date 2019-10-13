{
    "0": { 
        "label": "",
        "lookup": "GENERIC",
        "description": "General codes. These double as bare “reasons”, since 0y01 == 1.",
        "codes": {
            "0": {
                "label": "Failure",
                "lookups": ["FAILURE"]
            },
            "1": {
                "label": "Success",
                "lookups": ["SUCCESS"]
            },
            "2": {
                "label": "Awaiting Others",
                "lookups": ["AWAITING_OTHERS"]
            },
            "3": {
                "label": "Accepted",
                "lookups": ["ACCEPTED"]
            },
            "4": {
                "label": "Lower Limit or Insufficient",
                "lookups": ["LOWER_LIMIT","INSUFFICIENT"]
            },
            "5": {
                "label": "Reciever Action Requested",
                "lookups": ["RECIEVER_ACTION_REQUESTED"]
            },
            "6": {
                "label": "Upper Limit",
                "lookups": ["UPPER_LIMIT"]
            },
            "7": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "8": {
                "label": "Duplicate, Unnessesary, or Inapplicable",
                "lookups": ["DUPLICATE, UNNESSESARY, OR INAPPLICABLE"]
            },
            "9": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "A": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "B": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "C": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "D": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "E": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "F": {
                "label": "Informational or Metadata",
                "lookups": ["INFORMATIONAL","METADATA"]
            },
        },
    },
    "1": { 
        "label": "Permission & Control",
        "lookup": "PERMISSION",
        "description": "Also used for common state machine actions (ex. “stoplight” actions).",
        "codes": {
            "0": {
                "label": "Disallowed or Stop",
                "lookups": ["DISALLOWED","STOP"]
            },
            "1": {
                "label": "Allowed or Go",
                "lookups": ["ALLOWED","GO"]
            },
            "2": {
                "label": "Awaiting Other’s Permission",
                "lookups": ["AWAITING_OTHERS_PERMISSION"]
            },
            "3": {
                "label": "Permission Requested",
                "lookups": ["PERMISSION_REQUESTED"]
            },
            "4": {
                "label": "Too Open / Insecure",
                "lookups": ["TOO_OPEN","INSECURE"]
            },
            "5": {
                "label": "Needs Your Permission or Request for Continuation",
                "lookups": ["NEEDS_YOUR_PERMISSION","REQUEST_FOR_CONTINUATION"]
            },
            "6": {
                "label": "Revoked or Banned",
                "lookups": ["REVOKED","BANNED"]
            },
            "7": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "8": {
                "label": "Not Applicatable to Current State",
                "lookups": ["NOT_APPLICATABLE_TO_CURRENT_STATE"]
            },
            "9": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "A": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "B": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "C": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "D": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "E": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "F": {
                "label": "Permission Details or Control Conditions",
                "lookups": ["PERMISSION_DETAILS","CONTROL_CONDITIONS"]
            },
        },
    },
    "2": { 
        "label": "Find, Inequalities & Range",
        "lookup": "FIND, INEQUALITIES & RANGE",
        "description": "This range is broadly intended for finding and matching. Data lookups and order matching are two common use cases.",
        "codes": {
            "0": {
                "label": "Not Found, Unequal, or Out of Range",
                "lookups": ["NOT_FOUND","UNEQUAL","OUT_OF_RANGE"]
            },
            "1": {
                "label": "Found, Equal or In Range",
                "lookups": ["FOUND","EQUAL","IN_RANGE"]
            },
            "2": {
                "label": "Awaiting Match",
                "lookups": ["AWAITING_MATCH"]
            },
            "3": {
                "label": "Match Request Sent",
                "lookups": ["MATCH_REQUEST_SENT"]
            },
            "4": {
                "label": "Below Range or Underflow",
                "lookups": ["BELOW_RANGE","UNDERFLOW"]
            },
            "5": {
                "label": "Request for Match",
                "lookups": ["REQUEST_FOR_MATCH"]
            },
            "6": {
                "label": "Above Range or Overflow",
                "lookups": ["ABOVE_RANGE","OVERFLOW"]
            },
            "7": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "8": {
                "label": "Duplicate, Conflict, or Collision",
                "lookups": ["DUPLICATE","CONFLICT","COLLISION"]
            },
            "9": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "A": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "B": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "C": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "D": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "E": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "F": {
                "label": "Matching Meta or Info",
                "lookups": ["MATCHING_META","INFO"]
            },
        },
    },
    "3": { 
        "label": "Negotiation & Governance",
        "lookup": "NEGOTIATION & GOVERNANCE",
        "description": "Negotiation, and very broadly the flow of such transactions. Note that “other party” may be more than one actor (not necessarily the sender).",
        "codes": {
            "0": {
                "label": "Sender Disagrees or Nay",
                "lookups": ["SENDER_DISAGREES","NAY"]
            },
            "1": {
                "label": "Sender Agrees or Yea",
                "lookups": ["SENDER_AGREES","YEA"]
            },
            "2": {
                "label": "Awaiting Ratification",
                "lookups": ["AWAITING_RATIFICATION"]
            },
            "3": {
                "label": "Offer Sent or Voted",
                "lookups": ["OFFER_SENT","VOTED"]
            },
            "4": {
                "label": "Quorum Not Reached",
                "lookups": ["QUORUM_NOT_REACHED"]
            },
            "5": {
                "label": "Receiver’s Ratification Requested",
                "lookups": ["RECEIVERS_RATIFICATION_REQUESTED"]
            },
            "6": {
                "label": "Offer or Vote Limit Reached",
                "lookups": ["OFFER","VOTE_LIMIT_REACHED"]
            },
            "7": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "8": {
                "label": "Already Voted",
                "lookups": ["ALREADY_VOTED"]
            },
            "9": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "A": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "B": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "C": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "D": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "E": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "F": {
                "label": "Negotiation Rules or Participation Info",
                "lookups": ["NEGOTIATION_RULES","PARTICIPATION_INFO"]
            },
        },
    },
    "4": { 
        "label": "Availability & Time",
        "lookup": "AVAILABILITY & TIME",
        "description": "Service or action availability.",
        "codes": {
            "0": {
                "label": "Unavailable",
                "lookups": ["UNAVAILABLE"]
            },
            "1": {
                "label": "Available",
                "lookups": ["AVAILABLE"]
            },
            "2": {
                "label": "Paused",
                "lookups": ["PAUSED"]
            },
            "3": {
                "label": "Queued",
                "lookups": ["QUEUED"]
            },
            "4": {
                "label": "Not Available Yet",
                "lookups": ["NOT_AVAILABLE_YET"]
            },
            "5": {
                "label": "Awaiting Your Availability",
                "lookups": ["AWAITING_YOUR_AVAILABILITY"]
            },
            "6": {
                "label": "Expired",
                "lookups": ["EXPIRED"]
            },
            "7": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "8": {
                "label": "Already Done",
                "lookups": ["ALREADY_DONE"]
            },
            "9": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "A": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "B": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "C": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "D": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "E": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "F": {
                "label": "Availability Rules or Info (ex. time since or until)",
                "lookups": ["AVAILABILITY_RULES","INFO","TIME_SINCE","UNTIL"]
            },
        },
    },
    "5": { 
        "label": "Tokens, Funds & Finance",
        "lookup": "TOKENS, FUNDS & FINANCE",
        "description": "Special token and financial concepts. Many related concepts are included in other ranges.",
        "codes": {
            "0": {
                "label": "Transfer Failed",
                "lookups": ["TRANSFER_FAILED"]
            },
            "1": {
                "label": "Transfer Successful",
                "lookups": ["TRANSFER_SUCCESSFUL"]
            },
            "2": {
                "label": "Awaiting Payment From Others",
                "lookups": ["AWAITING_PAYMENT_FROM_OTHERS"]
            },
            "3": {
                "label": "Hold or Escrow",
                "lookups": ["HOLD","ESCROW"]
            },
            "4": {
                "label": "Insufficient Funds",
                "lookups": ["INSUFFICIENT_FUNDS"]
            },
            "5": {
                "label": "Funds Requested",
                "lookups": ["FUNDS_REQUESTED"]
            },
            "6": {
                "label": "Transfer Volume Exceeded",
                "lookups": ["TRANSFER_VOLUME_EXCEEDED"]
            },
            "7": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "8": {
                "label": "Funds Not Required",
                "lookups": ["FUNDS_NOT_REQUIRED"]
            },
            "9": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "A": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "B": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "C": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "D": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "E": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "F": {
                "label": "Token or Financial Information",
                "lookups": ["TOKEN","FINANCIAL_INFORMATION"]
            },
        },
    },
    "6": { 
        "label": "",
        "lookup": "TBD",
        "description": "Currently unspecified. (Full range reserved)",
        "codes": {
            
        },
    },
    "7": { 
        "label": "",
        "lookup": "TBD",
        "description": "Currently unspecifie. (Full range reserved)",
        "codes": {
            
        },
    },
    "8": { 
        "label": "",
        "lookup": "TBD",
        "description": "Currently unspecified. (Full range reserved)",
        "codes": {
            
        },
    },
    "9": { 
        "label": "",
        "lookup": "TBD",
        "description": "Currently unspecified. (Full range reserved)",
        "codes": {
        },
    },
    "A": { 
        "label": "Application-Specific Codes",
        "lookup": "APPLICATION-SPECIFIC CODES",
        "description": "Contracts may have special states that they need to signal. This proposal only outlines the broadest meanings, but implementers may have very specific meanings for each, as long as they are coherent with the broader definition.",
        "codes": {
            "0": {
                "label": "App-Specific Failure",
                "lookups": ["APP_SPECIFIC_FAILURE"]
            },
            "1": {
                "label": "App-Specific Success",
                "lookups": ["APP_SPECIFIC_SUCCESS"]
            },
            "2": {
                "label": "App-Specific Awaiting Others",
                "lookups": ["APP_SPECIFIC_AWAITING_OTHERS"]
            },
            "3": {
                "label": "App-Specific Acceptance",
                "lookups": ["APP_SPECIFIC_ACCEPTANCE"]
            },
            "4": {
                "label": "App-Specific Below Condition",
                "lookups": ["APP_SPECIFIC_BELOW_CONDITION"]
            },
            "5": {
                "label": "App-Specific Receiver Action Requested",
                "lookups": ["APP_SPECIFIC_RECEIVER_ACTION_REQUESTED"]
            },
            "6": {
                "label": "App-Specific Expiry or Limit",
                "lookups": ["APP_SPECIFIC_EXPIRY","LIMIT"]
            },
            "7": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "8": {
                "label": "App-Specific Inapplicable Condition",
                "lookups": ["APP_SPECIFIC_INAPPLICABLE_CONDITION"]
            },
            "9": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "A": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "B": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "C": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "D": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "E": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "F": {
                "label": "App-Specific Meta or Info",
                "lookups": ["APP_SPECIFIC_META","INFO"]
            },
        },
    },
    "B": { 
        "label": "",
        "lookup": "TBD",
        "description": "Currently unspecified. (Full range reserved)",
    },
    "C": { 
        "label": "",
        "lookup": "TBD",
        "description": "Currently unspecified. (Full range reserved)",
    },
    "D": { 
        "label": "",
        "lookup": "TBD",
        "description": "Currently unspecified. (Full range reserved)",
    },
    "E": { 
        "label": "Encryption, Identity & Proofs",
        "lookup": "ENCRYPTION, IDENTITY & PROOFS",
        "description": "Actions around signatures, cryptography, signing, and application-level authentication. The meta code 0yEF is often used to signal a payload descibing the algorithm or process used.",
        "codes": {
            "0": {
                "label": "Decrypt Failure",
                "lookups": ["DECRYPT_FAILURE"]
            },
            "1": {
                "label": "Decrypt Success",
                "lookups": ["DECRYPT_SUCCESS"]
            },
            "2": {
                "label": "Awaiting Other Signatures or Keys",
                "lookups": ["AWAITING_OTHER_SIGNATURES","KEYS"]
            },    
            "3": {
                "label": "Signed",
                "lookups": ["SIGNED"]
            },
            "4": {
                "label": "Unsigned or Untrusted",
                "lookups": ["UNSIGNED","UNTRUSTED"]
            },
            "5": {
                "label": "Signature Required",
                "lookups": ["SIGNATURE_REQUIRED"]
            },
            "6": {
                "label": "Known to be Compromised",
                "lookups": ["KNOWN_TO_BE_COMPROMISED"]
            },
            "7": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "8": {
                "label": "Already Signed or Not Encrypted",
                "lookups": ["ALREADY_SIGNED","NOT_ENCRYPTED"]
            },
            "9": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "A": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "B": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "C": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "D": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "E": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "F": {
                "label": "Cryptography, ID, or Proof Metadata",
                "lookups": ["CRYPTOGRAPHY","ID","PROOF_METADATA"]
            },
        },
    },
    "F": { 
        "label": "Off-Chain",
        "lookup": "OFF-CHAIN",
        "description": "For off-chain actions. Much like th 0y0*: Generic range, 0xF is very general, and does little to modify the reason. Among other things, the meta code 0yFF may be used to describe what the off-chain process is.",
        "codes": {
            "0": {
                "label": "Off-Chain Failure",
                "lookups": ["OFF_CHAIN_FAILURE"]
            },
            "1": {
                "label": "Off-Chain Success",
                "lookups": ["OFF_CHAIN_SUCCESS"]
            },
            "2": {
                "label": "Awaiting Off-Chain Process",
                "lookups": ["AWAITING_OFF-CHAIN_PROCESS"]
            },
            "3": {
                "label": "Off-Chain Process Started",
                "lookups": ["OFF_CHAIN_PROCESS_STARTED"]
            },
            "4": {
                "label": "Off-Chain Service Unreachable",
                "lookups": ["OFF_CHAIN_SERVICE_UNREACHABLE"]
            },
            "5": {
                "label": "Off-Chain Action Required",
                "lookups": ["OFF_CHAIN_ACTION_REQUIRED"]
            },
            "6": {
                "label": "Off-Chain Expiry or Limit Reached",
                "lookups": ["OFF_CHAIN_EXPIRY","LIMIT_REACHED"]
            },
            "7": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "8": {
                "label": "Duplicate Off-Chain Request",
                "lookups": ["DUPLICATE OFF-CHAIN_REQUEST"]
            },
            "9": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "A": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "B": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "C": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "D": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "E": {
                "label": "[reserved]",
                "lookups": ["[RESERVED]"]
            },
            "F": {
                "label": "Off-Chain Info or Meta",
                "lookups": ["OFF_CHAIN_INFO","META"]
            },
        },
    },
}