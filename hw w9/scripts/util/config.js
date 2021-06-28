const QualityEnum = {
    BAD:            "BAD",
    MEDIUM:         "MEDIUM",
    GOOD:           "GOOD"
};

const TVTypeEnum = {
    ANALOG:         "ANALOG",
    DIGITAL:        "DIGITAL"
};

const TelTypeEnum = {
    ANALOG:         "ANALOG",
    INTERNET:       "INTERNET"
};

const TelRangeEnum = {
    CITY:           "CITY",
    INTERCITY:      "INTERCITY",
    INTERNATIONAL:  "INTERNATIONAL"
};

const TelCategoryEnum = {
    HOME:           "HOME",
    COMPANY:        "COMPANY"
};

const SexEnum = {
    MALE:           "MALE",
    FEMALE:         "FEMALE",

    isSexValid(sex){
        return (this.MALE == sex || this.FEMALE == sex);
    }
};

const StatusEnum = {
    POOR:           "POOR",
    MEDIUM:         "MEDIUM",
    RICH:           "RICH",

    isStatusValid(status){
        return (this.POOR   == status ||
                this.MEDIUM == status ||
                this.RICH   == status);
    }
};