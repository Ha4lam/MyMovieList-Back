const modelOptions = {
    toJson: {
        virtuals: true,
        transfrom: (_, obj) => {
            delete obj._id;
            return obj
        }
    },
    toObject: {
        virtuals: true,
        transfrom: (_, obj) => {
            delete obj._id;
            return obj
        }
    },
    versionKey: false
}

export default modelOptions;