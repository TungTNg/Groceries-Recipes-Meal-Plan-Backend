const dynamoose = require("dynamoose");
const mealPlanSchema = new dynamoose.Schema(
    {
        id: { type: String, required: true },
        month: { type: Number, required: true },
        weekInfo: {
            type: Array,
            schema: [{
                type: String,
                schema: {
                    weekNum: { type: String, require: true },
                    dishId: { type: String, required: true },
                    dishName: { type: String, required: true }
                }
            }]
        }
    }, {
    "saveUnknown": true,
    "timestamps": true
});

module.exports = dynamoose.model("Meal Plan", mealPlanSchema);